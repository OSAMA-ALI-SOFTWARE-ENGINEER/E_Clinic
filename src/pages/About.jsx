import CardAbout from "../components/CardAbout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleSection from "../ui/TitleSection";


function about() {
  return (
    <>
      <Header />
      <TitleSection title={"About Us"} body={" At Comprehensive Health Information and Multimodal Treatment Solutions, our mission is to empower individuals and families to take control of their health by providing access to reliable information and diverse treatment options. We are dedicated to promoting wellness and informed decision-making, ensuring that our users have the resources they need to lead healthier lives."}/>
      <div>
        <h1 className="mb-6 text-center text-3xl font-bold sm:text-4xl ">
        Our Vision
        </h1>
        <div className="relative mb-6">
          <div className="absolute bottom-0 left-1/2 h-2 w-1/4 -translate-x-1/2 transform rounded-lg bg-red-700"></div>
        </div>
        <div className="  mb-6 text-center">
          <p>
          Our vision at Comprehensive Health Information and Multimodal Treatment Solutions is to revolutionize healthcare accessibility by providing a centralized platform for comprehensive health information and diverse treatment options. We strive to empower individuals and families to make informed decisions about their health and wellness journey. Through collaboration, innovation, and a commitment to excellence, we aim to improve healthcare outcomes and enhance the quality of life for all.
          </p>
        </div>
      </div>
      <div>
        <CardAbout img={Option}/>
      </div>
      <Footer />
    </>
  );
}

export default about;
