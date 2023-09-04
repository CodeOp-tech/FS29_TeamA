import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

export default function BrandPage() {
  const [brand, setBrand] = useState({
    brand: "",
    about: "",
  });
  const [products, SetProducts] = useState([]);
  const { id } = useParams();

  const getBrand = async () => {
    try {
      const response = await fetch(`/api/brands/${id}`, {
        method: "GET",
      });
      const data = await response.json();

      setBrand(data[0]);
    } catch (error) {
      console.log("Error fetching product", error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await fetch(`/api/brands/inventory/${id}`, {
        method: "GET",
      });

      const json = await response.json();
      SetProducts(json);
      console.log(products);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  useEffect(() => {
    getBrand();
    getProducts();
  }, []);

  return (
    <div id="singular-brand">
      <div>
        <div className="brands-container">
          <div className="card-grid">
            <div>{brand.brand}</div>
            <div>{brand.about}</div>
          </div>
        </div>
        <div id="brand-products">
          {products.length &&
            products.map((product) => (
              <div key={product.id}>
                <img src={product.image_1} />
                <h4>{product.name}</h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
