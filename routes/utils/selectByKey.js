export default function selectByKey(req, res, table, key, value) {
	db(`SELECT * FROM ${table} WHERE ${key} = "${value}";`)
		.then(results => {
		res.send(results.data);
	})
	.catch(err => res.status(500).send(err));
}
