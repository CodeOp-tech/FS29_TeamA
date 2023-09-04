var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//GET brands
router.get("/", async (req, res) => {
  // const { id } = req.params;
  try {
    const brands = await db(`SELECT * FROM artists;`);

    res.send(brands.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET gets brand by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const brandId = await db(`SELECT * FROM artists WHERE id = ${id};`);

    res.send(brandId.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/inventory/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const brandProducts = await db(
      `SELECT * FROM  products WHERE artist_id=${id};`
    );
    res.send(brandProducts.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
