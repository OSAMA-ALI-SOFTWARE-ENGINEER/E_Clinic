import React from "react";

const Card = () => {
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src="/doctor.png"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Doctor's Treatment</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};



export default Card;
