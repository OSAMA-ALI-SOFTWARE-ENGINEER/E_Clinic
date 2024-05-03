import React from "react";

const CardArticle = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-3">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-md"
        />
      </figure>
      <div className="card-body">
        <div className="card-actions mb-3 justify-start">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>

      <div className=" flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-3">
          <img
            className="h-8 w-8  rounded-full object-cover"
            src={"/author.jpeg"}
            alt="author image"
          />
          <span className="capitalize text-gray-300">john doe</span>
        </div>

        <p className="capitalize text-gray-300">
          aug 20, <span>2024</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default CardArticle;
