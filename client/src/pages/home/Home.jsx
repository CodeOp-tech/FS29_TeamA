import Carousel from "../../components/carousel/Carousel";
export default function Home() {
  return (
    <div className="home-div">
      <div className="welcome-info  inset-x-0 top-30 mx-auto ">
        <div className="marquee-animation">
          <h1 className="font-sans text-5xl font-bold text-rose">
            WELCOME TO NFT STORE
          </h1>
        </div>
        <h3 className="font-sans text-2xl font-bold">
          We're here to help you buy digital assets without stress
        </h3>
      </div>
      <div className="carousel container">
        <Carousel className="h-screen w-full" />
      </div>
      <div className="know-more container"></div>
      <div className="item "></div>
    </div>
  );
}
