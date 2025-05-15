// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import Link from "next/link";
// import Image from "next/image";
// import { useBlogs } from "@/context/blogContext";
// import parse from "html-react-parser";

// const BlogDetails = ({ isLoading, blog }) => {
//   const router = useRouter();
//   const { slug } = router.query;

//   const [blogDetails, setBlogDetails] = useState(null);
//   const [isloading, setIsLoading] = useState(true);

//   const { blogs, loading } = useBlogs();

//   useEffect(() => {
//     if (!slug) return;
//     axios
//       .get(`https://backend.pysquad.com/api/v1/blogs/${slug}/`)
//       .then((res) => {
//         setBlogDetails(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setIsLoading(false);
//       });
//   }, [slug]);

//   console.log(blogDetails, "-----");

//   const renderHTMLWithCode = (htmlContent) => {
//     return parse(htmlContent, {
//       replace: (node) => {
//         if (node.name === "pre" && node.children?.[0]?.data) {
//           const rawCode = node.children[0].data;

//           const classAttr = node.attribs?.class || "";
//           const languageMatch = classAttr.match(/language-(\w+)/);
//           const language = languageMatch ? languageMatch[1] : "text";

//           // return <CodeBlock code={rawCode} language={language} />;
//         }
//       },
//     });
//   };

//   if (isloading || !blogDetails) {
//     return (
//       <div className="container py-20">
//         <Skeleton baseColor="#E6EBFB" height={50} count={1} />
//         <Skeleton baseColor="#E6EBFB" height={300} />
//         <Skeleton baseColor="#E6EBFB" />
//       </div>
//     );
//   }

//   return (
//     <div className="container py-10">
//       <div className="flex flex-col lg:flex-row gap-10">
//         <div className="col-12 lg:col-8 bg-white rounded-xl shadow-sm">
//           {isLoading ? (
//             <Skeleton className="w-full h-[300px] rounded-t-xl" />
//           ) : (
//             <Image
//               src={blogDetails.bg_image}
//               alt="Blog Banner"
//               width={1140}
//               height={300}
//               className="w-full h-auto rounded-t-xl"
//             />
//           )}

//           {/* Blog Info */}
//           <div className="p-4 space-y-3">
//             {isLoading ? (
//               <>
//                 <Skeleton className="h-8 w-3/4" />
//                 <Skeleton className="h-5 w-1/4" />
//               </>
//             ) : (
//               <>
//                 <h1 className="text-2xl text-heading font-bold">
//                   {blog?.title}
//                 </h1>
//                 <p className="text-sm text-paragraph font-regular">
//                   {blogDetails?.modified} | {blogDetails?.read_time}
//                 </p>
//               </>
//             )}
//           </div>

//           <div className="p-4 space-y-4 text-paragraph font-regular">
//             {/* {isLoading
//               ? Array(5)
//                   .fill(null)
//                   .map((_, i) => <Skeleton key={i} className="h-4 w-full" />)
//               : blogDetails?.content?.map((para, i) => <p key={i}>{para}</p>)} */}

//             {renderHTMLWithCode(blogDetails.content)}
//           </div>
//         </div>

//         <div className="col-12 lg:col-4 space-y-6">
//           <div className="bg-secondary p-4 rounded-xl shadow-sm">
//             <h2 className="font-bold text-heading text-lg mb-4">Feeds</h2>
//             {blogDetails?.feeds?.map((feed, i) => (
//               <div key={i} className="flex gap-4 mb-4">
//                 <Image
//                   src={feed.img || "/placeholder.jpg"}
//                   alt={feed.title}
//                   width={80}
//                   height={80}
//                   className="rounded-md"
//                 />
//                 <p className="text-sm font-medium text-heading">{feed.title}</p>
//               </div>
//             ))}
//           </div>

//           {/* Tags Section */}
//           <div className="bg-secondary p-4 rounded-xl shadow-sm">
//             <h2 className="font-bold text-heading text-lg mb-4">Tags</h2>
//             {/* <div className="flex flex-wrap gap-2">
//               {blogDetails?.tags?.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="bg-white text-primary border border-primary px-3 py-1 rounded-full text-sm"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div> */}
//           </div>

//           {/* Follow Us Section */}
//           <div className="bg-secondary p-4 rounded-xl shadow-sm">
//             <h2 className="font-bold text-heading text-lg mb-4">Follow Us</h2>
//             <div className="flex gap-4">
//               <button className="text-primary">LinkedIn</button>
//               <button className="text-primary">Instagram</button>
//               <button className="text-primary">Facebook</button>
//               <button className="text-primary">Twitter</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import { useBlogs } from "@/context/blogContext";
import parse, { domToReact } from "html-react-parser";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import { FiCopy } from "react-icons/fi";

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
            <div className="relative mb-4 group">
              <CopyToClipboard text={rawCode}>
                <button className="absolute top-2 right-2 p-1 rounded bg-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiCopy />
                </button>
              </CopyToClipboard>
              <SyntaxHighlighter
                language={language}
                style={materialLight}
                customStyle={{
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  fontSize: "0.875rem",
                }}
              >
                {rawCode}
              </SyntaxHighlighter>
            </div>
          );
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
            {/* <div className="flex flex-wrap gap-2">
              {blogDetails?.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white text-primary border border-primary px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div> */}
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
