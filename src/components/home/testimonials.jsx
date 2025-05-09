// import React from "react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ReviewCard from "./reviewsCard";

const Testimonials = () => {
  const reviews = [
    {
      name: "David Farnandes",
      title: "CEO at Anaton",
      image: "/images/testimonial.png",
      rating: 2,
      description:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
    },
    {
      name: "David Farnandes",
      title: "CEO at Anaton",
      image: "/images/testimonial.png",
      rating: 3,
      description:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
    },
    {
      name: "David Farnandes",
      title: "CEO at Anaton",
      image: "/images/testimonial.png",
      rating: 4,
      description:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
    },
    {
      name: "David Farnandes",
      title: "CEO at Anaton",
      image: "/images/testimonial.png",
      rating: 5,
      description:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
    },
  ];

  return (
    <section className="py-10">
      <div className="container">
        <div className="wrapper text-center">
          <span className="text-primary font-regular capitalize bg-gray-100 py-2 px-4 rounded-full">
            Testimonials
          </span>

          <h2 className="mt-6 capitalize text-heading text-4xl font-bold">
            What Happy Clients Says About Us?
          </h2>
        </div>

        <div className="po-testimonial-slider lg:col-11 md:col-11 col-12 mx-auto">
          <Swiper
            className="mySwiper"
            spaceBetween={30}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
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
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard
                  name={review.name}
                  title={review.title}
                  imageSrc={review.image}
                  rating={review.rating}
                  description={review.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-end gap-4 mt-4">
            <button className="custom-prev bg-gray-200 hover:bg-primary duration-200 text-white p-2  w-12 h-12">
              Prev
            </button>
            <button className="custom-next bg-gray-300 hover:bg-primary duration-200 text-white p-2  w-12 h-12">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
