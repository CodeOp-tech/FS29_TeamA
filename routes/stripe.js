require("dotenv").config();
const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);



router.post('/create-checkout-session', async (req, res) => {

  // const line_items = req.body.cartItems.map(item => {

  // })
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: { 
              name: 'product name',
            },
            unit_amount: 2000, //this is turned to dollars at check-out on Stripe
          }, 
          quantity: 3,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:5001`, //payment object or a payment intent
      cancel_url: `http://localhost:5001`,
    });
    res.send({url: session.url});
  });
  
  module.exports = router
