import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogCard = ({ slug, title, tag, date, imageUrl }) => {
  return (
    <Link href={`/blogs/${slug}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 cursor-pointer">
        <div className="relative w-full ">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="" />
          ) : (
            <Skeleton height={192} />
          )}
        </div>

        <div className=" space-y-5 mt-7">
          <div className="flex gap-2 text-sm text-gray-500">
            <span className="bg-gray-100 px-2 py-0.5 rounded">{tag}</span>
            <span className="flex items-center gap-1">📅 {date}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 capitalize">
            {title}
          </h3>
          {/* <p className=" font-regular text-paragraph line-clamp-3">
            {description}
          </p> */}
          <span className="text-primary font-medium text-sm hover:underline inline-block">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
