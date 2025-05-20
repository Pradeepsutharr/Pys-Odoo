import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { our_services } from "@/data/services-data";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SEO from "../seo";

const ServiceDetailsArea = () => {
  const router = useRouter();

  const [serviceid, setServiceid] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const [serviceData, setServiceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedId = localStorage.getItem("serviceId");
    const queryId = router.query.id;
    if (storedId || queryId) {
      setServiceid(storedId);
      setIsActive(storedId);
      setServiceData(our_services);
    }

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {serviceData?.map((item, index) => {
        if (isActive === item.id) {
          return (
            <div key={index} className="bg-white text-paragraph">
              <SEO
                pageTitle={`${item.title} | Certified Odoo ERP Experts | Pysquad.com`}
                pageDescription={`Discover expert ${item.title} services with certified Odoo professionals at Pysquad. Tailored ERP solutions to streamline your business operations and boost productivity.`}
                keywords={`${item.title} Pysquad Odoo Services, Odoo ERP Experts, Odoo implementation, business automation, ERP integration`}
              />
              {isLoading ? (
                <div className="container">
                  <Skeleton baseColor="#E6EBFB" height={400} />
                </div>
              ) : (
                <section className="service-detail-hero text-white py-20 text-center relative">
                  <div className="container mx-auto py-16">
                    <h1 className="text-6xl font-bold">{item.title}</h1>
                    <p className="mt-2 text-lg font-regular">{item.content}</p>
                  </div>
                </section>
              )}

              <div className="container mx-auto flex flex-wrap justify-between py-12 relative">
                <div className=" md:col-8 col-12 order-2 lg:order-1">
                  <div className="w-full mb-6">
                    {isLoading ? (
                      <Skeleton
                        baseColor="#E6EBFB"
                        height={300}
                        className="w-full"
                      />
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={600}
                        priority
                        placeholder="empty"
                        className="rounded-md"
                      />
                    )}
                  </div>

                  <h2 className="text-heading text-4xl font-bold mb-4 ">
                    {item.title}
                  </h2>
                  <p className="mb-6 font-regular">{item.description}</p>

                  <div className="flex flex-wrap justify-between items-start mb-6">
                    <div className="col-12 lg:col-6 md:col-6">
                      <h3 className="text-xl font-bold text-heading mb-2 capitalize">
                        {item.key_points.title}
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        {item?.key_points.points.map((p, i) =>
                          isLoading ? (
                            <Skeleton key={i} />
                          ) : (
                            <li key={i}>{p}</li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="col-12 md:col-6 lg:col-6">
                      <div className="flex flex-wrap">
                        <Image
                          className="md:ml-auto w-auto"
                          src="/images/service-circle-image.png"
                          alt="Customization Icons"
                          priority
                          placeholder="empty"
                          width={250}
                          height={250}
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-heading mb-4">
                    Benefits With Our Service
                  </h3>

                  <div className="flex flex-wrap justify-between">
                    <div className="md:col-6 col-12 ">
                      <div className="content bg-gray-100 flex items-center justify-between p-4 rounded-xl shadow">
                        <div className="mb-2 col-3 bg-primary max-w-16 h-16 rounded-lg flex justify-center items-center">
                          <Image
                            src="/images//flexible-soutions.svg"
                            alt="Flexible Solutions"
                            width={40}
                            height={40}
                            priority
                          />
                        </div>
                        <div className="col-9">
                          <h4 className="text-heading text-lg font-medium mb-1">
                            Flexible Solutions
                          </h4>
                          <p>
                            Completely grow multimedia based content before
                            global scenarios.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-6 col-12">
                      <div className="content bg-gray-100 flex items-center justify-between p-4 rounded-xl shadow">
                        <div className="mb-2 col-3 bg-primary max-w-16 h-16 rounded-lg flex justify-center items-center ">
                          <Image
                            src="/images//support.svg"
                            alt="24/7 Support"
                            width={40}
                            height={40}
                            priority
                          />
                        </div>
                        <div className="col-9">
                          <h4 className="text-heading text-lg font-medium mb-1">
                            24/7 Support
                          </h4>
                          <p>
                            Completely grow multimedia based content before
                            global scenarios.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-3 md:col-4 col-12 order-1 lg:order-2">
                  <div className="aside lg:sticky top-[10%]">
                    <div className="bg-gray-100 p-4 rounded-xl mb-6">
                      <h3 className="font-medium text-heading mb-3">
                        All Services
                      </h3>
                      <ul className="space-y-2">
                        {serviceData.map((s, i) =>
                          isLoading ? (
                            <Skeleton key={i} baseColor="#E6EBFB" height={40} />
                          ) : (
                            <li key={i}>
                              <Link
                                className={`block font-regular mb-2 py-3 px-4 rounded ${
                                  isActive === s.id
                                    ? "bg-primary text-white"
                                    : "bg-white text-black"
                                }`}
                                href="/service-details"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsActive(s.id);
                                  localStorage.setItem("serviceId", s.id);
                                }}
                              >
                                {s.title}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="bg-gray-100 px-4 py-10 rounded-xl text-center">
                      <p className="text-sm mb-2 font-regular">
                        CONTACT US NOW
                      </p>
                      <h4 className="text-heading text-lg font-bold mb-2">
                        You Need Help?
                      </h4>
                      <Link
                        href="/contactUs"
                        className="bg-primary text-white px-4 py-2 rounded"
                      >
                        Get a free consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default ServiceDetailsArea;
