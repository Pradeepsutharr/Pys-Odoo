import React from "react";
import dynamic from "next/dynamic";

const IndustryHero = dynamic(() => import("../industries/industry-hero"));
const IndustriesSlider = dynamic(() =>
  import("../industries/industriesSldier")
);
const TalkToExpert = dynamic(() => import("../industries/talkToExpert"));

const IndustryPage = () => {
  return (
    <>
      <IndustryHero />
      <IndustriesSlider />
      <TalkToExpert />
    </>
  );
};

export default IndustryPage;
