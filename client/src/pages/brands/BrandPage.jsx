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

const getProducts = async (req, res) => {
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
		<div className="flex flex-row gap-10 w-100 pt-14">
				<div className="w-100 ml-20 mt-20 flex flex-col align-baseline">
					<Link className="mb-10 w-40 h-10 rounded-full flex justify-center items-center btn" to={"/Brands"}>Go back</Link>
					<div className="sticky top-10">
						<div className="flex justify-start">
								<div className='text-3xl font-bold '>{brand.brand}</div>
						</div>
						<div className="flex items-center">
							<div className="mt-20 text-left text-sm leading-4 font-medium uppercase tracking-wider overflow-hidden w-1/3">{brand.about}</div>
						</div>
					</div>
				</div>

				<div className="overflow-hidden relative bg-white">
					{products.length &&
						products.map((product) => (
						<div key={product.id} className="flex flex-col justify-start">
							<div className="card-container">
								<img src={product.image_1} className="ml-2" alt={product.name} />
							</div>
							<div>
								<h4 className="mb-1">{product.name}</h4>
							</div>
						</div>
						))}
				</div>

		</div>
	);
}
