import React from "react";
import dynamic from "next/dynamic";
import BlogSection from "../blog/blogSec";

const Hero = dynamic(() => import("../home/hero"));
const OurServices = dynamic(() => import("../home/ourServices"));
const WhyChooseUs = dynamic(() => import("../home/whyChooseUs"));
const Industries = dynamic(() => import("../home/industries"));
const Testimonials = dynamic(() => import("../home/testimonials"));
const TalkToExpert = dynamic(() => import("../home/talkToExpert"));

const HomePage = ({ blogs }) => {
  8;
  return (
    <>
      <Hero />
      <OurServices />
      <WhyChooseUs />
      <Industries />
      {/*       <Testimonials /> */}
      <TalkToExpert />
      <BlogSection blogs={blogs} />
    </>
  );
};

export default HomePage;
