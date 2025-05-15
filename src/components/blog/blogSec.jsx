import React, { useState, useEffect } from "react";
import Link from "next/link";
import BlogCard from "./blogCard";
import Skeleton from "react-loading-skeleton";
import { useBlogs } from "@/context/blogContext";

const BlogSection = () => {
  const { blogs, isLoading } = useBlogs();

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
            : blogs.slice(0, 3).map((blog, i) => (
                <div
                  key={i}
                  className="col-12 md:col-6 xl:col-4 lg:col-4 px-2 mb-6"
                >
                  <BlogCard
                    slug={blog.slug}
                    title={blog.title}
                    imageUrl={blog.bg_image}
                    tag={blog.category.title}
                    date={blog.modified}
                  />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
