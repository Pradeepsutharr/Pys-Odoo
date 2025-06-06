import React from "react";
import SEO from "@/components/seo";
import dynamic from "next/dynamic";

const ServicePage = dynamic(() => import("../components/service/index"));
const BlogSection = dynamic(() => import("../components/blog/blogSec"));

const Services = ({ blogs }) => {
  return (
    <>
      <SEO
        pageTitle="Odoo ERP Services | Implementation to Support | Pysquad"
        pageDescription="Explore our full range of Odoo ERP services — including implementation, customization, integration, migration, and long-term support."
        keywords="Odoo ERP service provider, ERP integration services, Odoo development company, Custom ERP software"
        ogTitle="Odoo ERP Services | Implementation to Support | Pysquad"
        ogUrl="https://odoo.pysquad.com/services"
      />
      <ServicePage />
      <BlogSection blogs={blogs} />
    </>
  );
};
export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/?is_for_odoo=true`
    );
    const data = await res.json();
    console.log("Fetched blog data:", data);

    return {
      props: {
        blogs: data || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Failed to fetch blogs:", error);

    return {
      props: {
        blogs: [],
      },
      revalidate: 60,
    };
  }
}

export default Services;
