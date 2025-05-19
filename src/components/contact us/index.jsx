import React from "react";
import dynamic from "next/dynamic";

const ContactHero = dynamic(() => import("../contact us/contactHero"));
const ContactForm = dynamic(() => import("../contact us/contactForm"));
const ContactDetails = dynamic(() => import("../contact us/contactDetails"));

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactDetails />
    </>
  );
};

export default ContactPage;
