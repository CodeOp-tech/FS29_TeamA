import { useEffect, useState } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, SetProducts] = useState([]);
  // const [featureImage, setFeatureImage] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products", {
          method: "GET",
        });

        const json = await response.json(); // should I transform everything into a small caps ?
        SetProducts(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="card-grid">
        {products.map((product) => (
          <Link key={product.id} className="card" to={`/Shop/${product.id}`}>
            <div>
              <img src={product.image_1} alt="Image" className="card-img" />
              <h2 className="card-title">{product.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
