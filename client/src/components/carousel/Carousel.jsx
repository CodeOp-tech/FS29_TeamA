import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Slider from "react-slick";

export default function Carousel() {
  const [productPics, setProductsPics] = useState([]);
  const [carouselPics, setCarouselPics] = useState([]);

  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate(`/Shop/${event.target.id}`);
    // console.log(event.target.id);
  };

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
      <div className=" carousel  mt-14 mb-14 sticky top-30 space-x-4 h-150	">
        {/*items-center*/}
        {productPics.map((product) => (
          <img
            key={product.id}
            id={product.id}
            src={product.image_1}
            alt={`Image ${product.name}`}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
