//import helper functions 
//import selectAll from './utils/selectAll';
// import selectByKey from './utils/selectByKey';

const selectAll = require('./utils/selectAll');
const selectByKey = require('./utils/selectByKey'); 
const express = require('express');
const router = express.Router();
const db = require("../model/helper");


// /*helper functions */
// //returns all the users in ascending order based on key

// function selectAll(req, res, table, key) {
// 	db(`SELECT * FROM ${table} ORDER BY ${key} ASC;`)
// 		.then(results => {
// 		res.send(results.data);
// 	})
// 	.catch(err => res.status(500).send(err));
// };

// //returns a users based on the key you are serching for, eg /users/guest , /users/marketing

// const selectUsersByKey = (req, res, key, value) => {
// 	db(`SELECT * FROM users WHERE ${key} = "${value}";`)
// 		.then(results => {
// 		res.send(results.data);
// 	})
// 	.catch(err => res.status(500).send(err));
// }

// CREATE TABLE `users`(
//   `id` BIGINT UNSIGNED NULL AUTO_INCREMENT UNIQUE KEY,
//   `firstname` VARCHAR(255) NOT NULL,
//   `lastname` VARCHAR(255) NOT NULL,
//   `email` VARCHAR(255) NOT NULL,
//   `password` VARCHAR(255) NULL,
//   `guest` TINYINT(1) NOT NULL,
//   `marketing` TINYINT(1) NOT NULL DEFAULT 0
// );

//CREATE
router.post('/', async function(req, res, next) {
	const {firstname, lastname, email, password, guest, marketing} = req.body;
	console.log(req.body);
	try {
		const response = await db(`INSERT INTO users (firstname, lastname, email, password, guest, marketing) 
		VALUES ('${firstname}', '${lastname}', '${email}', '${password}', ${guest}, ${marketing});`);
    console.log(response);
		selectAll(req, res, "users", "id");
	} catch (error) {
	  res.status(500).send({ error: error.message });
	}
 });

//READ

router.get('/', function(req, res) {
	selectAll(req, res, "users", "id");
});

module.exports = router;

// INSERT INTO users (firstname, lastname, email, password, guest, marketing) 
// 		VALUES ('random', "Random", 'example@domain.com', "efgrafv`xza32534", 0, 1);
