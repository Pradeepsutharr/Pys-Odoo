import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import { useBlogs } from "@/context/blogContext";
import parse, { domToReact } from "html-react-parser";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "@/styles/globals.css";
const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [blogDetails, setBlogDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { blogs, loading } = useBlogs();

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

  const renderHTMLWithCode = (htmlContent) => {
    return parse(htmlContent, {
      replace: (node) => {
        if (node.name === "pre" && node.children?.[0]?.name === "code") {
          const rawCode = node.children[0].children[0]?.data || "";
          const classAttr = node.children[0].attribs?.class || "";
          const languageMatch = classAttr.match(/language-(\w+)/);
          const language = languageMatch ? languageMatch[1] : "text";

          return (
            // <div className="relative mb-6 group bg-[#f4f4f5] rounded-xl overflow-x-auto">
            //   <CopyToClipboard text={rawCode}>
            //     <button className="absolute top-2 right-2 p-1 rounded bg-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            //       Copy
            //     </button>
            //   </CopyToClipboard>
            //   <SyntaxHighlighter
            //     language="python"
            //     style={atomDark}
            //     customStyle={{
            //       padding: "1rem",
            //       fontSize: "0.875rem",
            //       background: "black",
            //       margin: 0,
            //     }}
            //   >
            //     {rawCode}
            //   </SyntaxHighlighter>
            // </div>

            <div className="code-block-wrapper group bg-[#282c34]">
              <CopyToClipboard text={rawCode}>
                <button className="code-copy-btn">Copy</button>
              </CopyToClipboard>
              <SyntaxHighlighter
                language={language}
                style={atomDark}
                customStyle={{
                  borderRadius: "0.75rem",
                  padding: "1rem",
                  fontSize: "0.875rem",
                  background: "#282c34",
                  margin: 0,
                }}
              >
                {rawCode}
              </SyntaxHighlighter>
            </div>
          );
        }

        if (node.type === "tag") {
          const headingMap = {
            h2: "text-xl font-bold text-heading mt-6 mb-2",
            h3: "text-lg font-semibold text-primary mt-5 mb-2",
            h4: "text-base font-medium text-heading mt-4 mb-2",
          };

          if (headingMap[node.name]) {
            return (
              <div className={headingMap[node.name]}>
                {domToReact(node.children)}
              </div>
            );
          }

          if (node.name === "p") {
            return (
              <p className="text-paragraph leading-relaxed mb-4">
                {domToReact(node.children)}
              </p>
            );
          }

          if (node.name === "ul") {
            return (
              <ul className="list-disc ml-6 mb-4 text-paragraph">
                {domToReact(node.children)}
              </ul>
            );
          }

          if (node.name === "ol") {
            return (
              <ol className="list-decimal ml-6 mb-4 text-paragraph">
                {domToReact(node.children)}
              </ol>
            );
          }

          if (node.name === "li") {
            return (
              <li className="mb-2 leading-relaxed text-paragraph">
                {domToReact(node.children)}
              </li>
            );
          }

          if (node.name === "code" && node.parent?.name !== "pre") {
            return (
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
                {domToReact(node.children)}
              </code>
            );
          }
        }
      },
    });
  };

  if (isLoading || !blogDetails) {
    return (
      <div className="container py-20">
        <Skeleton height={50} count={1} />
        <Skeleton height={300} />
        <Skeleton count={5} />
      </div>
    );
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="col-12 lg:col-8 bg-white rounded-xl shadow-sm">
          <Image
            src={blogDetails.bg_image}
            alt="Blog Banner"
            width={1140}
            height={300}
            className="w-full h-auto rounded-t-xl"
          />

          <div className="p-4 space-y-3">
            <h1 className="text-2xl text-heading font-bold">
              {blogDetails?.title}
            </h1>
            <p className="text-sm text-paragraph font-regular">
              {blogDetails?.modified} | {blogDetails?.read_time}
            </p>
          </div>

          <div className="p-4 space-y-4 text-paragraph font-regular">
            {renderHTMLWithCode(blogDetails.content)}
          </div>
        </div>

        <div className="col-12 lg:col-4 space-y-6">
          <div className="bg-secondary p-4 rounded-xl shadow-sm">
            <h2 className="font-bold text-heading text-lg mb-4">Feeds</h2>
            {blogDetails?.feeds?.map((feed, i) => (
              <div key={i} className="flex gap-4 mb-4">
                <Image
                  src={feed.img || "/placeholder.jpg"}
                  alt={feed.title}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <p className="text-sm font-medium text-heading">{feed.title}</p>
              </div>
            ))}
          </div>

          <div className="bg-secondary p-4 rounded-xl shadow-sm">
            <h2 className="font-bold text-heading text-lg mb-4">Tags</h2>
            {/* Future tag rendering logic */}
          </div>

          <div className="bg-secondary p-4 rounded-xl shadow-sm">
            <h2 className="font-bold text-heading text-lg mb-4">Follow Us</h2>
            <div className="flex gap-4">
              <button className="text-primary">LinkedIn</button>
              <button className="text-primary">Instagram</button>
              <button className="text-primary">Facebook</button>
              <button className="text-primary">Twitter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
