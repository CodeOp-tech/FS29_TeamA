require("dotenv").config();
const path = require("path");
const sgMail = require("@sendgrid/mail");
const express = require("express");
const router = express.Router();
const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.post("/contact", (req, res) => {
  console.log(req);
  const msg = {
    to: req.body.to, // Change to your recipient
    from: req.body.from, // Change to your verified sender
    subject: req.body.subject,
    text: `Hey, Thank you for contacting us! A member of our team will review your message and get back to you shortly!`,
  };
  try {
    sgMail.send(msg);
    res.send("Message Successfully Sent!");
  } catch (error) {
    res.send("Message Could not be Sent");
  }
});

router.post("/send", (req, res) => {
  console.log(req);
  const msg = {
    to: req.body.to, // Change to your recipient
    from: req.body.from, // Change to your verified sender
    subject: req.body.subject,
    text: `Hey, Thank you for joining us!`,
  };
  try {
    sgMail.send(msg);
    res.send("Message Successfully Sent!");
  } catch (error) {
    res.send("Message Could not be Sent");
  }
});

module.exports = router;
