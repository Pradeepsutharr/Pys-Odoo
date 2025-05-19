import React from "react";
import dynamic from "next/dynamic";

const ServiceHero = dynamic(() => import("../service/servicesHero"));
const AllServices = dynamic(() => import("../service/allServices"));

const ServicePage = () => {
  return (
    <>
      <ServiceHero />
      <AllServices />
    </>
  );
};

export default ServicePage;
