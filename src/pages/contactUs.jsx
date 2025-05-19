import React from "react";
import SEO from "@/components/seo";
import dynamic from "next/dynamic";

const ContactPage = dynamic(() => import("../components/contact us/index"), {
  ssr: false,
});

const contactUs = () => {
  return (
    <>
      <SEO
        pageTitle="Contact Pysquad | Odoo ERP Experts | Get a Free Consultation"
        pageDescription="Talk to our certified Odoo consultants today. Book a free consultation and learn how ERP can transform your business."
        keywords="Contact Odoo company, Book ERP consultation, Odoo developers India, Free ERP demo"
      />
      <ContactPage />
    </>
  );
};

export default contactUs;
