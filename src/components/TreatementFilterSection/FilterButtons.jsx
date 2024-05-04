import React, { useState } from "react";
import FilterCircleButton from "./FilterCircleButton";
import { useSearchParams } from "react-router-dom";

const buttonsAlphabets = [
  {
    name: "A",
  },
  {
    name: "B",
  },
  {
    name: "C",
  },
  {
    name: "D",
  },
  {
    name: "E",
  },
  {
    name: "F",
  },
  {
    name: "G",
  },
  {
    name: "H",
  },
  {
    name: "I",
  },
  {
    name: "J",
  },
  {
    name: "K",
  },
  {
    name: "L",
  },
  {
    name: "M",
  },
  {
    name: "N",
  },
  {
    name: "O",
  },
  {
    name: "P",
  },
  {
    name: "Q",
  },
  {
    name: "R",
  },
  {
    name: "S",
  },
  {
    name: "T",
  },
  {
    name: "U",
  },
  {
    name: "V",
  },
  {
    name: "W",
  },
  {
    name: "X",
  },
  {
    name: "Y",
  },
  {
    name: "Z",
  },
  {
    name: "#",
  },
];

const FilterButton = ({ setBtnContent }) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const curBtnLetter = searchParam.get("letter") || null;

  function handleClick(content) {
    searchParam.set("letter", content);
    setSearchParam(searchParam);
    setBtnContent(content);
  }

  return (
    <div className=" mt-16 sm:mt-0 ">
      <h2 className=" font-semibold text-white">
        Find diseases & conditions by first letter
      </h2>
      <div className="my-5 grid grid-cols-8 items-center gap-2">
        {buttonsAlphabets.map((cur, i) => (
          <button
            className={`${curBtnLetter === cur.name ? " bg-white text-gray-500 hover:bg-gray-100" : "bg-cyan-600 text-white hover:bg-cyan-700"}
            h-12 w-12 rounded-full font-bold
            `}
            onClick={() => handleClick(cur.name)}
            key={i}
          >
            {cur.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButton;
