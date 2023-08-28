import selectAll from './utils/selectAll';
import selectByKey from './utils/selectByKey';

const express = require('express');
const router = express.Router();
const db = require("../model/helper");


/*helper functions */
//returns all the users in ascending order based on key

const selectAllUsers = (req, res, key) => {
	db(`SELECT * FROM users ORDER BY ${key} ASC;`)
		.then(results => {
		res.send(results.data);
	})
	.catch(err => res.status(500).send(err));
};

//returns a users based on the key you are serching for, eg /users/guest , /users/marketing

const selectUsersByKey = (req, res, key, value) => {
	db(`SELECT * FROM users WHERE ${key} = "${value}";`)
		.then(results => {
		res.send(results.data);
	})
	.catch(err => res.status(500).send(err));
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
