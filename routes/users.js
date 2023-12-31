const selectAll = require("./utils/selectAll");
const selectByKey = require("./utils/selectByKey");
const express = require("express");
const router = express.Router();
const db = require("../model/helper");
const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");

//READ

/*GET all users */
router.get("/", function (req, res) {
  selectAll(req, res, "users", "id");
});

/* GET order by order id */
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    // const results = await db(`SELECT * FROM users where id = ${id};`);
    const results = selectByKey("users", "id", id);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

//DELETE user

router.delete("/:id", async function (req, res, next) {
  const { id } = req.params;
  try {
    const user = await db(`SELECT * FROM users WHERE id = ${id};`);
    if (!user.data.length) {
      res.send({ msg: "User not found" });
    }
    await db(`DELETE FROM users WHERE id = ${id};`);
    res.send({ msg: "User deleted!" });
  } catch (err) {
    res.status(500).send(err);
  }
});












module.exports = router;
