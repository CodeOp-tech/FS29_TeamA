import Carousel2 from "../../components/carousel/Carousel2";

export default function Home() {
  return (
    <div className="home-div">
        <div className="max-w-100 flex flex-row gap-20 justify-center">
          <div className="flex flex-col justify-center align-cente max-w-lg">
            <h3 className="text-[6.8rem] align-center">
            Own your NFT <span><p className="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">identity</p></span>
            </h3>
          </div>
          <section className="max-w-lg">
            <Carousel2 autoSlide={true} autoSlideInterval={1500}/>
          </section>
        </div>
        <section className="max-w-100">
        </section>

      <div>
        <div className="know-more container">
        </div>
        <div className="item "></div>
      </div>
    </div>
  );
}
