import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import { useBlogs } from "@/context/blogContext";
import parse from "html-react-parser";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import SEO from "@/components/seo";

const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [blogDetails, setBlogDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { blogs, loading } = useBlogs();

  useEffect(() => {
    if (!slug) return;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${slug}/`)
      .then((res) => {
        setBlogDetails(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [slug]);

  const CodeBlock = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className="relative group mb-4">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded hover:bg-gray-600 z-10"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <SyntaxHighlighter
          language="python"
          style={atomDark}
          customStyle={{ borderRadius: "8px", paddingTop: "2rem" }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    );
  };

  const renderHTMLWithCode = (htmlContent) => {
    return parse(htmlContent, {
      replace: (node) => {
        if (node.name === "pre" && node.children?.[0]?.data) {
          const rawCode = node.children[0].data;

          const classAttr = node.attribs?.class || "";
          const languageMatch = classAttr.match(/language-(\w+)/);
          const language = languageMatch ? languageMatch[1] : "text";

          return <CodeBlock code={rawCode} language={language} />;
        }
      },
    });
  };

  if (isLoading || !blogDetails) {
    return (
      <div className="container py-20">
        <div className="flex justify-between">
          <div className="col-12 lg:col-8">
            <Skeleton baseColor="#E6EBFB" height={300} count={1} />
            <Skeleton baseColor="#E6EBFB" count={2} />
            <Skeleton baseColor="#E6EBFB" width={700} />
            <Skeleton baseColor="#E6EBFB" width={500} />
          </div>
          <div className="lg:col-4 col-12">
            <Skeleton baseColor="#E6EBFB" height={50} />
            <Skeleton baseColor="#E6EBFB" count={5} height={100} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        pageTitle={`${
          blogDetails.title ?? "Blogs - Tech Insights &7 Tutorials"
        }`}
        pageDescription={`${
          blogDetails.title ??
          "Explore the latest insights and tech trends on the Pysquad blog. Discover in-depth articles, tutorials, and thought leadership from our experts."
        }`}
        keywords={`${
          blogDetails.keywords ?? "pysquad blogs, python blogs, odoo blogs"
        }`}
        ogImage={blogDetails.bg_image}
      />
      <section className="py-10 relative">
        <div className="container relative">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="col-12 lg:col-9 bg-white rounded-xl shadow-sm">
              {loading ? (
                <Skeleton baseColor="#E6EBFB" height={300} />
              ) : (
                <Image
                  src={blogDetails.bg_image}
                  alt="Blog Banner"
                  width={1140}
                  height={300}
                  priority
                  className="rounded-lg"
                />
              )}

              <div className="p-4 space-y-3">
                <h1 className="text-2xl text-heading font-bold">
                  {blogDetails?.title}
                </h1>
                <p className="text-sm text-paragraph font-regular mr-2">
                  <span>
                    <i className="fa-solid fa-calendar-days mr-2 text-primary"></i>
                    {blogDetails?.modified}
                  </span>{" "}
                  <span className="mx-3">|</span>
                  <span>
                    <i className="fa-solid fa-clock-rotate-left mr-2 text-primary"></i>
                    {blogDetails?.read_time}
                  </span>
                </p>
              </div>

              <div className="blog-content p-4  space-y-4 text-paragraph font-regular">
                {renderHTMLWithCode(blogDetails.content)}
              </div>
            </div>

            <div className="col-12 lg:col-3">
              <aside className="lg:sticky lg:top-[13%] space-y-6">
                <div className="">
                  <Link
                    href="/blogs"
                    className="bg-gray-100 block p-3 font-medium text-lg text-heading text-center rounded-md hover:bg-primary hover:text-white duration-300"
                  >
                    View all blogs
                  </Link>
                </div>

                <div className="bg-secondary p-4 rounded-lg shadow-sm">
                  <h2 className="font-bold text-heading text-lg mb-4 text-center">
                    Feeds
                  </h2>
                  {loading ? (
                    <div className="flex">
                      <Skeleton baseColor="#E6EBFB" height={80} width={80} />
                      <div className="col-9">
                        <Skeleton baseColor="#E6EBFB" count={2} />
                      </div>
                    </div>
                  ) : (
                    blogs.slice(0, 3).map((blog, i) => (
                      <div key={i} className="">
                        <Link
                          href={`/blogs/${blog.slug}`}
                          className="flex items-center gap-4 mb-4 bg-white p-2 rounded-lg shadow-md"
                        >
                          <Image
                            src={blog.small_image || "/placeholder.jpg"}
                            alt={blog.title}
                            width={60}
                            height={60}
                            priority
                            className="rounded-md "
                          />
                          <p className="text-sm font-medium text-heading hover:text-primary ">
                            {blog.title}
                          </p>
                        </Link>
                      </div>
                    ))
                  )}
                </div>

                <div className="bg-secondary p-4 rounded-xl shadow-sm">
                  <h2 className="font-bold text-center text-heading text-lg mb-4">
                    Follow Us
                  </h2>
                  <div className="flex justify-center">
                    <div className="social-contact flex gap-4 mt-2">
                      <Link
                        href="https://www.linkedin.com/company/pysquad-informatics/"
                        target="_blank"
                        aria-label="Linkedin"
                        className="text-heading hover:bg-[#0077B5] hover:text-white duration-200 bg-gray-200 min-h-10 min-w-10 rounded-full flex justify-center items-center"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/pysquad_informatics/"
                        target="_blank"
                        aria-label="Instagram"
                        className="text-heading hover:bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 hover:text-white duration-200 bg-gray-200 min-h-10 min-w-10 rounded-full flex justify-center items-center"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                      <Link
                        href="https://www.facebook.com/people/PySquad/61554988294334/#"
                        target="_blank"
                        aria-label="Facebook"
                        className="text-heading hover:bg-[#1877F2] hover:text-white duration-200 bg-gray-200 min-h-10 min-w-10 rounded-full flex justify-center items-center"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://twitter.com/pysquad_info"
                        target="_blank"
                        aria-label="Twitter"
                        className="text-heading hover:bg-black hover:text-white duration-200 bg-gray-200 min-h-10 min-w-10 rounded-full flex justify-center items-center"
                      >
                        <i className="fa-brands fa-x-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
