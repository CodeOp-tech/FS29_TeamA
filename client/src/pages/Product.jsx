import "./Product.css"
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";
import CartContext from "../context/cart/CartContext";

export default function Product() {

    const {addToCart} = useContext(CartContext);

    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: "",
        collection: "",
        units: null,
        image_1: "",
        image_2: "",
        image_3: "",
        brand: ""
    });
    const { id } = useParams();
    // const [quantity, setQuantity] = useState(0);
    const [currentImage, setCurrentImage] = useState("image_1");

    useEffect(() => {
        getProduct(id);
    }, [id]);

    const getProduct = async (id) => {
        try {
            const response = await fetch(`/api/products/${id}`, {
                method: "GET",
            });
            const data = await response.json();

            const priceInCents = (data[0].price) / 10;
            const priceInDollars = (priceInCents / 100).toFixed(2);

            setProduct({ ...data[0], price: +priceInDollars});
        } catch (error) {
            console.log("Error fetching product", error);
        }
    };

    // console.log("Product Page State:", product);

    // const increaseQuantity = () => {
    //     if (quantity <= product.units) setQuantity(quantity + 1);
    // };
    // console.log(product.price);
    // const decreaseQuantity = () => {
    //     if (quantity > 0) setQuantity(quantity - 1);
    // };

    const prevImage = () => {
        switch (currentImage) {
            case "image_2":
                setCurrentImage("image_1");
                break;
            case "image_3":
                setCurrentImage("image_2");
                break;
            case "image_1":
                setCurrentImage("image_3");
                break;
            default:
                break;
        }
    };

    const nextImage = () => {
        switch (currentImage) {
            case "image_1":
                setCurrentImage("image_2");
                break;
            case "image_2":
                setCurrentImage("image_3");
                break;
            case "image_3":
                setCurrentImage("image_1");
                break;
            default:
                break;
        }
    };

    // const handleAddToCart = async (e) => {
    //     e.preventDefault();
    //     if (quantity > 0) {
    //         const cartItem = {
    //             id: product.id,
    //             name: product.name,
    //             price: product.price,
    //             quantity: quantity
    //         };
    //         // code missing to add cartItem into the cart
    //         console.log(`Added ${quantity} product(s) to the cart`);
    //         setQuantity(0);
    //     }
    // };

    return (
        <div>
            <button className="go-back">
                <Link to={"/Shop"}>Go back</Link>
            </button>

            <div id="Product">
                <div>
                    <div className="carousel-container">
                        <img src={product[currentImage]} alt={`Image ${currentImage.split(" ")[1]}`} className="product-image" />
                    </div>

                    <button className="prev-button" onClick={prevImage}>Previous</button>
                    <button className="next-button" onClick={nextImage}>Next</button>
                </div>

                <div className="description">
                    <div>
                        <h1>{product.name}</h1>
                        <h2>By {product.brand}</h2>
                        <h3>{product.collection}</h3>
                        <p>{product.description}</p>
                        <p className="product-price">{formatCurrency(product.price)}</p>
                    </div>

                    <div>
                        {product.units ?
                            (<>
                                {/* <button onClick={decreaseQuantity} disabled={quantity === 0}>-</button>
                                <span>{quantity}</span>
                                <button onClick={increaseQuantity} disabled={quantity === product.units}>+</button> */}
                            
                                <button 
                                    // disabled={quantity === 0}
                                    onClick={() => addToCart(product)}
                                >
                                    Add To Cart
                                </button>
                            </>)
                        : (<p>Out of Order</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
};
