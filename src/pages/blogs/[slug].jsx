import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import Image from "next/image";
import { useBlogs } from "@/context/blogContext";

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [blogDeails, setBlogDetails] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  const { blogs, loading } = useBlogs();

  const recentBlogs = blogs
    .filter((blog) => blog.category?.title === "ERP")
    .slice(0, 3);

  useEffect(() => {
    if (!slug) return;
    axios
      .get(`https://backend.pysquad.com/api/v1/blogs/${slug}/`)
      .then((res) => {
        setBlogDetails(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [slug]);

  if (isloading || !blogDeails) {
    return (
      <div className="container py-20">
        <Skeleton baseColor="#E6EBFB" height={50} count={1} />
        <Skeleton baseColor="#E6EBFB" height={300} />
        <Skeleton baseColor="#E6EBFB" />
      </div>
    );
  }

  return (
    <section className="relative">
      <div className="container relative mx-auto px-4 py-12 lg:flex lg:gap-8">
        <div className="col-12 md:col-12 lg:col-8">
          <img
            src={blogDeails.bg_image}
            alt={blogDeails.title}
            className="rounded-xl w-full h-auto mb-6"
          />

          <h1 className="text-4xl font-bold mb-2">{blogDeails.title}</h1>
          <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
            📅 {blogDeails.modified} | ⏱ {blogDeails.read_time} | 🧑‍💻 Admin
          </div>

          <div
            className="prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: blogDeails.content }}
          />
        </div>

        <aside className="col-12 lg:col-4 mt-12 lg:mt-0 sticky top-20">
          <div className=" mb-6 ">
            <Link
              href="/blogs"
              className="text-primary hover:bg-primary hover:text-white font-medium border p-4 rounded-lg block duration-200"
            >
              View All Blogs
            </Link>
          </div>

          <div className="mb-6 bg-white shadow-md p-3 rounded-lg">
            <div className="text-lg font-semibold mb-2">Author</div>
            <div className="flex items-center gap-3">
              <img
                src={blogDeails.author.image}
                alt="author"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium">{blogDeails.author.name}</h3>
                <div className="text-sm text-gray-500">
                  {blogDeails.author.title}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 shadow-md bg-white p-3 rounded-lg">
            <h4 className="text-lg font-semibold mb-3">Recent Posts</h4>
            <ul className="space-y-2 text-sm text-primary">
              {loading ? (
                <Skeleton baseColor="#E6EBFB" count={3} height={100} />
              ) : (
                recentBlogs.map((blog) => (
                  <li>
                    <Link href="/blogs/ai-agent-in-a-nutshell-quick-implementation-with-p">
                      <div className="flex items-center justify-between shadow-lg bg-white p-3 rounded-lg">
                        <div className="blog-image max-w-32 object-contain">
                          <img
                            className="object-contain relative"
                            src={blog.small_image}
                            alt={blog.title}
                          />
                        </div>
                        <div className="blog-content col-8">
                          <h3 className="font-medium text-heading">
                            {blog.title}
                          </h3>
                          <p className="text-primary">{blog.modified}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogDetail;
