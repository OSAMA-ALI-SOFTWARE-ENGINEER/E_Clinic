import React from "react";

const sharedClasses = {
  container: "w-full mx-auto px-4 py-8",
  section: "bg-black dark:bg-zinc-700 shadow-lg rounded-lg p-6",
  title: "text-xl font-semibold mb-3",
  text: "text-sm mb-4",
  button: "bg-red-500 text-white py-2 px-4 rounded-lg",
};

const TitleSection = ({ title }) => {
  return (
    <div
      className={`bg-gradient-to-r from-cyan-800 to-cyan-400 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 ${sharedClasses.container} h-auto bg-cover bg-center sm:h-72 md:h-80`}
    >
      <h1 className="mb-6 text-center text-3xl font-bold sm:text-4xl ">
        {title}
      </h1>

      <div className="relative mb-6">
        <div className="absolute bottom-0 left-1/2 h-2 w-1/4 -translate-x-1/2 transform rounded-lg bg-red-700"></div>
      </div>
      <p className="mb-12 text-center text-sm md:text-base">
        Here we provide multiple types of treatment options for different
        conditions and health issues that may help you and your familys health.
      </p>
      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <button className="rounded bg-sky-500 px-4 py-2 text-white hover:bg-sky-600">
          OVERVIEW
        </button>
        <button className="rounded bg-sky-500 px-4 py-2 text-white hover:bg-sky-600">
          TREATMENT
        </button>
        <button className="rounded bg-sky-500 px-4 py-2 text-white hover:bg-sky-600">
          OTHER DISEASE
        </button>
      </div>
    </div>
  );
};

export default TitleSection;
