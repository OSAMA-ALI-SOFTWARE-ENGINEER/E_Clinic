import React from "react";
import DiseaseCategories from "../components/DiseaseCategories";
import dises from "../assets/images/infectio disease.png";
import Header from "../components/Header";

const Disease = () => {
  return (
    <>
      <Header />
      <div className="text-dark h-80 bg-cover bg-center">
        <img src={dises} alt="img" className="h-72 w-full" />
      </div>
      <div className="container ">
        <DiseaseCategories para="Any disorder or malfunctioning of the body or mind that destroys good health can be called a disease. The status of health of the body in a disease is said to be compromised. A disease can be caused due to a variety of reasons. Every disease has characteristic symptoms through which we can identify the types of diseases" />
      </div>
    </>
  );
};

export default Disease;
