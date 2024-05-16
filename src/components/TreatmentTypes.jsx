import React from "react";
import Card from "../ui/Card";
import { useDiasease } from "./TreatementFilterSection/useDiseases";


const treatmentTypes = [
  {
    img: '/doctor.png',
    name:'Doctor treatment',
    desc:'Lorem ipsum dolor sit amet consectetu llitia. Dolorum, at fugiat enim temporibus neque totam blanditiis voluptatum, accusantium et voluptates accusamus eos aperiam dolore'
  },
  {
    img: '/herbal.png',
    name:'Herbal treatment',
    desc:'Lorem ipsum dolor sit amet consectetur provident mollitia. Dolorum, at fugiat enim temporibus neque totam blanditiis voluptatum, accusantium et voluptates accusamus eos aperiam dolore'
  },
  {
    img: '/tredational.png',
    name:'Chinese treatment',
    desc:'Lorem ipsum dolor sit amet consectetur adipt mollitia. Dolorum, at fugiat enim temporibus neque totam blanditiis voluptatum, accusantium et voluptates accusamus eos aperiam dolore'
  },
  {
    img: '/tredational.png',
    name:'Homopathic treatment',
    desc:'Lorem ipsum dolor sit amet tatem provident mollitia. Dolorum, at fugiat enim temporibus neque totam blanditiis voluptatum, accusantium et voluptates accusamus eos aperiam dolore'
  },
]

const TreatmentTypes = () => {
 
    return (
    <div className="my-20 space-y-6 ">
      <h2 className=" custom_heading_border font-secondary text-center text-3xl font-black uppercase">
        Treatments types
      </h2>

      <div className="  grid grid-cols-1 max-w-[1100px] mx-auto justify-item-center gap-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
        {treatmentTypes?.map((cur, i) => (
          <Card cur={cur} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TreatmentTypes;
