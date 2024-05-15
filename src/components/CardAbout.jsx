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

const TeamMemberCard = ({ imageUrl, altText, name, role, Contact }) => {
    return (
        
        <div className="w-full md:w-64 md:flex-shrink-0 md:mr-4 mb-4 relative">
            <img src={imageUrl} alt={altText} className={`${imageClasses} w-full md:w-auto`} />
            <div className={`${teamCardClasses} absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2`}>
                <h3 className={`${textClasses} text-center md:text-left`}>{name}</h3>
                <p className={`${paragraphClasses} text-center md:text-left `}>{role}</p>
                <p className={`${paragraphClasses} text-center md:text-left `}>{Contact}</p>
                <div className={`${socialIconClasses} text-center md:text-left`}>
                    <a href="#" className={socialLinkClasses}><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className={socialLinkClasses}><i className="fab fa-twitter"></i></a>
                    <a href="#" className={socialLinkClasses}><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
}



const CardAbout = (prop) => {
  return (
    <div className="text-zinc-100 font-sans leading-normal tracking-normal">
      <div className="containe bg-black mx-auto px-4">
        <div className=" mx-auto py-6">
          <h2 className="text-3xl text-center text-zinc-100 font-bold mb-8">WHO WE SERVE</h2>
          <div className="flex text-zinc-100 flex-wrap justify-center gap-4">
            <WhoWeServeCard 
                title="Medical Research Support"
                description="Partnering with research institutions, we offer technology solutions to facilitate groundbreaking medical research and drive advancements in healthcare."
            />
            <WhoWeServeCard
                title="Community Health Support"
                description="Supporting community health organizations with tailored technology solutions to empower local health initiatives and foster wellness."
            />
            <WhoWeServeCard
                title=" Healthcare Knowledge Hub"
                description="We specialize in providing advanced technology and support for medical information portals, ensuring accurate and reliable health information for professionals and the public."
            />
          </div>
        </div>

        <div className="mx-auto  py-6">
          <h2 className="text-3xl text-center text-zinc-100 font-bold mb-8">What We Do</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatWeDoCard
                imageUrl="/Options.jpeg"
                altText="On-site maintenance"
                title="Centralized Health Hub"
                description="Our platform serves as a centralized hub for comprehensive health information and treatment solutions. We provide users with access to a vast array of reliable health resources, empowering them to make informed decisions about their well-being."
            />
            <WhatWeDoCard
                imageUrl="/Health.jpeg"
                altText="Sales & Rentals"
                title="Diverse Treatment Options"
                description="We offer a range of treatment modalities, including conventional medical treatments and alternative therapies. From herbal remedies to Chinese traditional medicine, our solutions cater to diverse health needs and preferences."
            />
            <WhatWeDoCard
                imageUrl="/teach.jpeg"
                altText="Electrical Safety"
                title="  Healthcare Technology"
                description="We specialize in providing innovative technology solutions for healthcare organizations. From medical device support to data management systems, our solutions are designed to enhance operational efficiency and improve patient care."
            />
          </div>
        </div>
      </div>

      <div className="text-center py-6">
        <h2 className="text-3xl text-zinc-900 font-bold mb-8">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <TeamMemberCard
              imageUrl="/Bilal.png"
              altText="Bilal Khan"
              name="Bilal Khan"
              role="full stack web developer "
              Contact="(+92)317-9760801"
          />
          <TeamMemberCard
              imageUrl="/osama.jpg"
              altText="Osama Ali"
              name="Osama Ali"
              role="full stack web developer"
              Contact="(+92)348-5033323"
          />
          <TeamMemberCard
              imageUrl="/m.maaz.png"
              altText="M. Maaz"
              name="M.Maaz"
              role="full stack web developer"
              Contact="(+92)349-7435278"
          />
        </div>
      </div>
    </div>
    )};



export default CardAbout;