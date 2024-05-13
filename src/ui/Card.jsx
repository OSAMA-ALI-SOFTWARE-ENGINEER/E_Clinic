import React from "react";

const Card = ({cur}) => {
  return (
    <div className="card bg-base-500 shadow-xl image-full">
      <figure>
        <img
          src={cur.img}
          alt="Treatment"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl hover:text-white text-black whitespace-nowrap">{cur.name}</h2>
        <p>{cur.desc.slice(0,50)}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};



export default Card;
