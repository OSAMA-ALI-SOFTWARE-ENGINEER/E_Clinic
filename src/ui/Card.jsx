import React from "react";

const Card = ({cur}) => {
  return (
    <div className="card bg-base-500 shadow-xl image-fit">
      <figure>
        <img
          src={cur.img}
          alt="Treatment"
        />
      </figure>
      <div className="card-body bg-gray-400 rounded-md">
        <h2 className="card-title text-[18px] text-white whitespace-nowrap">{cur.name}</h2>
        <p>{cur.desc.slice(0,40)} ...</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};



export default Card;
