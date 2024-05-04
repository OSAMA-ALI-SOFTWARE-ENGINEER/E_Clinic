import React from "react";
import SearchBox from "../../ui/SearchBox";

const Heading = () => {
  return (
    <div className="text-white">
      <div className=" space-y-4">
        <h1 className="font-secondary text-4xl font-semibold capitalize ">
          Disease & condition
        </h1>
        <p className="text-lg">
          Easy-to-understand answers about diseases and conditions
        </p>
      </div>
      <div className=" mt-16  space-y-2">
        <p className="text-lg">Search diseases & conditions</p>
        <SearchBox />
      </div>
    </div>
  );
};

export default Heading;
