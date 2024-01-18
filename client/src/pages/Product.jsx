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
    return (
        <div className="flex flex-row w-100 gap-10">
            <div className="flex flex-col justify-start items-start w-100">
                <Link className="mx-10 w-40 h-10 rounded-full flex justify-center items-center bg-rose" to={"/Shop"}>Go back</Link>
                <div id="Product">
                    <div>
                        <div className="carousel-container w-96">
                            <img src={product[currentImage]} alt={`Image ${currentImage.split(" ")[1]}`} className="product-image" />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <button className="my-10 w-11 h-11 rounded-full flex justify-center items-center bg-rose text-3xl" onClick={prevImage}>&lt;</button>
                            <button className="my-10 w-11 h-11 rounded-full flex justify-center items-center bg-rose text-3xl" onClick={nextImage}>&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description w-100">
                <div>
                    <h1>{product.name}</h1>
                    <h2>By {product.brand}</h2>
                    <h3>{product.collection}</h3>
                    <p className="w-13">{product.description}</p>
                    <p className="product-price">{formatCurrency(product.price)}</p>
                </div>
                <div>
                    {product.units ?
                    (
                        <button className="mb-10 w-40 h-10 rounded-full flex justify-center items-center bg-rose" onClick={() => addToCart(product)}>Add To Cart</button>
                    )
                    : (<p>Out of Stock</p>)}
                    </div>
                </div>
            
        </div>
    )
};
