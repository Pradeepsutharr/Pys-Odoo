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
    // <section className="relative">
    //   <div className="container ">
    //     <div className="relative mx-auto px-4 py-8 lg:flex lg:gap-49">
    //       <div className="col-12 md:col-12 lg:col-8">
    //         <img
    //           src={blogDeails.bg_image}
    //           alt={blogDeails.title}
    //           className="rounded-xl w-full h-auto mb-6"
    //         />

    //         <h1 className="text-4xl font-bold mb-2">{blogDeails.title}</h1>
    //         <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
    //           📅 {blogDeails.modified} | ⏱ {blogDeails.read_time}
    //         </div>

    //         <div
    //           className="prose prose-lg max-w-none text-gray-800"
    //           dangerouslySetInnerHTML={{ __html: blogDeails.content }}
    //         />
    //       </div>

    //       <div className="col-12 lg:col-4">
    //         <aside className=" mt-12 lg:mt-0 sticky top-20">
    //           <div className=" mb-6 ">
    //             <Link
    //               href="/blogs"
    //               className="text-primary hover:bg-primary hover:text-white font-medium border p-4 rounded-lg block duration-200"
    //             >
    //               View All Blogs
    //             </Link>
    //           </div>

    //           <div className="mb-6 bg-white shadow-md p-3 rounded-lg">
    //             <div className="text-lg font-semibold mb-2">Author</div>
    //             <div className="flex items-center gap-3">
    //               <img
    //                 src={blogDeails.author.image}
    //                 alt="author"
    //                 className="w-10 h-10 rounded-full"
    //               />
    //               <div>
    //                 <h3 className="font-medium">{blogDeails.author.name}</h3>
    //                 <div className="text-sm text-gray-500">
    //                   {blogDeails.author.title}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="mb-6 shadow-md bg-white p-3 rounded-lg">
    //             <h4 className="text-lg font-semibold mb-3">Recent Posts</h4>
    //             <ul className="space-y-2 text-sm text-primary">
    //               {loading ? (
    //                 <Skeleton baseColor="#E6EBFB" count={3} height={100} />
    //               ) : (
    //                 recentBlogs.map((blog) => (
    //                   <li>
    //                     <Link href={`/blogs/${blog.slug}`}>
    //                       <div className="flex items-center justify-between shadow-lg bg-white p-2 rounded-lg hover:translate-y-[-5px] duration-200">
    //                         <div className="blog-image mr-5 rounded-md overflow-hidden">
    //                           <Image
    //                             src={blog.small_image}
    //                             width="130"
    //                             height="90"
    //                           />
    //                         </div>
    //                         <div className="blog-content">
    //                           <h3 className="font-bold text-heading mb-2">
    //                             {blog.title}
    //                           </h3>
    //                           <p className="text-primary font-bold ">
    //                             {blog.modified}
    //                           </p>
    //                         </div>
    //                       </div>
    //                     </Link>
    //                   </li>
    //                 ))
    //               )}
    //             </ul>
    //           </div>
    //         </aside>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section>
      <div className="blog-hero-sec w-full py-20">
        <div className="content-header py-20">
          <h2 className="text-center text-4xl text-white font-bold">
            {blogDeails.title}
          </h2>

          <div className="flex text-white gap-6 justify-center mt-6">
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 14 16"
                fill="none"
              >
                <path
                  d="M3.15078 -0.000391006C3.41641 0.0173173 3.55807 0.158984 3.57578 0.424609V1.69961H8.67578V0.424609C8.69349 0.158984 8.83516 0.0173173 9.10078 -0.000391006C9.36641 0.0173173 9.50807 0.158984 9.52578 0.424609V1.69961H10.3758C10.8539 1.71732 11.2523 1.88555 11.5711 2.2043C11.8898 2.52305 12.0581 2.92148 12.0758 3.39961V11.8996C12.0581 12.3777 11.8898 12.7762 11.5711 13.0949C11.2523 13.4137 10.8539 13.5819 10.3758 13.5996H1.87578C1.39766 13.5819 0.999219 13.4137 0.680469 13.0949C0.361719 12.7762 0.19349 12.3777 0.175781 11.8996V3.39961C0.19349 2.92148 0.361719 2.52305 0.680469 2.2043C0.999219 1.88555 1.39766 1.71732 1.87578 1.69961H2.72578V0.424609C2.74349 0.158984 2.88516 0.0173173 3.15078 -0.000391006ZM11.2258 5.09961H8.46328V7.01211H11.2258V5.09961ZM11.2258 7.86211H8.46328V9.98711H11.2258V7.86211ZM11.2258 10.8371H8.46328V12.7496H10.3758C10.6237 12.7496 10.8273 12.6699 10.9867 12.5105C11.1461 12.3512 11.2258 12.1475 11.2258 11.8996V10.8371ZM7.61328 9.98711V7.86211H4.63828V9.98711H7.61328ZM4.63828 12.7496H7.61328V10.8371H4.63828V12.7496ZM3.78828 9.98711V7.86211H1.02578V9.98711H3.78828ZM1.02578 10.8371V11.8996C1.02578 12.1475 1.10547 12.3512 1.26484 12.5105C1.42422 12.6699 1.62786 12.7496 1.87578 12.7496H3.78828V10.8371H1.02578ZM1.02578 7.01211H3.78828V5.09961H1.02578V7.01211ZM4.63828 7.01211H7.61328V5.09961H4.63828V7.01211ZM10.3758 2.54961H1.87578C1.62786 2.54961 1.42422 2.6293 1.26484 2.78867C1.10547 2.94805 1.02578 3.15169 1.02578 3.39961V4.24961H11.2258V3.39961C11.2258 3.15169 11.1461 2.94805 10.9867 2.78867C10.8273 2.6293 10.6237 2.54961 10.3758 2.54961Z"
                  fill="#ffffff"
                />
              </svg>
              <p className="font-regular text-sm ml-1">{blogDeails.modified}</p>
            </div>

            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M8.34023 8.07461H5.79023C4.46211 8.11003 3.36419 8.57044 2.49648 9.45586C1.61107 10.3236 1.15065 11.4215 1.11523 12.7496C1.11523 12.9975 1.19492 13.2012 1.3543 13.3605C1.51367 13.5199 1.71732 13.5996 1.96523 13.5996H12.1652C12.4132 13.5996 12.6168 13.5199 12.7762 13.3605C12.9355 13.2012 13.0152 12.9975 13.0152 12.7496C12.9798 11.4215 12.5194 10.3236 11.634 9.45586C10.7663 8.57044 9.66836 8.11003 8.34023 8.07461ZM2.4168 12.3246C2.54076 11.4746 2.91263 10.7663 3.53242 10.1996C4.15221 9.65065 4.90482 9.36732 5.79023 9.34961H8.34023C9.22565 9.36732 9.97826 9.65065 10.598 10.1996C11.2178 10.7663 11.5897 11.4746 11.7137 12.3246H2.4168ZM7.06523 6.79961C8.02148 6.7819 8.82721 6.4543 9.48242 5.8168C10.1199 5.16159 10.4475 4.35586 10.4652 3.39961C10.4475 2.44336 10.1199 1.63763 9.48242 0.982422C8.82721 0.344922 8.02148 0.0173173 7.06523 -0.000391006C6.10898 0.0173173 5.30326 0.344922 4.64805 0.982422C4.01055 1.63763 3.68294 2.44336 3.66523 3.39961C3.68294 4.35586 4.01055 5.16159 4.64805 5.8168C5.30326 6.4543 6.10898 6.7819 7.06523 6.79961ZM7.06523 1.27461C7.66732 1.29232 8.17201 1.49596 8.5793 1.88555C8.96888 2.29284 9.17253 2.79753 9.19023 3.39961C9.17253 4.00169 8.96888 4.50638 8.5793 4.91367C8.17201 5.30325 7.66732 5.5069 7.06523 5.52461C6.46315 5.5069 5.95846 5.30325 5.55117 4.91367C5.16159 4.50638 4.95794 4.00169 4.94023 3.39961C4.95794 2.79753 5.16159 2.29284 5.55117 1.88555C5.95846 1.49596 6.46315 1.29232 7.06523 1.27461Z"
                  fill="#ffffff"
                />
              </svg>
              <p className="font-regular text-sm ml-1">
                {blogDeails.read_time}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex">
          <div className="lg:col-8 col-12 ">
            <div className="blog-content bg-gray-200 rounded-lg p-4">
              <div className="blog-image ">
                <Image
                  src={blogDeails.bg_image}
                  width={850}
                  height={100}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-4 col-12">
            <div className="search-blog-inp bg-gray-200 rounded-lg w-full flex p-4">
              <input
                className="bg-gray-100 p-3 w-full"
                type="text"
                placeholder="search blogs"
              />
              <button className="bg-primary py-3 px-4 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                >
                  <path
                    d="M8.49023 0.939453C5.19023 0.939453 2.49023 3.63945 2.49023 6.93945C2.49023 8.33945 2.99023 9.63945 3.79023 10.6395L-0.00976562 14.4395L1.09023 15.5395L4.89023 11.7395C5.89023 12.5395 7.19023 13.0395 8.59023 13.0395C11.8902 13.0395 14.5902 10.3395 14.5902 7.03945C14.5902 3.73945 11.7902 0.939453 8.49023 0.939453ZM8.49023 11.4395C5.99023 11.4395 3.99023 9.43945 3.99023 6.93945C3.99023 4.43945 5.99023 2.43945 8.49023 2.43945C10.9902 2.43945 12.9902 4.43945 12.9902 6.93945C12.9902 9.43945 10.9902 11.4395 8.49023 11.4395Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
