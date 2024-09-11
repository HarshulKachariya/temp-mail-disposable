import Image from "next/image";

const BlogsCard = ({ url, title, content }: any) => {
  return (
    <div className="sm:max-w-xl sm:h-44 bg-white shadow-md rounded-xl overflow-hidden cursor-pointer sm:p-4 ">
      <div className="flex flex-col justify-center items-center gap-1.5 sm:flex-row-reverse">
        <div className="flex justify-center w-full sm:w-1/3">
          <Image
            src={url}
            alt={title}
            width={124}
            height={124}
            className="rounded w-full h-52 sm:w-36 sm:h-36 object-fill"
          />
        </div>
        <div className=" sm:w-2/3 flex justify-center items-start md:items-start flex-col gap-2 p-3">
          <h2 className="sm:mb-0 md:text-base text-xl sm:text-sm font-semibold text-gray-900 hover:text-emerald-500">
            {title}
          </h2>
          <p className="text-gray-700 text-sm sm:hidden   md:block !line-clamp-2 overflow-hidden">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
