// pages/blogs.js
import Image from "next/image";
import { blogs } from "@/utils/data";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10 md:px-24 sm:px-14  ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-black text-center mb-10">
          Popular Articles
        </h1>
        <div className="grid md:gap-8 sm:gap-5 gap-3 lg:grid-cols-2 sm:grid-cols-1 ">
          {blogs.map((blog) => (
            <Link href={blog.articleUrl}>
              <div
                key={blog.id}
                className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer p-4"
              >
                {/* <div className=" flex flex-col justify-between h-full"> */}
                <div className="flex gap-1.5 flex-row-reverse ">
                  <div className="flex  justify-center  w-1/3">
                    <Image
                      src={blog.url}
                      alt={blog.title}
                      width={124}
                      height={124}
                      className="rounded"
                    />
                  </div>
                  <div className="w-2/3 flex flex-col gap-2">
                    <h2 className="md:text-base text-sm font-semibold  text-gray-900 hover:text-emerald-500 ">
                      {blog.title}
                    </h2>
                    <p className="text-gray-700 text-sm sm:hidden hidden md:block">
                      {blog.content}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
