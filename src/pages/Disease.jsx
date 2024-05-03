
import React from 'react';
import Card from '../ui/Card';

const backgroundImage = 'https://placehold.co/348x260';
const overlayClass = 'bg-black bg-opacity-50 p-4';
const titleClass = 'text-2xl font-bold mb-4 text-center';
const textClass = 'text-sm';
const Disease = () => {
  return (
    <>
    <div className=" h-80 bg-cover bg-center text-white p-6" style={{backgroundImage: `url(${backgroundImage})`}}>
      </div>
      <div className={overlayClass}>
        <h2 className={titleClass} >Types of Diseases</h2>
        <p className={textClass}>
          Any disorder or malfunctioning of the body or mind that destroys good health can be called a disease. The status of health of the body in a disease is said to be compromised. A disease can be caused due to a variety of reasons. Every disease has characteristic symptoms through which we can identify the types of diseases.
        </p>
      </div>
      <div className='container'>

      <Card/>
      </div>
    
    </>
  );
};

export default Disease;
