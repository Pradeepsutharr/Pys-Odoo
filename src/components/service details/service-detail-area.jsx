import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { our_services } from "@/data/services-data";

const ServiceDetailsArea = () => {
  const router = useRouter();

  const serviceid = router.query.id;
  const [isActive, setIsActive] = useState(null);
  const [serviceData, setServiceData] = useState([]);

  console.log(serviceid, "-----------");

  useEffect(() => {
    if (serviceid) {
      setIsActive(serviceid);
      setServiceData(our_services);
    }
  }, [serviceid]);

  if (!serviceid) return <p>id not found</p>;

  return (
    <>
      {serviceData?.map((item, index) => {
        if (isActive === item.id) {
          return (
            <div key={index} className="bg-white text-paragraph">
              <section className="service-detail-hero text-white py-20 text-center relative">
                <div className="container mx-auto py-16">
                  <h1 className="text-6xl font-bold">{item.title}</h1>
                  <p className="mt-2 text-lg font-regular">{item.content}</p>
                </div>
              </section>

              <div className="container mx-auto flex flex-wrap justify-between py-12 relative">
                <div className=" md:col-8 col-12">
                  <div className="w-full mb-6">
                    <Image
                      src="/images/odoo-customization.png"
                      alt="Odoo Customization"
                      width={1200}
                      height={600}
                      className="rounded-md"
                    />
                  </div>

                  <h2 className="text-heading text-2xl font-bold mb-4 ">
                    {item.title}
                  </h2>
                  <p className="mb-6 font-regular">{item.description}</p>

                  <div className="flex flex-wrap justify-between items-center mb-6">
                    <div className="col-12 lg:col-6 md:col-6">
                      <h3 className="text-xl font-medium text-heading mb-2">
                        What We Customize:
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Odoo Modules (Sales, Inventory, HR, etc.)</li>
                        <li>Workflows & Automation</li>
                        <li>Reports & Dashboards</li>
                        <li>User Roles & Access Rights</li>
                        <li>Frontend UI/UX (eCommerce, POS)</li>
                      </ul>
                    </div>

                    <div className="col-12 md:col-6 lg:col-6">
                      <div className="flex flex-wrap">
                        <Image
                          className="ml-auto"
                          src="/images/service-circle-image.png"
                          alt="Customization Icons"
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
                    <div className="col-6 ">
                      <div className="content bg-secondary p-4 rounded-xl shadow">
                        <div className="mb-2">
                          <Image
                            src="/icons/flexible-icon.svg"
                            alt="Flexible Solutions"
                            width={40}
                            height={40}
                          />
                        </div>
                        <h4 className="text-heading font-medium mb-1">
                          Flexible Solutions
                        </h4>
                        <p>
                          Completely grow multimedia based content before global
                          scenarios.
                        </p>
                      </div>
                    </div>

                    <div className="col-6 ">
                      <div className="content bg-secondary p-4 rounded-xl shadow">
                        <div className="mb-2">
                          <Image
                            src="/icons/support-icon.svg"
                            alt="24/7 Support"
                            width={40}
                            height={40}
                          />
                        </div>
                        <h4 className="text-heading font-medium mb-1">
                          24/7 Support
                        </h4>
                        <p>
                          Completely grow multimedia based content before global
                          scenarios.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-3 md:col-4 col-12">
                  <div className="aside lg:sticky top-[10%]">
                    <div className="bg-secondary p-4 rounded-xl mb-6">
                      <h3 className="font-medium text-heading mb-3">
                        All Services
                      </h3>
                      <ul className="space-y-2">
                        {serviceData.map((s, i) => (
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
                              }}
                            >
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-secondary p-4 rounded-xl text-center">
                      <p className="text-sm mb-2 font-regular">
                        CONTACT US NOW
                      </p>
                      <h4 className="text-heading text-lg font-bold mb-2">
                        You Need Help?
                      </h4>
                      <button className="bg-primary text-white px-4 py-2 rounded">
                        Get a free consultation
                      </button>
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
