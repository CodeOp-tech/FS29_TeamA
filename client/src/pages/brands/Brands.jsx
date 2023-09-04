import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
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
    <div id="Brands">
      <div>
        <div className="brands-container">
          <div className="card-grid">
            {brands.map((brand) => (
              <Link key={brand.id} className="card" to={`/Brands/${brand.id}`}>
                <div>
                  <h2 className="card-title">{brand.brand}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
