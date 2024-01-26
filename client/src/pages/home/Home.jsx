import Carousel3 from "../../components/carousel/Carousel3";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-div h-dvh">
        <div className="w-100 h-full flex flex-row flex-wrap-reverse justify-between">
          <section className="h-screen pt-14 pb-9 minlg:py-[4vh] px-[5vw] flex flex-col justify-center items-start minlg:w-[55%] minxl:w-[58.5%] minlg:h-screen">
            <h2 className="text-[6.8rem]">
              Own your <br></br> NFT <span className="identity">identity</span>
            </h2>
            <p className="mb-9 text-xl">Build your virtual wordrobe with an NFT that is uniquely you!</p>
            <Link className="bg-primary-900 text-neutral-100 mt-3 rounded-full text-lg sm:w-auto px-7 py-4 text-center font-bold cursor-pointer hover:bg-gradient-to-r from-primary-400 to-primary-800" to="/Shop">EXPLORE NOW</Link>
          </section>
          <section className="h-dvh overflow-hidden w-2/5 bg-primary-400 flex flex-col justify-center">
            <Carousel3 />
          </section>
        </div>
    </div>
  );
}
