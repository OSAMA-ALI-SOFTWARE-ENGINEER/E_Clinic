import React from "react";

const Button = ({ children }) => {
  return (
    <button className="rounded-md bg-cyan-300 px-6 py-1.5 font-semibold text-gray-900 transition-all duration-300 hover:bg-cyan-800">
      {children}
    </button>
  );
};

export default Button;
