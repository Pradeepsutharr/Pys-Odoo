import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { industriesData } from "@/data/industries-data";

const IndustriesPage = () => {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    setIndustries(industriesData);
  }, []);

  return (
    <section className="">
      <div className="flex flex-col items-center bg-[#151922] justify-center py-20 text-center">
        <h1 className="text-6xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-paragraph font-regular text-xl mt-5 max-w-4xl">
          Every great solution starts with a simple conversation. Whether you
          have a question, an idea, or a challenge to solve — let’s connect and
          create something remarkable together.
        </p>
      </div>

      <div className="container">
        {/* Industry Cards */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6 relative col-12 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 mb-4">
                <Image
                  src={industry.icon}
                  alt={industry.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-heading text-xl font-bold mb-2">
                {industry.title}
              </h3>
              <p className="text-paragraph text-sm mb-4">
                {industry.description}
              </p>
              <Link
                href={`/industries/${industry.slug}`}
                className="text-primary text-sm font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="mt-24 text-center bg-[#1B1525] py-20 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Want To See How Odoo Fits Your Business? Let’s Talk!
          </h2>
          <Link
            href="/contact"
            className="mt-6 inline-block bg-primary text-white py-3 px-6 rounded-xl font-medium shadow-md hover:bg-opacity-90"
          >
            Talk to an Odoo expert
          </Link>
        </section>
      </div>
    </section>
  );
};

export default IndustriesPage;
