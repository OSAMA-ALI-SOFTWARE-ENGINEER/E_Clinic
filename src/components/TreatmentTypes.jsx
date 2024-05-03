import React from "react";
import Card from "../ui/Card";

const TreatmentTypes = () => {
  return (
    <div className=" my-20 space-y-6 px-4">
      <h2 className=" text-3xl font-primary text-center capitalize font-semibold">
        Treatments types
      </h2>

      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 items-center">
        {[...new Array(4)]?.map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
};

export default TreatmentTypes;
