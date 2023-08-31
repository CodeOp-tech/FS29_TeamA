import { useEffect, useState } from "react";
import "./Products.css";


export default function Products() {
  const [products, SetProducts] = useState([]);
  // const [featureImage, setFeatureImage] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products`, {
          method: "GET",
        });

        const json = await response.json(); // should I transform everything into a small caps ?
        SetProducts(json);
      } catch (error) {
        res.status(500).send(error);
      }
    };
    fetchProducts();
    // console.log(products[0].image_1);
    // setFeatureImage(products[0]);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {/* <div className="featured-image">
        <img src={featureImage.image_1} />
      </div> */}
      <div className="card-grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image_1} alt="Image" className="card-img" />
            <h2 className="card-title">{product.name}</h2>
            <h3 className="card-description">{product.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
