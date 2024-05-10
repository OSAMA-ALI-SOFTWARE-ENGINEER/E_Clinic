import React from "react";
import Title_section from "../ui/Title_section";
import Tcard from "../ui/Tcard";

import TreatmentFilterSection from "../components/TreatementFilterSection/TreatmentFilterSectionMain";
import Header from "../components/Header";

function Treatment() {
  return (
    <>
      <Header />
      <div>
        <TreatmentFilterSection />
        <Title_section />
        <Tcard />
        {/* <Tcard />
      <Tcard /> */}
      </div>
    </>
  );
}

export default Treatment;
