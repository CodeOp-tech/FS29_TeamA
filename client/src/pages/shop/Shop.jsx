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
    <div className="p-2 minmd:px-4 minlg:px-8 minlg:mb-[-98px] mt-[100px]">
      <div className="card-grid">
        {products.map((product) => (
          <Link key={product.id} className="card hover:shadow-[0_35px_40px_-15px_rgba(234, 129, 218, 0.1)] " to={`/Shop/${product.id}`}>
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
