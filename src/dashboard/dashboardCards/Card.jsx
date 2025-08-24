import React from "react";

const car = [
  {
    name: "Disease",
  },
  {
    name: "Categories",
  },
  {
    name: "Mail List",
  },
];
const Card = ({ icon, lable, value, loading, error }) => {
  if (loading)
    return (
      <div className=" h-20 w-48 animate-pulse rounded-md bg-gray-300"></div>
    );

  if (error) return <p>Error while fetching data</p>;
  return (
    <div className="flex flex-col  items-center gap-3 rounded-md border bg-base-100 px-4  py-4">
      <div className=" text-2xl">{icon}</div>

      <div className=" flex w-full justify-between">
        <p className=" font-medium capitalize text-stone-600">{lable}</p>
        <p className=" font-bold text-stone-500">{value}</p>
      </div>
    </div>
  );
};

export default Card;
