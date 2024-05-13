import React, { useState } from "react";
import BreadCrum from "../../components/TreatementFilterSection/BreadCrum";
import Content from "./Content";
import FilterButtons from "./FilterButtons";
import { useDiasease } from "./useDiseases";
import Header from "../Header";
import AllDiseases from "./AllDiseases";

const TreatmentFilterSection = () => {
  const [btnContent, setBtnContent] = useState("");
  const [show, setShow] = useState(false);

  return (
    <>
      <Header />

      <div className="  min-h-[70vh]  max-w-full bg-gradient-to-r from-cyan-800 to-cyan-400 p-8">
        <div className=" mx-auto max-w-[1200px]">
          <BreadCrum />
          <div className=" grid grid-cols-1 gap-x-20 sm:grid-cols-2 sm:justify-items-center">
            <Content />
            <FilterButtons
              btnContent={btnContent}
              setBtnContent={setBtnContent}
            />
          </div>
        </div>
      </div>

      <AllDiseases />
    </>
  );
};

export default TreatmentFilterSection;

{
  /* <div dangerouslySetInnerHTML={{ __html: item.content }} />; */
}
