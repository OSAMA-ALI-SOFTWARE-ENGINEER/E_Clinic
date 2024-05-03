import React from "react";

const SearchBox = () => {
  return (
    <div className=" bg-gray-600 py-8">
      <input
        type="text"
        className=" h-12 w-96 rounded-full border-2 border-none bg-white px-6 text-gray-700 outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-4"
        placeholder="enter"
      />
    </div>
  );
};

export default SearchBox;
