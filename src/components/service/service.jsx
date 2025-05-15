import React from "react";
import Link from "next/link";
import Image from "next/image";
import { our_services } from "@/data/services-data";

const Service = () => {
  console.log(our_services);

  return (
    <section>
      <div className="service-hero text-center  py-20">
        <div className="service-hero-content lg:col-8 mx-auto">
          <h2 className="text-6xl font-bold text-white ">
            Comprehnsive ERP Solutions & Services
          </h2>
          <p className="text-paragraph font-regular text-2xl mt-5">
            Discover our comprehensive Odoo services: ERP Implementation, Module
            Customization, Integration, Support & Migration.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-wrap justify-center ">
          {our_services.map((s, index) => (
            <div key={index} className=" col-12 md:col-6 lg:col-4 xl:col-3">
              <div className="relative bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 mb-4">
                  <Image
                    src={s.icon}
                    alt={`${s.title} icon`}
                    width={48}
                    height={48}
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 z-10 relative">
                  {s.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1 z-10 relative">
                  {s.content}
                </p>

                <Link
                  href={{
                    pathname: "/service-details",
                    query: { id: s.id },
                  }}
                  as="/service-details"
                  onClick={() => localStorage.setItem("serviceId", s.id)}
                  className="inline-flex items-center gap-2 mt-6 text-sm text-primary bg-gray-200 px-4 py-2 rounded-md hover:bg-primary hover:text-white transition z-10 relative"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
