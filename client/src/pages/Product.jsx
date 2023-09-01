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
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        getProduct();
    }, [id]);

    const getProduct = async () => {
        try {
            const response = await fetch(`/api/products/${id}`, {
                method: "GET",
            });
            const data = await response.json();

            const priceInCents = data[0].price;
            const priceInDollars = (priceInCents / 100).toFixed(2);

            setProduct({ ...data[0], price: priceInDollars});
        } catch (error) {
            console.log("Error fetching product", error);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = async (e) => {
        e.preventDefault();

        if (quantity > 0) {
            const cartItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity
            };

            // code missing to add cartItem into the cart
            setQuantity(0);
            console.log(`Added ${quantity} product(s) to the cart`);
        }
    };

    return (
        <div id="Product">
            <div>
                <img src={product.image_1} alt="image 1" className="product-image" />
                <img src={product.image_2} alt="image 2" className="product-image" />
                <img src={product.image_3} alt="image 3" className="product-image" />
            </div>

            <div>
                <div>
                    <h1>{product.name}</h1>
                    <h2>By {product.brand}</h2>
                    <h3>{product.collection}</h3>
                    <p>{product.description}</p>
                    <p>{product.price} USD</p>
                </div>

                <div>
                    <button onClick={decreaseQuantity} disabled={quantity === 0}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increaseQuantity}>+</button>
                
                    <button onClick={handleAddToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
};