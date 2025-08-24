import React from "react";
import cancer from "../assets/images/Cancer.png";

const T_card = (prop) => {
  return (
    <>
    <div className=" flex gap-6 px-8 py-12">
      <img
        className="aspect-square w-56 rounded-md border border-gray-600 bg-gray-200 object-cover"
        src={prop.img}
        alt=""
        />
      <div className=" space-y-3">
        <h2 className=" w-fit border-b-[4px] border-red-600 font-secondary text-2xl font-semibold capitalize">
          {prop.title}
        </h2>
        <hr />
        <p>
          {prop.des}
        </p>
      </div>
    </div>
    
   
        </>
  );
};

export default T_card;
