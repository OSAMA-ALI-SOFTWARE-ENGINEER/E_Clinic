import hero from "../assets/images/hero.png";

import Card from "../ui/Card";
import Card2 from "../ui/Card2";
function Home() {
  return (
    <div>
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

      {/*  treatment cards */}
      <div className=" my-12 flex flex-col gap-6 px-4">
        <h2 className=" text-3xl font-primary text-center capitalize font-semibold">
          Treatments types
        </h2>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 items-center">
          {[...new Array(4)]?.map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>

      {/* diseas category */}
      <div className=" my-12 flex flex-col gap-6 px-4">
        <h2 className=" text-3xl font-primary text-center capitalize font-semibold">
          disease categories
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center xl:grid-cols-4 gap-x-12 gap-y-8 ">
          {[...new Array(6)]?.map((_, i) => (
            <Card2 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
