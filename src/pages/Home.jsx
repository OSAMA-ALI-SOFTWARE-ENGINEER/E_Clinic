import { Link } from "react-router-dom";
import hero from "../assets/images/hero.png";
import Article from "../components/Article";
import DiseaseCategories from "../components/DiseaseCategories";
import ReviewCarousel from "../components/ReviewCarousel";
import TreatmentTypes from "../components/TreatmentTypes";

import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="bg-cyan-200  ">
        <div className="flex w-full  flex-col-reverse bg-zinc-200 pt-1 md:flex-row  ">
          <div className="textstructure flex h-[50vh] flex-col items-center justify-center px-6 md:mt-32 md:h-[33%] md:w-[60%] md:px-8 ">
            {/* {["We Provide ", "Disease's", "Different Solution"].map(
              (item, index) => {
                return (
                  <div className="masker" key={index}> */}
            <h1 className=" text-center  font-['Founders_Grotesk_Condensed'] text-xl font-semibold uppercase leading-8 text-black md:text-left md:text-3xl md:leading-[4rem] lg:text-5xl ">
              We Provide Diseases, Different Solution
            </h1>
            {/* </div> */}
            {/* );
              },
            )} */}
            <div className="mt-12 text-center  md:text-left">
              <Link
                className="rounded-md border bg-cyan-500 px-6 py-1.5 hover:bg-sky-900 hover:text-white"
                to={"./DiseaseSearch"}
              >
                Get Search
              </Link>
            </div>
          </div>
          <div className="container  mx-32 hidden w-screen justify-center md:block md:w-[35%]">
            <img className="h-auto max-w-full" src={hero} alt="Hero" />
          </div>
        </div>

        {/* Types Of Treatement */}
        <TreatmentTypes />

        {/* Categories Of Disease */}
        <DiseaseCategories />

        {/* Traditional Treatement Section For introducing */}
        <div className="hero left-[50%]  right-[50%] min-h-screen px-4">
          <div className=" hero-content flex-col lg:flex-row">
            <img
              src="./doctor.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="px-26 text-center md:text-center lg:text-left">
              <h1 className="text-5xl font-bold">Doctor's Treatment!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn bg-cyan-300 hover:bg-cyan-900 hover:text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <Article />
        <ReviewCarousel />

        <div className="hero min-h-screen px-4">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <img
              src="./herbal.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Herbal Treatment</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn bg-cyan-300 hover:bg-cyan-900 hover:text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
