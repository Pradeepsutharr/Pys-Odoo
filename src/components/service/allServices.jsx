import React from "react";
import Link from "next/link";
import Image from "next/image";
import { our_services } from "@/data/services-data";

const AllServices = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-wrap justify-center ">
          {our_services.map((s, index) => (
            <div key={index} className=" col-12 md:col-6 lg:col-4 xl:col-3">
              <div className="relative bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="max-w-20 min-h-20 rounded-full flex justify-center items-center mb-4 bg-primary">
                  <Image
                    src={s.icon}
                    alt={s.title}
                    width={45}
                    height={45}
                    priority
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
                  className="service-link inline-flex items-center gap-1 mt-6 text-sm text-heading hover:text-primary  transition z-10 relative"
                >
                  Read More <i className="fa-solid fa-angles-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
