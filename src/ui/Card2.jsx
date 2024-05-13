import React from "react";

const Card2 = ({cur}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-3">
        <img
          src={cur.image? cur.image : "/default.jpg"}
          alt="Diseases"
          className="rounded-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{cur.name?.slice(0,20)}...</h2>
        <p>{cur.overview?.slice(0,70)}...</p>
        <div className="card-actions justify-center">
          <button className="btn bg-sky-400 text-black hover:bg-sky-800 hover:text-white">Learn more </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
