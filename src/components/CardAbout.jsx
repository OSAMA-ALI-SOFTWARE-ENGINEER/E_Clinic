import React from 'react';

const cardClasses = " bg-black text-black p-4 rounded-lg bg-white w-full md:w-64";
const textClasses = "font-bold  text-lg mb-2";
const paragraphClasses = "text-sm";
const imageClasses = "rounded-lg mb-4";
const teamCardClasses = "bg-yellow-500 p-4 rounded-b-lg";
const socialIconClasses = "flex justify-center mt-4";
const socialLinkClasses = "text-blue-500 mx-1";

const WhoWeServeCard = ({ title, description }) => {
    return (
        <div className={cardClasses}>
            <h3 className={textClasses}>{title}</h3>
            <p className={paragraphClasses}>{description}</p>
        </div>
    );
};

const WhatWeDoCard = ({ imageUrl, altText, title, description }) => {
    return (
        <div className="w-full  md:w-64 md:flex-shrink-0 md:mr-4 mb-4">
            <img src={imageUrl} alt={altText} className={imageClasses} />
            <h3 className={textClasses}>{title}</h3>
            <p className={paragraphClasses}>{description}</p>
        </div>
    );
};

const TeamMemberCard = ({ imageUrl, altText, name, role }) => {
    return (
        
        <div className="w-full md:w-64 md:flex-shrink-0 md:mr-4 mb-4 relative">
            <img src={imageUrl} alt={altText} className={`${imageClasses} w-full md:w-auto`} />
            <div className={`${teamCardClasses} absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2`}>
                <h3 className={`${textClasses} text-center md:text-left`}>{name}</h3>
                <p className={`${paragraphClasses} text-center md:text-left `}>{role}</p>
                <div className={`${socialIconClasses} text-center md:text-left`}>
                    <a href="#" className={socialLinkClasses}><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className={socialLinkClasses}><i className="fab fa-twitter"></i></a>
                    <a href="#" className={socialLinkClasses}><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
}



const CardAbout = () => {
  return (
    <div className="text-zinc-100 font-sans leading-normal tracking-normal">
      <div className="containe bg-black mx-auto px-4">
        <div className=" mx-auto py-6">
          <h2 className="text-3xl text-center text-zinc-100 font-bold mb-8">WHO WE SERVE</h2>
          <div className="flex text-zinc-100 flex-wrap justify-center gap-4">
            <WhoWeServeCard 
                title="BIOMEDICAL"
                description="We provide technical support and expertise for medical device manufacturers, helping to ensure devices are safe and effective for clinical use."
            />
            <WhoWeServeCard
                title="HOME HEALTHCARE"
                description="Supporting home healthcare providers with the latest in medical technology, ensuring patient safety and improving the quality of care."
            />
            <WhoWeServeCard
                title="SURGERY CENTERS"
                description="Offering comprehensive technology solutions and support to surgery centers to enhance operational efficiency and patient safety."
            />
          </div>
        </div>

        <div className="mx-auto  py-6">
          <h2 className="text-3xl text-center text-zinc-100 font-bold mb-8">What We Do</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatWeDoCard
                imageUrl="https://placehold.co/300x200"
                altText="On-site maintenance"
                title="ON-SITE MAINTENANCE"
                description="Ensuring the operational safety and efficiency of medical equipment with expert on-site maintenance."
            />
            <WhatWeDoCard
                imageUrl="https://placehold.co/300x200"
                altText="Sales & Rentals"
                title="SALES & RENTALS"
                description="Comprehensive sales and rental services for the latest and most reliable medical equipment."
            />
            <WhatWeDoCard
                imageUrl="https://placehold.co/300x200"
                altText="Electrical Safety"
                title="ELECTRICAL SAFETY"
                description="Certified electrical safety inspections to ensure compliance and safety of your medical equipment."
            />
          </div>
        </div>
      </div>

      <div className="text-center py-6">
        <h2 className="text-3xl text-zinc-900 font-bold mb-8">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <TeamMemberCard
              imageUrl="https://placehold.co/300x400"
              altText="Bilal Khan"
              name="Bilal Khan"
              role="Founder & CEO"
          />
          <TeamMemberCard
              imageUrl="https://placehold.co/300x400"
              altText="Osama Ali"
              name="Osama Ali"
              role="Technical Lead"
          />
          <TeamMemberCard
              imageUrl="https://placehold.co/300x400"
              altText="M. Imaz"
              name="M. Imaz"
              role="Operations Manager"
          />
        </div>
      </div>
    </div>
    )};



export default CardAbout;