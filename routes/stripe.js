require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("../model/helper");
const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");

const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post(
  "/create-checkout-session",
  userShouldBeLoggedIn,
  async (req, res) => {
    const currentDate = new Date();
    // the padStart method pads a string with another one until the goal length is met
    // JS returns the month in zero-based indexing, so JAN is represented as 0 and therefore we need to add 1
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    const date = `${year}-${month}-${day}`;

    // const { products } = req.body;
    const products = [
      {
        id: 1,
        name: "bishop black",
        price: 200,
        quantity: 2,
      },
    ];

    const resultyay = await db(
      `INSERT INTO orders (user_id, total, fulfilled, cancelled, date) VALUES (${
        req.user_id ? req.user_id : req.body.user_id
      }, ${200000 / 100}, 0, 0, '${date}'); SELECT LAST_INSERT_ID();`
    );

    const last_id = resultyay.data[0].insertId;
    console.log(last_id);

    for (const product of products) {
      const productName = product.name;
      const productId = product.id;
      const productQuantity = product.quantity;

      // Insert into the product_order table
      const insertResult = await db(
        `INSERT INTO product_order (product_id, order_id, product_quantity) VALUES (${productId}, ${last_id}, ${productQuantity});`
      );

      if (insertResult.error) {
        console.log(
          `Error inserting product ${productName} into order ${last_id}: ${insertResult.error}`
        );
      } else {
        console.log(`Product ${productName} added to order ${last_id}`);
      }
    }

    const session = await stripe.checkout.sessions.create({
      line_items: products.map((item) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `http://localhost:5173/Success?order_id=${last_id}`,
      cancel_url: `http://localhost:5173/Cart`, //to cart page
    });

    console.log(session);
    res.send({ url: session.url, id: last_id });
  }
);

module.exports = router;
