import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useSingleDisease } from "../components/singleDisease/useSingleDisease";

import { Link } from "react-router-dom";

const sharedClasses = {
  container: "w-full mx-auto px-4 py-8",
  section: "bg-black dark:bg-zinc-700 shadow-lg rounded-lg p-6",
  title: "text-xl font-semibold mb-3",
  text: "text-sm mb-4",
  button: "bg-red-500 text-white py-2 px-4 rounded-lg",
};

const SingleDisease = () => {
  const [overview, setOverview] = useState(true);
  const [symptoms, setSymptoms] = useState(false);
  const [causes, setCauses] = useState(false);
  const [prevention, setPrevention] = useState(false);
  const [treatment, setTreatment] = useState(false);

  const [herbal, setHerbal] = useState(false);
  const [homopathic, setHomopathic] = useState(false);
  const [doctor, setDoctor] = useState(false);
  const [chinese, setChinese] = useState(false);
  const { Disease, isLoadingDisease, isError } = useSingleDisease();
  if (isLoadingDisease) return <p>loading...</p>;
  if (isError) return <p>Error</p>;

  function handleOverview() {
    setTreatment(false);
    setSymptoms(false);
    setCauses(false);
    setPrevention(false);

    setOverview((show) => !show);
  }
  function handleTreatment() {
    setOverview(false);
    setCauses(false);
    setSymptoms(false);
    setPrevention(false);

    setTreatment((show) => !show);
  }
  function handleSymptoms() {
    setOverview(false);
    setTreatment(false);
    setCauses(false);
    setPrevention(false);

    setSymptoms((show) => !show);
  }
  function handleCauses() {
    setOverview(false);
    setTreatment(false);
    setSymptoms(false);
    setPrevention(false);
    setCauses((show) => !show);
  }
  function handlePrevention() {
    setOverview(false);
    setTreatment(false);
    setSymptoms(false);
    setCauses(false);
    setPrevention((show) => !show);
  }

  function handleHerbal() {
    setHerbal(true);
    setHomopathic(false);
    setDoctor(false);
    setChinese(false);
  }
  function handleHomopathic() {
    setHomopathic(true);
    setDoctor(false);
    setChinese(false);
    setHerbal(false);
  }
  function handleDoctor() {
    setDoctor(true);
    setHomopathic(false);
    setChinese(false);
    setHerbal(false);
  }
  function handleChinese() {
    setChinese(true);
    setHomopathic(false);
    setDoctor(false);
    setHerbal(false);
  }
  return (
    <>
      <Header />
      <div className="">
        <div
          className={`bg-gradient-to-r from-cyan-800 to-cyan-400 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 ${sharedClasses.container} h-auto bg-cover bg-center sm:h-72 md:h-80`}
        >
          <h1 className="mb-6 text-center text-3xl font-bold sm:text-4xl ">
            About {Disease.name}
          </h1>
          <div className="relative mb-6">
            <div className="absolute bottom-0 left-1/2 h-2 w-1/4 -translate-x-1/2 transform rounded-lg bg-red-700"></div>
          </div>

          <p className="mb-12 text-center text-sm md:text-base">
            Here we provide multiple types of treatment options for different
            conditions and health issues that may help you and your familys
            health.
          </p>

          <div className="mb-6 flex flex-col gap-4 md:flex-row">
            <button
              onClick={handleOverview}
              className="rounded bg-sky-500 px-4 py-2 uppercase text-white hover:bg-sky-600"
            >
              overview
            </button>
            <button
              onClick={handleSymptoms}
              className="rounded bg-sky-500 px-4 py-2 uppercase text-white hover:bg-sky-600"
            >
              symptoms
            </button>
            <button
              onClick={handleCauses}
              className="rounded bg-sky-500 px-4 py-2 uppercase text-white hover:bg-sky-600"
            >
              causes
            </button>
            <button
              onClick={handlePrevention}
              className="rounded bg-sky-500 px-4 py-2 uppercase text-white hover:bg-sky-600"
            >
              prevention
            </button>
            <button
              onClick={handleTreatment}
              className="rounded bg-sky-500 px-4 py-2 uppercase text-white hover:bg-sky-600"
            >
              treatment
            </button>
            <Link
              to={"/DiseaseSearch"}
              className="rounded bg-sky-500 px-4 py-2 text-center text-white hover:bg-sky-600"
            >
              OTHER DISEASE
            </Link>
          </div>
        </div>


        {/* Main Layout Design */}
        <div className=" grid grid-cols-1 items-start gap-y-6 px-4 py-24 md:grid-cols-2 md:gap-y-0">
          <div className="static  flex flex-col items-center justify-center gap-3 md:sticky md:top-0 ">
            <img
              className=" w-[60%] rounded-lg object-cover"
              src={Disease.image && Disease.image}
              alt=""
            />
            <h2 className="text-center text-2xl font-semibold capitalize text-stone-600">
              {Disease.name}
            </h2>
          </div>
          {/* Preview Disease Data */}
          {overview && (
            <div>
              <h3 className=" mb-6 text-xl font-bold capitalize text-stone-700">
                overview
              </h3>
              <div
                className=" space-y-5 "
                dangerouslySetInnerHTML={{ __html: Disease.overview }}
              />
            </div>
          )}
          {treatment && (
            <div>
              <h3 className=" mb-6 text-xl font-bold capitalize text-stone-700">
                treatment
              </h3>

              <div role="tablist" className="tabs-boxed tabs bg-sky-400 mb-8">
                <button
                  onClick={handleHerbal}
                  role="tab"
                  className={`tab ${herbal && "tab-active"} `}
                >
                  Herbal
                </button>
                <button
                  onClick={handleHomopathic}
                  role="tab"
                  className={`tab ${homopathic && "tab-active"} `}
                >
                  Homopathic
                </button>
                <button
                  onClick={handleDoctor}
                  role="tab"
                  className={`tab ${doctor && "tab-active"} `}
                >
                  Doctor
                </button>
                <button
                  onClick={handleChinese}
                  role="tab"
                  className={`tab ${chinese && "tab-active"} `}
                >
                  Chinese
                </button>
              </div>

              {herbal && (
                <div
                  className=" space-y-5 "
                  dangerouslySetInnerHTML={{ __html: Disease.herbal }}
                />
              )}
              {homopathic && (
                <div
                  className=" space-y-5 "
                  dangerouslySetInnerHTML={{ __html: Disease.homopathic }}
                />
              )}
              {doctor && (
                <div
                  className=" space-y-5 "
                  dangerouslySetInnerHTML={{ __html: Disease.doctor }}
                />
              )}
              {chinese && (
                <div
                  className=" space-y-5 "
                  dangerouslySetInnerHTML={{ __html: Disease.chinese }}
                />
              )}
            </div>
          )}
          {symptoms && (
            <div>
              <h3 className=" mb-6 text-xl font-bold capitalize text-stone-700">
                symptoms
              </h3>
              <div
                className=" space-y-5 "
                dangerouslySetInnerHTML={{ __html: Disease.symptoms }}
              />
            </div>
          )}
          {causes && (
            <div>
              <h3 className=" mb-6 text-xl font-bold capitalize text-stone-700">
                causes
              </h3>
              <div
                className=" space-y-5 "
                dangerouslySetInnerHTML={{ __html: Disease.causes }}
              />
            </div>
          )}
          {prevention && (
            <div>
              <h3 className=" mb-6 text-xl font-bold capitalize text-stone-700">
                prevention
              </h3>
              <div
                className=" space-y-5 "
                dangerouslySetInnerHTML={{ __html: Disease.prevention }}
              />
            </div>
          )}
        </div>
      </div>
    

      <Footer />
    </>
  );
};

export default SingleDisease;
