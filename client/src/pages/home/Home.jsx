import Carousel3 from "../../components/carousel/Carousel3";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-div h-dvh">
        <div className="w-100 h-dvh flex flex-row flex-wrap-reverse justify-between gap-y-1">
          <section className="h-screen pt-14 pb-9 my-5 minlg:py-[7vh] px-[5vw] flex flex-col justify-center items-start lg:w-[55%] minxl:w-[58.5%] minlg:h-screen">
            <h2 className="text-3xl lg:text-5xl">
              Own your <br></br> NFT <span className="identity">identity</span>
            </h2>
            <p className="mb-9 text-xl">Build your virtual wordrobe with an NFT that is uniquely you!</p>
            <Link className="bg-primary-900 text-neutral-100 mt-3 rounded-full text-lg sm:w-auto px-7 py-4 text-center font-bold cursor-pointer hover:bg-gradient-to-r from-primary-400 to-primary-800" to="/Shop">EXPLORE NOW</Link>
          </section>
          <section className="h-dvh overflow-hidden lg:w-[40%] sm:w-full z-[-1] bg-primary-400 flex flex-col justify-center grow">
            <Carousel3 />
          </section>
        </div>
    </div>
  );
}