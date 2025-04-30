import React, { useState, useEffect } from "react";
import Link from "next/link";
import BlogCard from "./blogCard";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        // Mapping data to match your existing structure
        const formattedBlogs = data.map((post) => ({
          id: post.id,
          title: post.title,
          description: post.body,
          tag: "General",
          date: "April 30, 2025",
          //   imageUrl: post.image,
          imageUrl: "/images/Blog-image.png",
        }));

        const latestBlogs = formattedBlogs.slice(0, 3);
        setBlogs(latestBlogs);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-primary font-regular capitalize bg-gray-100 py-2 px-4 rounded-full">
              why us
            </span>

            <h2 className="mt-6 capitalize text-heading text-4xl font-bold">
              why choose pysquad
            </h2>
          </div>
          <div>
            <Link
              href=""
              className="inline-block capitalize text-white bg-primary py-2 px-3"
            >
              view all blogs
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-between -mx-2">
          {isLoading
            ? Array(3)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className="col-12 sm:col-6 lg:col-4 animate-pulse px-2 mb-6"
                  >
                    <div className="bg-gray-200 h-[200px] w-full rounded-xl mb-4" />
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                  </div>
                ))
            : blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="col-12 sm:col-6 lg:col-4 px-2 mb-6"
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
