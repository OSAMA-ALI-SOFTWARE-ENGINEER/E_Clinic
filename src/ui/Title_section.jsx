import React from 'react';

const sharedClasses = {
  container: 'w-full mx-auto px-4 py-8',
  section: 'bg-black dark:bg-zinc-700 shadow-lg rounded-lg p-6',
  title: 'text-xl font-semibold mb-3',
  text: 'text-sm mb-4',
  button: 'bg-red-500 text-white py-2 px-4 rounded-lg',
};

function Title_section() {
  return (
    <div className={`bg-black dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 ${sharedClasses.container} h-auto sm:h-72 md:h-80 bg-cover bg-center`} style={{ backgroundImage: `linear-gradient(90deg, rgba(57, 73, 155, 0.00) 0%, rgba(10, 18, 200, 1.77) 4.78%), linear-gradient(90deg, rgba(57, 73, 155, 0.00) 0%, rgba(5, 16, 117, 0.77) 24.78%)` }}>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 ">Types of Treatment</h1>
      <div className="mb-6 relative">
        <div className="w-1/4 h-2 rounded-lg bg-red-700 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
      <p className="text-sm md:text-base text-center mb-12">
        Here we provide multiple types of treatment options for different conditions and health issues that may help you and your family's health.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          OVERVIEW
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          TREATMENT
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          OTHER DISEASE
        </button>
      </div>
    </div>
  );
}

export default Title_section;
