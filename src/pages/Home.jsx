import hero from "../assets/images/hero.png";
import Article from "../components/Article";
import DiseaseCategories from "../components/DiseaseCategories";
import TreatmentTypes from "../components/TreatmentTypes";

function Home() {
  return (
    <div>
      <div className="flex h-screen  w-full bg-zinc-200 pt-1">
        <div className="textstructure  mt-52 px-20">
          {["We Provide ", "Disease's", "Different Solution"].map(
            (item, index) => {
              return (
                <div className="masker" key={index}>
                  <h1 className="font-['Founders_Grotesk_Condensed'] text-5xl font-semibold uppercase  leading-[4vw] text-black">
                    {item}
                  </h1>
                </div>
              );
            },
          )}
        </div>
        <div className="container flex w-1/3 ">
          <img className=" " src={hero} alt="" />
        </div>
      </div>

      <TreatmentTypes />
      <DiseaseCategories />
      <Article />
    </div>
  );
}

export default Home;
