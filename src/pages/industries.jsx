import SEO from "@/components/seo";
import React from "react";
import dynamic from "next/dynamic";

const IndustryPage = dynamic(() => import("../components/industries/index"));
const BlogSection = dynamic(() => import("../components/blog/blogSec"));

const industries = () => {
  return (
    <>
      <SEO
        pageTitle="Odoo ERP for Every Industry | Pysquad"
        pageDescription="Explore how Pysquad tailors Odoo ERP solutions for retail, manufacturing, healthcare, education, logistics, and more."
        keywords="Odoo for manufacturing, Odoo for retail and eCommerce, ERP for healthcare, Industry-specific ERP solutions"
      />
      <IndustryPage />
      <BlogSection />
    </>
  );
};

export default industries;
