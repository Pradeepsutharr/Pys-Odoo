import dynamic from "next/dynamic";
import React from "react";

const ServiceDetailsArea = dynamic(
  () => import("../components/service details/service-detail-area"),
  { ssr: false }
);

const serviceDetails = () => {
  return (
    <>
      <ServiceDetailsArea />
    </>
  );
};

export default serviceDetails;
