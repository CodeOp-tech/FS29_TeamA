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
        <div className="brands-container sticky top-0">
          <div className="card-grid">
            <div className="flex items-center mt-20" >
             <div>
              <div className='text-3xl mt-0 text-left font-bold '>{brand.brand}</div>
             </div>
            </div>
          </div>
        </div>
        <div className="flex items-center ml-20 sticky top-20">
        <div className="mt-20 px-3 py-1 text-left text-sm leading-4 font-medium uppercase tracking-wider overflow-hidden w-1/3">{brand.about}</div>
        </div>
        <div id="brand-products">
        {products.length &&
         products.map((product) => (
           <div key={product.id} className="flex items-center justify-end">
           <div>
            <h4 className="mb-1">{product.name}</h4>
           </div>
            <img src={product.image_1} className="ml-2" alt={product.name} />
           </div>
            ))}
           </div>
          </div>
          </div>
  );
}
