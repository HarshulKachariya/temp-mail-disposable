const BlogsCard = ({ title, content, description }: any) => {
  return (
    <div className="max-w-4xl bg-white  overflow-hidden cursor-pointer p-6 mb-6">
      <h2 className="mb-2 text-2xl font-semibold text-gray-900 hover:text-emerald-500 transition-colors duration-300">
        {title}
      </h2>
      <p className="text-gray-700 text-base mb-4 !line-clamp-5">{content}</p>
      <p className="text-blue-500 hover:text-zinc-600 transition-colors duration-300">
        Read more...
      </p>
    </div>
  );
};

export default BlogsCard;
