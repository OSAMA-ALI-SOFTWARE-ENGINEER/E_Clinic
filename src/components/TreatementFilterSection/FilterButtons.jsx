import React, { useState } from "react";
import FilterCircleButton from "./FilterCircleButton";
import { useSearchParams } from "react-router-dom";

const buttonsAlphabets = [
  {
    name: "A",
    value: "A",
  },
  {
    name: "B",
    value: "B",
  },
  {
    name: "C",
    value: "C",
  },
  {
    name: "D",
    value: "D",
  },
  {
    name: "E",
    value: "E",
  },
  {
    name: "F",
    value: "F",
  },
  {
    name: "G",
    value: "G",
  },
  {
    name: "H",
    value: "H",
  },
  {
    name: "I",
    value: "I",
  },
  {
    name: "J",
    value: "J",
  },
  {
    name: "K",
    value: "K",
  },
  {
    name: "L",
    value: "L",
  },
  {
    name: "M",
    value: "M",
  },
  {
    name: "N",
    value: "N",
  },
  {
    name: "O",
    value: "O",
  },
  {
    name: "P",
    value: "P",
  },
  {
    name: "Q",
    value: "Q",
  },
  {
    name: "R",
    value: "R",
  },
  {
    name: "S",
    value: "S",
  },
  {
    name: "T",
    value: "T",
  },
  {
    name: "U",
    value: "U",
  },
  {
    name: "V",
    value: "V",
  },
  {
    name: "W",
    value: "W",
  },
  {
    name: "X",
    value: "X",
  },
  {
    name: "Y",
    value: "Y",
  },
  {
    name: "Z",
    value: "Z",
  },
  {
    name: "#",
    value: "null",
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
            onClick={() => handleClick(cur.value)}
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
