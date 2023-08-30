import { useEffect, useState } from "react";
export default function Products() {
  const [products, SetProducts] = useState([]);
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
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div className="container">
        <div></div>
      </div>
    </div>
  );
}
