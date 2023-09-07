import Carousel from "../../components/carousel/Carousel";
export default function Home() {
  return (
    <div className="home-div">
      <div className="welcome-info fixed inset-x-0 top-30 mx-auto ">
        <h1>Welcome to NFT Store</h1>
        <h3>We're here to help you buy digital assets without stress</h3>
      </div>
      <div className="carousel container">
        <Carousel className="h-screen w-full" />
      </div>
      <div className="know-more container"></div>
      <div className="item "></div>
    </div>
  );
}
