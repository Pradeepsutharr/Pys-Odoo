import React from "react";
import Link from "next/link";

const TalkToExpert = () => {
  return (
    <section className="industries-tal-to-expert  text-center bg-[#1B1525] py-20  text-white">
      <div className="xl:col-4 lg:col-6 md:col-8 col-12 mx-auto">
        <h2 className="text-4xl font-bold mb-4 ">
          Want To See How Odoo Fits Your Business? Let’s Talk!
        </h2>
        <Link
          href="/contactUs"
          className="mt-6 inline-block bg-primary text-white py-3 px-6 rounded-xl font-medium shadow-md hover:bg-opacity-90"
        >
          Talk to an Odoo expert
        </Link>
      </div>
    </section>
  );
};

export default TalkToExpert;
