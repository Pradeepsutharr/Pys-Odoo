import React from "react";
import Hero from "./hero";
import OurServices from "./ourServices";
import WhyChooseUs from "./whyChooseUs";
import Industries from "./industries";
import Testimonials from "./testimonials";
import TalkToExpert from "./talkToExpert";
import BlogSection from "../blog/blogSec";

const HomePage = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <TalkToExpert />
      <BlogSection />
    </>
  );
};

export default HomePage;
