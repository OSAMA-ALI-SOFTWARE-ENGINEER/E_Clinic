import React from "react";
import Tcard from "../ui/Tcard";
import Header from "../components/Header";
import TitleSection from "../ui/TitleSection";
import doctorImage from '/doctor.png';
import herbal from '/herbal.png'
import tredational from '/tredational.png'

function Treatment() {
  return (
    <>
      <Header />
      <div>
        {/* <TreatmentFilterSection /> */}
        <TitleSection 
        title={"Discover Your Treatment Options"} 
        body={" Explore our variety of treatment modalities, including conventional medicine, herbal remedies, and Chinese traditional medicine. Find the solution that resonates with your health goals and preferences, tailored for you and your family's well-being."}  />
        <Tcard 
        title={"Doctor Treatment"} 
        des={"Discover expert medical care tailored to your needs. Our doctors offer comprehensive treatment options to address various health conditions and concerns. Trust in our expertise for personalized care that prioritizes your well-being."}
        img={doctorImage}
        />
        <Tcard 
        title={"Herbal Treatment"} 
        des={"Embrace the power of nature with our herbal treatment options. Our herbal remedies are carefully selected to support your body's natural healing processes and promote overall wellness. Explore our range of herbal treatments tailored to address your health needs and enhance your vitality."} 
        img={herbal}
        />
        <Tcard 
        title={"Chinese Traditional Treatment"}
         des={"Experience the ancient wisdom of Chinese traditional medicine with our range of treatment therapies. From acupuncture to herbal medicine, our Chinese traditional treatments aim to restore balance and harmony within your body. Discover holistic healing methods that have stood the test of time, personalized to meet your health goals."}
         img={tredational}
         /> 
      </div>
    </>
  );
}

export default Treatment;
