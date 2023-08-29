var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var db = require("../model/helper");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;

const supersecret = process.env.SUPER_SECRET;

router.post("/register", async (req, res) => {
	const { username, password } = req.body;

	try {
   const hash = await bcrypt.hash(password, saltRounds);

   await db(
      `INSERT INTO users (firstname, lastname, email, password, guest, marketing) VALUES 
		('${firstname}', '${lastname}', '${email}', '${hash}', ${guest}, ${marketing})`
   );

   res.send({ message: "Register successful" });
	} catch (err) {
   res.status(400).send({ message: err.message });
	}
});

router.post("/login", async (req, res) => {});

router.get("/profile", (req, res) => {});

module.exports = router;
