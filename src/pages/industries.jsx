import SEO from "@/components/seo";
import React from "react";
import dynamic from "next/dynamic";

const IndustryPage = dynamic(() => import("../components/industries/index"));
const BlogSection = dynamic(() => import("../components/blog/blogSec"));

const industries = ({ blogs }) => {
  return (
    <>
      <SEO
        pageTitle="Odoo ERP for Every Industry | Pysquad"
        pageDescription="Explore how Pysquad tailors Odoo ERP solutions for retail, manufacturing, healthcare, education, logistics, and more."
        keywords="Odoo for manufacturing, Odoo for retail and eCommerce, ERP for healthcare, Industry-specific ERP solutions"
        ogTitle="Odoo ERP for Every Industry | Pysquad"
        ogUrl="https://odoo.pysquad.com/industries"
      />
      <IndustryPage />
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

export default industries;
