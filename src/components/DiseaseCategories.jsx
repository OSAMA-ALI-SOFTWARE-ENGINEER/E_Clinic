import React from "react";
import Card2 from "../ui/Card2";

const DiseaseCategories = () => {
  return (
    <div className=" my-20 flex flex-col gap-6 px-4">
      <h2 className=" font-secondary text-center text-3xl font-black uppercase">
        disease categories
      </h2>

      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 ">
        {[...new Array(6)]?.map((_, i) => (
          <Card2 key={i} />
        ))}
      </div>
    </div>
  );
};

export default DiseaseCategories;
