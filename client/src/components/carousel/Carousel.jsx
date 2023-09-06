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
      <div></div>
    </div>
  );
}
