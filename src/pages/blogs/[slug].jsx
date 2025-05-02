import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    axios
      .get(`https://backend.pysquad.com/api/v1/blogs/${slug}/`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading || !blog) {
    return (
      <div className="container py-20">
        <Skeleton height={50} count={1} />
        <Skeleton height={300} />
        <Skeleton count={5} />
      </div>
    );
  }

  return (
    <section className="relative">
      <div className="container relative mx-auto px-4 py-12 lg:flex lg:gap-8">
        <div className="w-full lg:w-3/4">
          <img
            src={blog.bg_image}
            alt={blog.title}
            className="rounded-xl w-full h-auto mb-6"
          />

          <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
          <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
            📅 {blog.modified} | ⏱ {blog.read_time} | 🧑‍💻 Admin
          </div>

          <div
            className="prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        <aside className="w-full lg:w-1/4 mt-12 lg:mt-0 sticky top-0">
          <div className="border p-4 rounded-xl mb-6">
            <Link
              href="/blogs"
              className="text-primary font-semibold hover:underline"
            >
              ← View All Blogs
            </Link>
          </div>

          <div className="mb-6">
            <div className="text-lg font-semibold mb-2">Author</div>
            <div className="flex items-center gap-3">
              <img
                src={blog.author.image}
                alt="author"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium">{blog.author.name}</h3>
                <div className="text-sm text-gray-500">{blog.author.title}</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Recent Post</h4>
            <ul className="space-y-2 text-sm text-primary">
              <li>
                <Link href="/blogs/ai-agent-in-a-nutshell-quick-implementation-with-p">
                  AI Agent in a Nutshell
                </Link>
              </li>
              <li>
                <Link href="/blogs/rest-apis-vs-mq-vs-graphql">
                  REST APIs vs MQ vs GraphQL
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogDetail;
