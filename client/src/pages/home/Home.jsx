import Carousel2 from "../../components/carousel/Carousel2";

export default function Home() {
  return (
    <div className="home-div">
      <div className="welcome-info  inset-x-0 top-30 mx-auto ">
        <div className="marquee-animation">
          <h1 className="font-sans text-5xl font-bold text-rose">
            WELCOME TO THE NFT STORE
          </h1>
        </div>
        <div className="w-100 flex flex-row gap-20 justify-center">
          <div className="flex flex-col justify-center align-cente">
            <h3 className="font-sans text-4xl font-bold align-center">
              We&apos;re here to help you buy digital assets without stress
            </h3>
          </div>
          <section className="max-w-lg w-100">
            <Carousel2 autoSlide={true} autoSlideInterval={1500}/>
          </section>
        </div>
      </div>
      <div>
        <div className="know-more container"></div>
        <div className="item "></div>
      </div>
    </div>
  );
}
