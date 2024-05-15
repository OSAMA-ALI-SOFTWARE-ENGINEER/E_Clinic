import CardAbout from "../components/CardAbout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleSection from "../ui/TitleSection";
// import Title_section from "../ui/Title_section";

function about() {
  return (
    <>
      <Header />
      <TitleSection title={"Types of Treatment"} />
      <div>
        <h1 className="mb-6 text-center text-3xl font-bold sm:text-4xl ">
          Indro
        </h1>
        <div className="relative mb-6">
          <div className="absolute bottom-0 left-1/2 h-2 w-1/4 -translate-x-1/2 transform rounded-lg bg-red-700"></div>
        </div>
        <div className="  mb-6 text-center">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            libero obcaecati nisi voluptatum. Nulla pariatur rerum quidem iste
            eum officiis? Ullam omnis recusandae iste porro exercitationem odio
            consectetur incidunt, repudiandae impedit rem.
          </p>
        </div>
      </div>
      <div>
        <CardAbout />
      </div>
      <Footer />
    </>
  );
}

export default about;
