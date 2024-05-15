import React from "react";
import Tcard from "../ui/Tcard";

// import TreatmentFilterSection from "../components/TreatementFilterSection/TreatmentFilterSectionMain";
import Header from "../components/Header";
import TitleSection from "../ui/TitleSection";

function Treatment() {
  return (
    <>
      <Header />
      <div>
        {/* <TreatmentFilterSection /> */}
        <TitleSection title={"Types of Treatment"} />
        <Tcard />
        {/* <Tcard />
      <Tcard /> */}
      </div>
    </>
  );
}

export default Treatment;
