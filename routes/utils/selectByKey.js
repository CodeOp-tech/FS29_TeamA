const db = require("../../model/helper");

function selectByKey(table, key, value) {
	db(`SELECT * FROM ${table} WHERE ${key} = "${value}";`)
		.then(results => {
		return results.data;
	})
	.catch(err => res.status(500).send(err));
}

module.exports = selectByKey;
