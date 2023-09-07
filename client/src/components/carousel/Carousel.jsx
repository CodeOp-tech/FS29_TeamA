import axios from "axios";
import { useState, useEffect } from "react";

export default function Carousel() {
  const [productPics, setProductsPics] = useState([]);
  const [carouselPics, setCarouselPics] = useState([]);

  useEffect(() => {
    const getPics = async (req, res) => {
      try {
        const callPics = await axios(`/api/products`);

        setProductsPics(callPics.data);
        console.log("productpics", productPics);
      } catch (error) {
        console.error(error);
      }
    };

    const sortImage1 = () => {
      const pics = [];
      const image1Pics = productPics.map((obj) => obj.image_1);
      setCarouselPics(pics);
    };
    getPics();
    sortImage1();
    console.log("carousel", carouselPics);
    // console.log("aqui", productPics[0].image_1);
  }, []);
  return (
    <div>
      <div>
        <h1>Welcome to NFT Store</h1>
        <h3>We're here to help you buy digital assets without stress</h3>
      </div>
      <div className="carousel">
        {/* Map through carouselPics and render the images */}
        {productPics.map((product) => (
          <img
            key={product.id}
            src={product.image_1}
            alt={`Image ${product.name}`}
          />
        ))}
      </div>
    </div>
  );
}
