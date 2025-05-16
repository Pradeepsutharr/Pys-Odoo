import React, { useState, useEffect } from "react";
import { useBlogs } from "@/context/blogContext";
import BlogCard from "@/components/blog/blogCard";
import Skeleton from "react-loading-skeleton";
import { useInView } from "react-intersection-observer";

const Blogs = () => {
  const { blogs, loading } = useBlogs();
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !loading && visibleCount < blogs.length) {
      setLoadingMore(true);
      const timeout = setTimeout(() => {
        setVisibleCount((prev) => prev + 6);
        setLoadingMore(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [inView, loading, visibleCount, blogs.length]);

  return (
    <section className="py-2">
      <div className="container">
        <div className="text-center ">
          <h2 className="text-center text-6xl font-bold text-primary mb-3">
            Blogs Exploration
          </h2>

          <p className="lg:col-6 col-12 mx-auto text-paragraph">
            Explore our insightful blogs for the latest trends, expert insights,
            and valuable information in the world of technology, business, and
            innovation. Stay informed, inspired, and discover new perspectives
            with our engaging blog posts.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
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
              ))
            : blogs.slice(0, visibleCount).map((blog, i) => (
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

        {!loading && visibleCount < blogs.length && (
          <div ref={ref} className="h-10 mt-4"></div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
