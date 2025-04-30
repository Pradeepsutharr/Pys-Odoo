import Image from "next/image";

const BlogCard = ({ title, description, tag, date, imageUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4">
      <div className="relative w-full ">
        <img src={imageUrl} alt={title} className="" />
      </div>

      <div className=" space-y-3 mt-7">
        <div className="flex gap-2 text-sm text-gray-500">
          <span className="bg-gray-100 px-2 py-0.5 rounded">{tag}</span>
          <span className="flex items-center gap-1">📅 {date}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <span className="text-primary font-medium text-sm hover:underline">
          Read More →
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
