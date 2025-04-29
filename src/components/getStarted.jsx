import React from "react";
import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="wrapper text-center">
          <span className="text-primary font-regular capitalize bg-gray-100 py-2 px-4 rounded-full">
            how to get started
          </span>

          <h2 className="mt-6 capitalize text-heading text-4xl font-bold">
            Getting started is easy
          </h2>
        </div>

        <div className=" flex flex-wrap lg:items-center items-start lg:justify-between md:justify-center md:text-start bg-[#F1F2F4] p-6 max-w-[1000px] mx-auto rounded-lg mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="col-12 md:col-4 lg:col-3"
          >
            <h3 className="capitalize font-bold text-heading text-2xl mb-3 md:pe-10">
              book a free call
            </h3>
            <p className="font-regular text-paragraph">
              Let’s talk about your business goals and how Odoo can help. No
              pressure, just a quick discovery call.
            </p>
          </motion.div>

          <div className="col-1 lg:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
            >
              <path
                d="M61.6896 31.4098L55.8199 25.54L49.9502 31.4098L55.8199 37.2795L61.6896 31.4098ZM0.919922 32.4264H55.8199V30.3931H0.919922V32.4264Z"
                fill="url(#paint0_linear_270_630)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_270_630"
                  x1="5.49492"
                  y1="34.9681"
                  x2="10.2087"
                  y2="46.2366"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#714B67" stop-opacity="0" />
                  <stop offset="1" stop-color="#714B67" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            className="col-12 md:col-4 lg:col-3"
          >
            <h3 className="capitalize font-bold text-heading text-2xl lg:pe-10 mb-3">
              Get a Tailored Plan
            </h3>
            <p className="font-regular text-paragraph">
              We’ll outline the best Odoo modules and setup tailored to your
              workflow, budget, and timeline.
            </p>
          </motion.div>

          <div className="col-1 lg:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
            >
              <path
                d="M61.6896 31.4098L55.8199 25.54L49.9502 31.4098L55.8199 37.2795L61.6896 31.4098ZM0.919922 32.4264H55.8199V30.3931H0.919922V32.4264Z"
                fill="url(#paint0_linear_270_630)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_270_630"
                  x1="5.49492"
                  y1="34.9681"
                  x2="10.2087"
                  y2="46.2366"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#714B67" stop-opacity="0" />
                  <stop offset="1" stop-color="#714B67" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false }}
            className="col-12 md:col-4 lg:col-3"
          >
            <h3 className="capitalize font-bold text-heading text-2xl mb-3">
              Go Live with Confidence
            </h3>
            <p className="font-regular text-paragraph">
              From setup to training, we’ll take care of everything so your team
              can hit the ground running with confidence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
