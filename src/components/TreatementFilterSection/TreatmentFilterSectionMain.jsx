import React, { useState } from "react";
import BreadCrum from "../../components/TreatementFilterSection/BreadCrum";
import Content from "./Content";
import FilterButtons from "./FilterButtons";
import { useDiasease } from "./useDiseases";

const TreatmentFilterSection = () => {
  const [btnContent, setBtnContent] = useState("");

  const { Diseases, isLoading, isError } = useDiasease();

  if (isLoading) return <p>Loading....</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <>
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
      {btnContent && (
        <div className=" bg-white p-8">
          <h2 className=" text-2xl font-bold uppercase text-gray-900  underline">
            {btnContent}
          </h2>
          {isLoading ? (
            <p>loading...</p>
          ) : (
            Diseases?.map((item) => {
              return (
                <div className="" key={item.id}>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              );
            })
          )}
        </div>
      )}
    </>
  );
};

export default TreatmentFilterSection;
