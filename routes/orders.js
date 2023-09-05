var express = require("express");
var router = express.Router();
const db = require("../model/helper");
const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");

/* GET all orders: this is for us */
router.get("/all", async (req, res) => {
  console.log(req.query);
  console.log("get all orders");

  try {
    const results = await db(
      "SELECT o.*, po.product_quantity, p.name, p.price, a.brand, u.firstname, u.lastname, u.guest, pa.approved FROM orders AS o LEFT JOIN product_order AS po ON o.id = po.order_id LEFT JOIN products AS p ON po.product_id = p.id LEFT JOIN artists AS a ON a.id = p.artist_id LEFT JOIN users AS u ON o.user_id = u.id LEFT JOIN payments AS pa ON o.id = pa.order_id ORDER BY o.id ASC;"
    );

    res.send(results.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* GET all fulfilled orders: this is for us */
router.get("/all/ticket", async (req, res) => {
  console.log(req.query);
  console.log("get all orders");

  try {
    const results = await db(
      "SELECT o.*, po.product_quantity, p.name, p.price, a.brand, u.firstname, u.lastname, u.guest, pa.approved FROM orders AS o LEFT JOIN product_order AS po ON o.id = po.order_id LEFT JOIN products AS p ON po.product_id = p.id LEFT JOIN artists AS a ON a.id = p.artist_id LEFT JOIN users AS u ON o.user_id = u.id LEFT JOIN payments AS pa ON o.id = pa.order_id WHERE fulfilled = 1 ORDER BY o.id ASC;"
    );

    res.send(results.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* GET fulfilled order by id: this is for the client */
router.get("/ticket/:order_id", async (req, res) => {
  const order_id = req.params.order_id;
  console.log(req.query);
  console.log("get fulfilled order by order id");

  try {
    const results = await db(
      `SELECT o.*, po.product_quantity, p.name, p.price, a.brand, u.firstname, u.lastname, u.guest, pa.approved FROM orders AS o LEFT JOIN product_order AS po ON o.id = po.order_id LEFT JOIN products AS p ON po.product_id = p.id LEFT JOIN artists AS a ON a.id = p.artist_id LEFT JOIN users AS u ON o.user_id = u.id LEFT JOIN payments AS pa ON o.id = pa.order_id WHERE o.id = ${order_id} AND fulfilled = 1;`
    );

    res.send(results.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* GET all checkout orders: this is for us */
router.get("/all/checkout", async (req, res) => {
  console.log(req.query);
  console.log("get all orders");

  try {
    const results = await db(
      "SELECT o.*, po.product_quantity, p.name, p.price, a.brand, u.firstname, u.lastname, u.guest, pa.approved FROM orders AS o LEFT JOIN product_order AS po ON o.id = po.order_id LEFT JOIN products AS p ON po.product_id = p.id LEFT JOIN artists AS a ON a.id = p.artist_id LEFT JOIN users AS u ON o.user_id = u.id LEFT JOIN payments AS pa ON o.id = pa.order_id WHERE fulfilled = 0 ORDER BY o.id ASC;"
    );

    res.send(results.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* GET unfulfilled order by id: this is for the client */
router.get("/checkout/:order_id", async (req, res) => {
  const order_id = req.params.order_id;
  console.log(req.query);
  console.log("get unfulfilled order by");

  try {
    const results = await db(
      `SELECT o.*, po.product_quantity, p.name, p.price, a.brand, u.firstname, u.lastname, u.guest, pa.approved FROM orders AS o LEFT JOIN product_order AS po ON o.id = po.order_id LEFT JOIN products AS p ON po.product_id = p.id LEFT JOIN artists AS a ON a.id = p.artist_id LEFT JOIN users AS u ON o.user_id = u.id LEFT JOIN payments AS pa ON o.id = pa.order_id WHERE o.id = ${order_id} AND fulfilled = 0;`
    );

    res.send(results.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* GET all cancelled orders: this is for us */
router.get("/all/cancelled", async (req, res) => {
  console.log(req.query);
  console.log("get all orders");

  try {
    const results = await db(
      "SELECT o.*, po.product_quantity, p.name, p.price, a.brand, u.firstname, u.lastname, u.guest, pa.approved FROM orders AS o LEFT JOIN product_order AS po ON o.id = po.order_id LEFT JOIN products AS p ON po.product_id = p.id LEFT JOIN artists AS a ON a.id = p.artist_id LEFT JOIN users AS u ON o.user_id = u.id LEFT JOIN payments AS pa ON o.id = pa.order_id WHERE cancelled = 1 ORDER BY o.id ASC;"
    );

    res.send(results.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* GET all orders by date: this is for us */
router.get("/date/:date", async (req, res) => {
  const { date } = req.params;
  const isoDate = new Date(date).toISOString().split("T")[0];
  console.log(req.query);
  console.log(
    `SQL Query: SELECT o.*, u.firstname, u.lastname, u.guest, pa.approved FROM orders AS o LEFT JOIN users AS u ON o.user_id = u.id LEFT JOIN payments AS pa ON o.id = po.order_id WHERE o.date = "${isoDate}" ORDER BY o.id ASC;`
  );

  try {
    const results = await db(
      `SELECT o.*, u.firstname, u.lastname, u.guest, pa.approved FROM orders AS o LEFT JOIN users AS u ON o.user_id = u.id LEFT JOIN payments AS pa ON o.id = po.order_id WHERE o.date = "${isoDate}" ORDER BY o.id ASC;`
    );

    res.send(results.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* POST order (after fulfilled) */
router.post("/checkout", userShouldBeLoggedIn, async (req, res) => {
  const { total, products } = req.body;

  const currentDate = new Date();
  // the padStart method pads a string with another one until the goal length is met
  // JS returns the month in zero-based indexing, so JAN is represented as 0 and therefore we need to add 1
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  const date = `${year}-${month}-${day}`;

  try {
    const resultyay = await db(
      `INSERT INTO orders (user_id, total, fulfilled, cancelled, date) VALUES (${
        req.user_id ? req.user_id : req.body.user_id
      }, ${total}, 1, 0, '${date}'); select last_insert_id();`
    );

    const last_id = resultyay.data[0].insertId;
    console.log(last_id);

    await products.map((product) =>
      db(
        `INSERT INTO product_order (product_id, order_id, product_quantity) VALUES (${product.id}, ${last_id}, ${product.quantity}); UPDATE products SET units = units - ${product.quantity} WHERE id = ${product.id};`
      )
    );

    const results = await db(
      `SELECT o.*, po.product_quantity, p.name, p.price, a.brand, u.firstname, u.lastname, u.guest, pa.approved FROM orders AS o LEFT JOIN product_order AS po ON o.id = po.order_id LEFT JOIN products AS p ON po.product_id = p.id LEFT JOIN artists AS a ON a.id = p.artist_id LEFT JOIN users AS u ON o.user_id = u.id LEFT JOIN payments AS pa ON o.id = po.order_id WHERE o.id = ${last_id}`
    );

    res.send(results.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* PATCH (update) order to fulfilled */
router.patch("/ticket/:order_id", async (req, res) => {
  const order_id = req.params.order_id;
  console.log(req.query);
  console.log("order fulfilled");

  try {
    await db(`UPDATE orders SET fulfilled = 1 WHERE id = ${order_id};`);
    const results = await db(
      `SELECT o.*, po.product_quantity, p.name, p.price, a.brand, u.firstname, u.lastname, u.guest, pa.approved FROM orders AS o LEFT JOIN product_order AS po ON o.id = po.order_id LEFT JOIN products AS p ON po.product_id = p.id LEFT JOIN artists AS a ON a.id = p.artist_id LEFT JOIN users AS u ON o.user_id = u.id LEFT JOIN payments AS pa ON o.id = po.order_id WHERE o.id = ${order_id}`
    );

    res.send(results.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
