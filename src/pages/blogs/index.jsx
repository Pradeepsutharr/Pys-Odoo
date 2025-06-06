import React, { useState, useEffect } from "react";
import BlogCard from "@/components/blog/blogCard";
import Skeleton from "react-loading-skeleton";
import { useInView } from "react-intersection-observer";
import SEO from "@/components/seo";
import axios from "axios";

const Blogs = ({ blogs }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && visibleCount < blogs.length) {
      setLoadingMore(true);
      const timeout = setTimeout(() => {
        setVisibleCount((prev) => prev + 6);
        setLoadingMore(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [inView, visibleCount, blogs.length]);

  return (
    <>
      <SEO
        pageTitle="Odoo ERP Blogs & Insights | Tips, Trends & Best Practices – Odoo.Pysquad.com"
        pageDescription="Explore expert blogs on Odoo ERP solutions, implementation tips, industry use-cases, and digital transformation strategies. Stay updated with the latest insights from Pysquad’s certified Odoo experts."
        keywords="Odoo ERP blogs, Odoo implementation tips, ERP case studies, Odoo best practices, ERP development insights, Pysquad blog, Odoo industry trends"
        ogTitle="Odoo ERP Blogs & Insights | Tips, Trends & Best Practices – Odoo.Pysquad.com"
        ogUrl="https://odoo.pysquad.com/blogs"
      />
      <section className="py-2">
        <div className="flex flex-col items-center bg-[#151922] justify-center py-20 text-center">
          <h1 className="text-6xl font-bold text-white mb-2">
            Blogs Exploration
          </h1>
          <p className="text-paragraph font-regular text-xl mt-5 max-w-4xl">
            Explore our insightful blogs for the latest trends, expert insights,
            and valuable information in the world of technology, business, and
            innovation. Stay informed, inspired, and discover new perspectives
            with our engaging blog posts.
          </p>
        </div>
        <div className="container">
          <div className="flex flex-wrap justify-center">
            {blogs.slice(0, visibleCount).map((blog, i) => (
              <div key={i} className="col-12 md:col-6 lg:col-4 p-2">
                <BlogCard
                  slug={blog.slug}
                  title={blog.title}
                  tag={blog.category.title}
                  imageUrl={blog.bg_image}
                  date={blog.modified}
                />
              </div>
            ))}

            {loadingMore &&
              Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`loadmore-${i}`}
                  className="col-12 md:col-6 lg:col-4 p-4 bg-white shadow-sm rounded-lg mb-6"
                >
                  <Skeleton baseColor="#E6EBFB" height={200} />
                  <div className="flex gap-4 mt-2 mb-2">
                    <Skeleton width={70} baseColor="#E6EBFB" />
                    <Skeleton width={100} baseColor="#E6EBFB" />
                  </div>
                  <Skeleton baseColor="#E6EBFB" count={2} />
                  <Skeleton baseColor="#E6EBFB" width={80} height={20} />
                </div>
              ))}
          </div>
          {visibleCount < blogs.length && (
            <div ref={ref} className="h-10 mt-4"></div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/?is_for_odoo=true`
    );
    return {
      props: {
        blogs: res.data,
      },
      revalidate: 60,
    };
  } catch (err) {
    return {
      props: {
        blogs: [],
      },
    };
  }
}
