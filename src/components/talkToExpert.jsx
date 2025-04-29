import React from "react";
import Link from "next/link";

const TalkToExpert = () => {
  return (
    <section className="py-20 talk-to-expert">
      <div className="container">
        <div className="wrapper text-center col-12 lg:col-10 mx-auto">
          <h2 className="mt-6 capitalize text-white text-4xl font-bold">
            Ready to Make Odoo Work for You?
          </h2>

          <p className="text-white font-regular text-sm max-w-96 mx-auto my-5">
            Let’s build an ERP system that saves you time, reduces manual work,
            and grows with your business.
          </p>

          <Link
            href="/"
            className="inline-block capitalize bg-primary text-white py-3 px-5 rounded-full"
          >
            talk to an expert
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TalkToExpert;
