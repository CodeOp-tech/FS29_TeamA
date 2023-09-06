import axios from "axios";
import { useState, useEffect } from "react";

export default function Carousel() {
  const [productPics, SetProductsPics] = useState([]);
  const [currentImage, setCurrentImage] = useState("image_1");

  const getPics = async () => {
    try {
      const callPics = await axios(`/api/products`);

      console.log(productPics);
      SetProductsPics(callPics.data);
    } catch (error) {
      res.status(500).send(error);
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

  useEffect(() => {
    getPics();
    console.log("aqui", productPics[currentImage]);
  }, []);
  return (
    <div>
      <div>
        <h1>Welcome to NFT Store</h1>
        <h3>We're here to help you buy digital assets without stress</h3>
      </div>
      <div>
        <div className="carousel-container">
          <img
            src={productPics[currentImage]}
            alt={`Image ${currentImage.split(" ")[1]}`}
            className="product-image"
          />
        </div>

        <button className="prev-button" onClick={prevImage}>
          Previous
        </button>
        <button className="next-button" onClick={nextImage}>
          Next
        </button>
      </div>
    </div>
  );
}
