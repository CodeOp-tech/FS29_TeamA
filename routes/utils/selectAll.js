const db = require("../../model/helper");

function selectAll(req, res, table, key) {
	db(`SELECT * FROM ${table} ORDER BY ${key} ASC;`)
		.then(results => {
		res.send(results.data);
	})
	.catch(err => res.status(500).send(err));
};

module.exports = selectAll;

