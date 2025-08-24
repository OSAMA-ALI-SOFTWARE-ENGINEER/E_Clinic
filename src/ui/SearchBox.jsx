import React from "react";

const SearchBox = ({ searchInput, setSearchInput }) => {
  return (
    <div className=" relative h-14">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className=" absolute left-0 top-0 h-full w-full rounded-full border-2 border-none bg-white pl-14 pr-4 text-gray-700 outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-4"
        placeholder="enter"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="absolute left-4 top-[50%] h-6 w-6 -translate-y-[50%] text-gray-500 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
};

export default SearchBox;
