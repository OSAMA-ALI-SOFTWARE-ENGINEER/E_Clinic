import React from "react";
import { useSearchParams } from "react-router-dom";

const FilterCircleButton = ({ children, onClick }) => {
  const [searchParam] = useSearchParams();
  const urlContent = searchParam.get("letter") || null;
  console.log(urlContent);

  return (
    <button
      onClick={onClick}
      className={`  h-12 w-12 rounded-full  bg-cyan-600 font-bold text-white hover:bg-cyan-700`}
    >
      {children}
    </button>
  );
};

export default FilterCircleButton;
