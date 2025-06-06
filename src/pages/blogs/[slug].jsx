import axios from "axios";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import parse from "html-react-parser";
import Link from "next/link";
import SEO from "@/components/seo";
import { useState, useEffect } from "react";

const BlogDetails = ({ blogDetails }) => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchblogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs/`,
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        setAllBlogs(response.data.slice(0, 3));
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchblogs();
  }, []);

  const CodeBlock = ({ code }) => {
    const handleCopy = () => {
      navigator.clipboard.writeText(code);
    };

    return (
      <div className="relative group mb-4">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded hover:bg-gray-600 z-10"
        >
          Copy
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
          return <CodeBlock code={rawCode} />;
        }
      },
    });
  };

  return (
    <>
      <SEO
        pageTitle={blogDetails.title}
        ogTitle={blogDetails.title}
        pageDescription={
          blogDetails.keywords ||
          "Explore the latest insights and tech trends on the Pysquad blog."
        }
        ogUrl={`https://odoo.pysquad.com/blogs/${blogDetails.slug}`}
        keywords={blogDetails.keywords || "pysquad blogs, python blogs"}
        ogImage={blogDetails.bg_image}
      />
      <section className="py-10 relative">
        <div className="container relative">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="col-12 lg:col-9 bg-white rounded-xl shadow-sm">
              <Image
                src={blogDetails.bg_image}
                alt="Blog Banner"
                width={1140}
                height={300}
                priority
                className="rounded-lg"
              />
              <div className="p-4 space-y-3">
                <h1 className="text-2xl text-heading font-bold">
                  {blogDetails.title}
                </h1>
                <p className="text-sm text-paragraph font-regular mr-2">
                  <span>
                    <i className="fa-solid fa-calendar-days mr-2 text-primary"></i>
                    {blogDetails.modified}
                  </span>
                  <span className="mx-3">|</span>
                  <span>
                    <i className="fa-solid fa-clock-rotate-left mr-2 text-primary"></i>
                    {blogDetails.read_time}
                  </span>
                </p>
              </div>
              <div className="blog-content p-4 space-y-4 text-paragraph font-regular">
                {renderHTMLWithCode(blogDetails.content)}
              </div>
            </div>

            <div className="col-12 lg:col-3">
              <aside className="lg:sticky lg:top-[13%] space-y-6">
                <Link
                  href="/blogs"
                  className="bg-gray-100 block p-3 font-medium text-lg text-heading text-center rounded-md hover:bg-primary hover:text-white duration-300"
                >
                  View all blogs
                </Link>

                <div className="bg-secondary p-4 rounded-lg shadow-sm">
                  <h2 className="font-bold text-heading text-lg mb-4 text-center">
                    Feeds
                  </h2>
                  {loading ? (
                    <Skeleton baseColor="#E6EBFB" height={80} count={3} />
                  ) : (
                    allBlogs.slice(0, 3).map((blog, i) => (
                      <div key={i}>
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
                            className="rounded-md"
                          />
                          <p className="text-sm font-medium text-heading hover:text-primary">
                            {blog.title}
                          </p>
                        </Link>
                      </div>
                    ))
                  )}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs/?is_for_odoo=true`
  );
  const blogs = res.data;

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.slug}/`
  );
  return {
    props: {
      blogDetails: res.data,
    },
  };
}

export default BlogDetails;
