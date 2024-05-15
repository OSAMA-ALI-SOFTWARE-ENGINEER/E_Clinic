import React from "react";
import SearchBox from "../../ui/SearchBox";

const Heading = ({ searchInput, setSearchInput }) => {
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
        <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
    </div>
  );
};

export default Heading;
