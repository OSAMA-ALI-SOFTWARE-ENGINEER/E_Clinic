import React from 'react';
import DiseaseCategories from '../components/DiseaseCategories';
import dises from "../assets/images/infectio disease.png"

const Disease = () => {
  return (
    <>
    <div className="h-80 bg-cover bg-center text-dark p-6">
      <img src={dises} alt="img" className='w-full h-72' />
            </div>
      <div className='container '>
      <DiseaseCategories para="Any disorder or malfunctioning of the body or mind that destroys good health can be called a disease. The status of health of the body in a disease is said to be compromised. A disease can be caused due to a variety of reasons. Every disease has characteristic symptoms through which we can identify the types of diseases"/>
      </div>
    
    </>
  );
}

export default Disease;