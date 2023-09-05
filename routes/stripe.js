require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("../model/helper");
const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");

const stripe = require("stripe")(process.env.STRIPE_KEY);

// const bodyParser = require("body-parser");

// router.post(
//   "/webhook",
//   bodyParser.raw({ type: "application/json" }),
//   (req, res) => {
//     const payload = req.body;

//     console.log("Got payload: " + payload);

//     res.status(200).end();
//   }
// );

// router.listen(5001, () => console.log("Runnint on port 5001"));

// const calculateOrderAmount = (products) => {
//   let sum = 0;

//   for (let i = 0; i < products.length; i++) {
//     const unitPrice = products[i].price;
//     const pricePerProduct = unitPrice * products[i].quantity;
//     sum += pricePerProduct;
//   }

//   console.log(sum);
//   return sum;
// };

// router.post("/create-payment-intent", async (req, res) => {
//   const { products } = req.body;

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(products),
//     currency: "eur",
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.send({ clientSecret: paymentIntent.client_secret });
// });

router.post(
  "/create-checkout-session",
  userShouldBeLoggedIn,
  async (req, res) => {
    const { products } = req.body;

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
      success_url: "http://localhost:5173/Success",
      cancel_url: `http://localhost:5173/Cart`, //to cart page
    });

    const currentDate = new Date();
    // the padStart method pads a string with another one until the goal length is met
    // JS returns the month in zero-based indexing, so JAN is represented as 0 and therefore we need to add 1
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    const date = `${year}-${month}-${day}`;

    const resultyay = await db(
      `INSERT INTO orders (user_id, total, fulfilled, cancelled, date) VALUES (${
        req.user_id ? req.user_id : req.body.user_id
      }, ${
        session.amount_total / 100
      }, 0, 0, '${date}'); select last_insert_id();`
    );

    const last_id = resultyay.data[0].insertId;
    console.log(last_id);

    await products.map((product) =>
      db(
        `INSERT INTO product_order (product_id, order_id, product_quantity) VALUES (${product.id}, ${last_id}, ${product.quantity}); UPDATE products SET units = units - ${product.quantity} WHERE id = ${product.id};`
      )
    );

    console.log(session);
    res.send({ session });
  }
);

module.exports = router;
