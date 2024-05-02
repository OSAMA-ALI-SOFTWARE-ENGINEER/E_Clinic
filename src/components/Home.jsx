import blackgirl from "../assets/images/black-girl.png";

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
      <div className="w-1/3  bg-[length:200px_100px]">
        {" "}
        <img src={blackgirl} alt="" />
      </div>
    </div>
  );
}

export default Home;
