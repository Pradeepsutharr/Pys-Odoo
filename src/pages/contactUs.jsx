import React from "react";
import SEO from "@/components/seo";
import dynamic from "next/dynamic";

const ContactPage = dynamic(() => import("../components/contact us/index"));

const contactUs = () => {
  return (
    <>
      <SEO
        pageTitle="Contact Pysquad | Odoo ERP Experts | Get a Free Consultation"
        pageDescription="Talk to our certified Odoo consultants today. Book a free consultation and learn how ERP can transform your business."
        keywords="Contact Odoo company, Book ERP consultation, Odoo developers India, Free ERP demo"
        ogTitle={"Contact Pysquad | Odoo ERP Experts | Get a Free Consultation"}
        ogUrl={"https://odoo.pysquad.com/contactUs"}
      />
      <ContactPage />
    </>
  );
};

export default contactUs;
