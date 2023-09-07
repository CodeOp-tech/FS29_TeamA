import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "./Brands.css"
export default function Brands() {
  const [brands, setBrands] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getBrands = async () => {
      try {
        const response = await fetch(`/api/brands`, {
          method: "GET",
        });
        const data = await response.json();

        setBrands(data);
      } catch (error) {
        console.log("Error fetching product", error);
      }
    };

    getBrands();
  }, [id]);

  return (
    <div id="Brands" className="flex justify-center">
      <div className="max-w-screen-xl mx-10">
        <div className="brands-container">
          <div className="marquee-animation">
            <h3 className='font-sans text-3xl mt-0 text-left font-bold'>BRANDS</h3>
          </div>
      
          <div className="grid grid-cols-4 gap-20 mx-20 mt-20 mx-auto">
            {brands.map((brand) => (
              <Link key={brand.id} className="card flex items-cente hover:bg-rose " to={`/Brands/${brand.id}`}>
                <div>
                  <h2 className="card-title flex flex-col items-center justify-center hover:text-white">{brand.brand}</h2>
                </div>
              </Link>
            ))}
          </div>
     
      </div>
      </div>
    </div>
  );
}
