import Stripe from "stripe";
import { process } from "dotenv";

const stripeServerSide = new Stripe(process.env.STRIPE_SECRET_KEY, {
   apiVersion: "2022-08-01",
});

export { stripeServerSide };
