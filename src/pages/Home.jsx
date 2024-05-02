import hero from "../assets/images/hero.png";

import Card from "../ui/Card";
import Card2 from "../ui/Card2";
function Home() {
  return (
    <div className="w-full flex  h-screen pt-1 bg-zinc-200">
      <div className="textstructure  mt-52 px-20">
        {["We Provide ", "Disease's", "Different Solution"].map(
          (item, index) => {
            return (
              <div className="masker" key={index}>
                <h1 className="text-5xl uppercase text-black leading-[4vw]  font-['Founders_Grotesk_Condensed'] font-semibold">
                  {item}
                </h1>
              </div>
            );
          }
        )}
      </div>
      <div className="container flex w-1/3 ">
       
        <img className=" " src={hero} alt="" />
        </div>
    </div>
    
  );
}

export default Home;
