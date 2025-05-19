import React from "react";
import SEO from "@/components/seo";
import dynamic from "next/dynamic";

const ServicePage = dynamic(() => import("../components/service/index"));
const BlogSection = dynamic(() => import("../components/blog/blogSec"));

const Services = () => {
  return (
    <>
      <SEO
        pageTitle="Odoo ERP Services | Implementation to Support | Pysquad"
        pageDescription="Explore our full range of Odoo ERP services — including implementation, customization, integration, migration, and long-term support."
        keywords="Odoo ERP service provider, ERP integration services, Odoo development company, Custom ERP software"
      />
      <ServicePage />
      <BlogSection />
    </>
  );
};

export default Services;
