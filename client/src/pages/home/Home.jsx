import Carousel2 from "../../components/carousel/Carousel2";

export default function Home() {
  return (
    <div className="home-div">
        <div className="w-100  flex flex-row gap-10">
          <section className="w-55 m-20 flex flex-col">
            <h2 className="text-[6.8rem]">
            Own your NFT <span><p className="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">identity</p></span>
            </h2>
            <p>Build your virtual wordrobe with an NFT that is uniquely you</p>
          </section>
          <section className="flex max-w-lg w-100 justify-center items-center">
            <Carousel2 autoSlide={true} autoSlideInterval={1500}/>
          </section>
        </div>
      <div>
        <div className="know-more container">
        </div>
        <div className="item "></div>
      </div>
    </div>
  );
}
