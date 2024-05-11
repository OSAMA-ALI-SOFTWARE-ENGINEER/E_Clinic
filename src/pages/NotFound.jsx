import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="flex flex-col gap-3">
          <h1 className="  text-9xl font-black tracking-wide text-gray-300">
            404
          </h1>
          <p className=" text-lg font-semibold text-gray-500">
            The visited page is not found!
          </p>
          <div className=" justify-self-center text-center">
            <button
              onClick={() => navigate(-1)}
              className=" rounded-sm bg-cyan-400 px-6 py-1.5 capitalize text-gray-100 shadow-2xl transition-all duration-300 hover:bg-cyan-700 hover:shadow-none"
            >
              go back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
