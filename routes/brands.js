var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//GET brands
router.get("/ ", async (req, res) => {
  // const { id } = req.params;
  console.log("hello");
  try {
    const brands = await db(`SELECT * FROM artists;`);

    res.send(brands.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
