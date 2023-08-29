router.post("/login", async (req, res) => {
	const { username, password } = req.body;

	try {
		const results = await db(
		 `SELECT * FROM users WHERE username = "${username}"`
		);
		const user = results.data[0];
		if (user) {
		const user_id = user.id;

		const correctPassword = await bcrypt.compare(password, user.password);

		if (!correctPassword) throw new Error("Incorrect password");

		var token = jwt.sign({ user_id }, supersecret);
		res.send({ message: "Login successful, here is your token", token });
		} else {
		throw new Error("User does not exist");
		}
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});
