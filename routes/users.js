const selectAll = require('./utils/selectAll');
const selectByKey = require('./utils/selectByKey'); 
const express = require('express');
const router = express.Router();
const db = require("../model/helper");

// CREATE TABLE `users`(
//   `id` BIGINT UNSIGNED NULL AUTO_INCREMENT UNIQUE KEY,
//   `firstname` VARCHAR(255) NOT NULL,
//   `lastname` VARCHAR(255) NOT NULL,
//   `email` VARCHAR(255) NOT NULL,
//   `password` VARCHAR(255) NULL,
//   `guest` TINYINT(1) NOT NULL,
//   `marketing` TINYINT(1) NOT NULL DEFAULT 0
// );

// INSERT INTO users (firstname, lastname, email, password, guest, marketing) 
// 		VALUES ('random', "Random", 'example@domain.com', "efgrafv`xza32534", 0, 1);

//CREATE
router.post('/', async function(req, res, next) {
	const {firstname, lastname, email, password, guest, marketing} = req.body;
	try {
		const response = await db(`INSERT INTO users (firstname, lastname, email, password, guest, marketing) 
		VALUES ('${firstname}', '${lastname}', '${email}', '${password}', ${guest}, ${marketing});`);
		selectAll(req, res, "users", "id");
	} catch (error) {
    res.status(500).send({ error: error.message });
	}
});

//READ

//GET all users
router.get('/', function(req, res) {
	selectAll(req, res, "users", "id");
});

/* GET order by order id */
router.get("/:id", async (req, res) => {
	const id = req.params.id;
	console.log(id);
	console.log(req.query);
	try {
		// const results = await db(`SELECT * FROM users where id = ${id};`);
		const results = selectByKey("users", "id", id);
		res.send(results);
	} catch (error) {
		res.status(500).send(error);
	}
});


// router.get('/:id', (req, res) => {
// 	const key = "id";
// 	const value = req.params.id;
// 	selectByKey(req, res, "users", key, value);
//  });

//DELETE user

router.delete('/:id', async function (req, res, next) {
	const {id} = req.params;
	try {
		console.log("begining of the try");
		const user = await db(`SELECT * FROM users WHERE id = ${id};`);
		if(!user.data.length) {
			console.log("begining of the if");
			res.send({msg: "User not found"});
		}
		console.log(user);
		await db(`DELETE FROM users WHERE id = ${id};`);
		console.log('we are here');
		res.send({msg: 'User deleted!'});
		
	} catch (err) {
		console.log('we are in the catch', err)
		res.status(500).send(err);
	}
});

module.exports = router;

