import React from "react";
import Image from "next/image";
import "@/styles/globals.css";
import SplitText from "../components/splitText";

const Hero = () => {
  return (
    <section className="hero py-20 ">
      <div className="container relative text-center ">
        <div className="absolute lg:left-10 left-[40%] w-20 h-20 lg:top-[-8%] top-[-20%] md:block hidden">
          <Image
            className="animate-slow-spin object-contain"
            src="/images/Decorative_cube.png"
            alt="decorative cube"
            fill
            sizes="(max-width: 768px) 40px, 64px"
          />
        </div>

        <div className="heading col-12 lg:col-10 mx-auto">
          <h1 className="capitalize leading-snug text-5xl lg:text-[90px] font-bold text-center">
            <SplitText
              text="simplify your business with odoo ERP"
              type="word"
            />
          </h1>
        </div>

        <div className="key-points flex flex-wrap justify-center mt-5 gap-6 text-xl font-medium">
          <span>Implementation</span>
          <span className="text-primary text-2xl">•</span>
          <span>Customization</span>
          <span className="text-primary text-2xl">•</span>
          <span>Integration</span>
          <span className="text-primary text-2xl">•</span>
          <span>Support</span>
        </div>

        <p className="mt-6 text-paragraph col-12 lg:col-6 text-lg mx-auto text-center">
          We help growing businesses implement and customize Odoo to match their
          exact needs — no unnecessary complexity, no guesswork.
        </p>

        <button className="mt-10 animate-bounce bg-primary text-white px-6 py-3 rounded-full shadow-md text-center">
          Get a free consultation
        </button>
      </div>
    </section>
  );
};

export default Hero;
