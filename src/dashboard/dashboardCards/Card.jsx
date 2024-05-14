import React from "react";

const Card = ({ icon }) => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-md bg-white px-4 py-1.5">
      <div>{icon}</div>

      <div className=" flex w-full justify-between">
        <p>total disease</p>
        <p>20</p>
      </div>
    </div>
  );
};

export default Card;
