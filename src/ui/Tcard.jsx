import React from "react";
import cancer from "../assets/images/Cancer.png";

// const sharedClasses = {
//   flex: "flex",
//   flexCol: "flex-col",
//   itemsCenter: "items-center",
//   justifyCenter: "justify-center",
//   p4: "p-4",
//   bgWhite: "bg-white",
//   shadowMd: "shadow-md",
//   border: "border",
//   borderZinc300: "border-zinc-300",
//   roundedLg: "rounded-lg",
//   m4: "m-4",
//   textRed500: "text-red-500",
//   fontBold: "font-bold",
//   uppercase: "uppercase",
//   maxWFull: "max-w-full", // Ensure full width for responsiveness
//   text2xl: "text-2xl",
//   mb2: "mb-2",
//   w24: "w-24",
//   h1: "h-1",
//   bgRed500: "bg-red-500",
//   mb4: "mb-4",
//   textZinc700: "text-zinc-700",
//   mt2: "mt-2",
//   bgCover: "bg-cover", // Class for background image covering the div
// };

const T_card = () => {
  return (
    <div className=" flex gap-6 px-8 py-12">
      <img
        className=" aspect-square w-56 rounded-md border border-gray-600 bg-gray-200 object-cover"
        src="/Cancer.png"
        alt=""
      />
      <div className=" space-y-3">
        <h2 className=" w-fit border-b-[4px] border-red-600 font-secondary text-2xl font-semibold capitalize">
          diseas name
        </h2>
        <hr />
        <p>
          Here we are providing multiple levels of disease solution and their
          treatment with random and real medicines which may help you out easy
          for your life. Here we are providing multiple levels of disease
          solution and their treatment with random and real medicines which may
          help you out easy for your life
        </p>
      </div>
    </div>
  );
};

export default T_card;
