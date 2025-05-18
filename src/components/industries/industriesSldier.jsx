import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { industriesData } from "@/data/industries-data";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const IndustriesSlider = () => {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    setIndustries(industriesData);
  }, []);
  return (
    <section className="bg-[#F9F9F9] py-20">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="col-12 md:col-6 lg:col-4">
            <div className="industries-image ">
              <Image
                src="/images/industries-sec.png"
                width={380}
                height={400}
              />
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-8">
            <div>
              <h2 className="text-3xl font-bold text-heading ">
                Industries We Empower with Odoo ERP
              </h2>
              <p className="text-paragraph font-regular mt-2 max-w-4xl">
                One ERP, Tailored for Many
              </p>
            </div>

            <div className="industries-slider">
              <Swiper
                className="mySwiper "
                spaceBetween={30}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                navigation={{
                  prevEl: ".custom-prev",
                  nextEl: ".custom-next",
                }}
                pagination={{
                  clickable: true,
                  el: ".pagination",
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
              >
                {industries.map((industry, index) => (
                  <SwiperSlide key={index} className="py-8">
                    <div className="bg-white rounded-2xl shadow-sm p-8 relative transition-transform hover:-translate-y-1 hover:shadow-lg">
                      <div className="max-w-20 min-h-20 rounded-full flex justify-center items-center mb-4 bg-primary">
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
                        href=""
                        className="text-primary text-sm font-medium industry-link "
                      >
                        Read More <i class="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className=" flex justify-between">
              <div className="pagination flex gap-1 items-center "></div>
              <div className="flex gap-4">
                <button className="custom-prev bg-gray-200 px-4 py-3 hover:bg-primary hover:text-white duration-300">
                  <i class="fa-solid fa-angles-left"></i>
                </button>
                <button className="custom-next bg-gray-200 px-4 py-3 hover:bg-primary hover:text-white duration-300">
                  <i class="fa-solid fa-angles-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSlider;
