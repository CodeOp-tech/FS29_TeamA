require("dotenv").config();
const express = require("express");
const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/create-checkout-session", async (req, res) => {
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
    success_url: "http://localhost:5173/success",
    cancel_url: `http://localhost:5001`, //to cart page
  });

  res.send({ url: session.url });
});

module.exports = router;
