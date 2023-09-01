import "./Product.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
    const [product, setProduct] = useState({
        name: "",
        price: null,
        description: "",
        collection: "",
        image_1: "",
        image_2: "",
        image_3: "",
        brand: ""
    });
    const { id } = useParams();

    useEffect(() => {
        getProduct();
    }, [id]);

    const getProduct = async () => {
        try {
            const response = await fetch(`/api/products/${id}`, {
                method: "GET",
            });
            const data = await response.json();

            setProduct(data[0]);
        } catch (error) {
            console.log("Error fetching product", error);
        }
    };

    return (
        <div id="Product">
            <div>
                <img src={product["image_1"]} alt="image 1" />
                <img src={product["image_2"]} alt="image 2" />
                <img src={product["image_3"]} alt="image 3" />
            </div>

            <div>
                <h1>{product["name"]}</h1>
                <h2>By {product["brand"]}</h2>
                <h3>{product["collection"]}</h3>
                <p>{product["description"]}</p>
                <p>{product["price"]} USD</p>
            </div>
        </div>
    )
}