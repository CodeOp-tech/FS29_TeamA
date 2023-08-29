var express = require('express');
var router = express.Router();
const db = require("../model/helper");


//GET all Products or filtering
router.get("/", async (req, res) => {
  if (!req.query.search) {
    try{
        const productResult = await db(`SELECT * FROM products;`);
        const product = productResult.data;

        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }  
  } else {
    const search = req.query.search;

    try {
        const query = `SELECT * FROM products WHERE name LIKE "%${search}%";`;
        const searchParam = `%${search}%`;
        const results = await db(query, [searchParam]);
        res.send(results.data);
    } catch (error) {
        res.status(500).send(error);
    }
  }
    
});


//GET single product by its id
router.get("/:id", async (req, res) => {
    const id = req.params.id; 
  
    try {
      const productResults = await db(`SELECT * FROM products where id = ${id};`); 
      
      const product = productResults.data[0]; 
  
      res.send(product); 
    } catch (error) {
      res.status(500).send(error); 
    }
  });






//POST new product by id

router.post("/:id", async (req, res) => {
    const { product_Id } = req.params;
    const { name, price, currency, description, collection, units, artist_id, image_1, image_2, image_3 } = req.body;
    
     
    
    try {
        // const products = await db(`SELECT id FROM products WHERE id = "${product_Id}";`);
        // console.log(products);
        // const result = products.data;
        // console.log(result);
      
        // if (result.length === 0) {
        //   res.status(404).send({ error: "Product not found" });
        //   return;
        // }
    
       
    
        await db(
          `INSERT INTO products (name, price, currency, description, collection, units, artist_id, image_1, image_2, image_3) VALUES 
          ('${name}', ${price}, '${currency}', '${description}', '${collection}', '${units}', ${artist_id}, '${image_1}', '${image_2}', '${image_3}');`,
        );
    
        res.status(200).send({message: "Pruduct added!"});
        console.log("Product added");
    
      } catch (error) {
        console.log("Error posting new product", error);
        res.status(500).send({ error: "Internal server error" });
      }
    });









module.exports = router;