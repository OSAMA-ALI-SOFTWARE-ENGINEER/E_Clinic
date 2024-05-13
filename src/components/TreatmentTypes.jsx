import React from "react";
import Card from "../ui/Card";
import { useDiasease } from "./TreatementFilterSection/useDiseases";


const treatmentTpes = [
  {
    img: '/doctor.png',
    name:'Doctor treatment',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas aut voluptatem provident mollitia. Dolorum, at fugiat enim temporibus neque totam blanditiis voluptatum, accusantium et voluptates accusamus eos aperiam dolore'
  },
  {
    img: '/herbal.png',
    name:'Herbal treatment',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas aut voluptatem provident mollitia. Dolorum, at fugiat enim temporibus neque totam blanditiis voluptatum, accusantium et voluptates accusamus eos aperiam dolore'
  },
  {
    img: '/tredational.png',
    name:'Traditional treatment',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas aut voluptatem provident mollitia. Dolorum, at fugiat enim temporibus neque totam blanditiis voluptatum, accusantium et voluptates accusamus eos aperiam dolore'
  },
]

const TreatmentTypes = () => {
 
    return (
    <div className="my-20 space-y-6 px-4">
      <h2 className=" custom_heading_border font-secondary text-center text-3xl font-black uppercase">
        Treatments types
      </h2>

      <div className="  grid grid-cols-1 items-center max-w-[1100px] mx-auto justify-item-center gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {treatmentTpes?.map((cur, i) => (
          <Card cur={cur} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TreatmentTypes;
