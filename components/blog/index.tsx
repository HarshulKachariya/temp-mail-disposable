import Image from "next/image";

const BlogsCard = ({ url, title, content }: any) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer p-4">
      <div className="flex gap-1.5 flex-row-reverse">
        <div className="flex justify-center w-1/3">
          <Image
            src={url}
            alt={title}
            width={124}
            height={124}
            className="rounded"
          />
        </div>
        <div className="w-2/3 flex flex-col gap-2">
          <h2 className="md:text-base text-sm font-semibold text-gray-900 hover:text-emerald-500">
            {title}
          </h2>
          <p className="text-gray-700 text-sm sm:hidden hidden md:block">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
