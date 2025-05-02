import React, { useState, useEffect } from "react";
import Link from "next/link";
import BlogCard from "./blogCard";
import Skeleton from "react-loading-skeleton";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://backend.pysquad.com/api/v1/blogs/")
      .then((response) => response.json())
      .then((data) => {
        const erpBlogs = data
          .filter((post) => post.category?.title === "ERP")
          .map((post) => ({
            id: post.id,
            title: post.title,
            slug: post.slug,
            description: post.body,
            tag: post.category?.title,
            date: post.modified,
            imageUrl: post.bg_image,
          }));

        const latestBlogs = erpBlogs.slice(0, 3);
        setBlogs(latestBlogs);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-[#F6F9FC]">
      <div className="container">
        <div className="flex justify-between items-end md:px-2 px-2">
          <div className="">
            <span className="text-primary font-regular capitalize bg-gray-100 py-2 px-4 rounded-full">
              blogs
            </span>

            <h2 className="mt-6 capitalize text-heading text-3xl md:text-4xl font-bold">
              featured blogs
            </h2>
          </div>
          <div>
            <Link
              href=""
              className="inline-block capitalize text-primary font-medium py-2 px-3"
            >
              view all blogs
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mx-2">
          {isLoading
            ? Array(3)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="col-12 sm:col-6 lg:col-4 px-2 mb-6">
                    <Skeleton
                      height={192}
                      baseColor="#E6EBFB"
                      className="rounded-xl mb-2"
                    />
                    <Skeleton
                      count={2.6}
                      baseColor="#E6EBFB"
                      className="rounded-xl mb-2"
                    />
                  </div>
                ))
            : blogs.map((blog) => (
                <div
                  key={blog.slug}
                  className="col-12 md:col-6 xl:col-4 lg:col-4 px-2 mb-6"
                >
                  <BlogCard {...blog} />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
