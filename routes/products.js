var express = require("express");
var router = express.Router();
const db = require("../model/helper");

const getAllItems = async (req, res) => {
  try {
    const allItems = await db(
      `SELECT p.id, p.name, p.price, p.description, p.collection, p.units, p.image_1, p.image_2, p.image_3, a.brand FROM products AS p LEFT JOIN artists AS a ON p.artist_id = a.id;`
    );

    res.send(allItems.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

//GET all Products or filtering
router.get("/", async (req, res) => {
  if (!req.query.search) {
    try {
      const productResult = await db(
        `SELECT p.id, p.name, p.price, p.description, p.collection, p.units, p.image_1, p.image_2, p.image_3, a.brand FROM products AS p LEFT JOIN artists AS a ON p.artist_id = a.id;`
      );

      res.send(productResult.data);
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    const search = req.query.search;

    try {
      const query = `SELECT p.id, p.name, p.price, p.description, p.collection, p.units, p.image_1, p.image_2, p.image_3, a.brand FROM products AS p LEFT JOIN artists AS a ON p.artist_id = a.id WHERE p.name LIKE "%${search}%";`;
      const searchParam = `%${search}%`;
      const results = await db(query, [searchParam]);
      res.send(results.data);
      getAllItems(req, res);
    } catch (error) {
      res.status(500).send(error);
    }
  }
});

// //GET single product by its id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const productResult = await db(
      `SELECT p.id, p.name, p.price, p.description, p.collection, p.units, p.image_1, p.image_2, p.image_3, a.brand FROM products AS p LEFT JOIN artists AS a ON p.artist_id = a.id WHERE p.id = ${id};`
    );

    res.send(productResult.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

//POST new product by id

router.post("/", async (req, res) => {
  //  everything that is aftet the semicolon is a variable, ie whatever, you could write banana if you like
  const {
    name,
    price,
    description,
    collection,
    units,
    artist_id,
    image_1,
    image_2,
    image_3,
  } = req.body;

  try {
    await db(
      `INSERT INTO products (name, price, description, collection, units, artist_id, image_1, image_2, image_3) VALUES 
          ('${name}', ${price}, '${description}', '${collection}', '${units}', ${artist_id}, '${image_1}', '${image_2}', '${image_3}');`
    );

    res.status(200).send({ message: "Pruduct added!" });
    console.log("Product added");
  } catch (error) {
    console.log("Error posting new product", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

//PUT to update the ressource
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
    price,
    description,
    collection,
    units,
    artist_id,
    image_1,
    image_2,
    image_3,
  } = req.body;

  try {
    await db(
      `UPDATE products SET name = "${name}", price = ${price}, description = "${description}", collection = "${collection}", units = ${units}, artist_id = ${artist_id}, image_1 = " ${image_1}", image_2 = "${image_2}", image_3 = "${image_3}" WHERE id = ${id};`
    );

    getAllItems(req, res);
  } catch (error) {
    res.status(500).send(error);
  }
});

//DELETE

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await db(`DELETE FROM products WHERE id = ${id};`);

    getAllItems(req, res);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
