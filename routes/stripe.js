require("dotenv").config();
const express = require("express");
const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/create-checkout-session", async (req, res) => {
  // const line_items = req.body.cartItems.map(item => {

  // })

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "product name",
          },
          unit_amount: 2000,
        },
        quantity: 3,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: `http://localhost:5001`, //to cart page
  });
  res.send({ url: session.url });
});

module.exports = router;
