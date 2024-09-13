import Ads from "@/components/ads";
import BlogsCard from "@/components/blog";
import MiddleAds from "@/components/middleAds";
import SqureAds from "@/components/squreAds";
import { blogs } from "@/utils/data";

import Link from "next/link";

const Blogs = () => {
  return (
    <div className="min-h-screen flex  bg-gray-100 py-10 md:px-24 sm:px-14">
      <div>
        <Ads />
      </div>
      <div className="px-4 flex flex-col">
        <h1 className="text-4xl font-bold text-black text-center mb-10">
          Popular Articles
        </h1>
        <div className="flex gap-4">
          <div className="flex flex-col max-w-3xl gap-2">
            {blogs?.map((blog) => (
              <Link href={`/blogs/${blog.id}`} key={blog.id}>
                <BlogsCard {...blog} />
              </Link>
            ))}
            <SqureAds />
          </div>
          <div className="hidden sm:flex flex-col bg-white  md:max-w-xl p-5 gap-3">
            <p className="text-3xl font-bold">Recent Posts</p>
            {blogs.map((i) => (
              <div
                key={i.id}
                className="text-blue-500 underline hover:text-zinc-500 cursor-pointer "
              >
                {i.title}
              </div>
            ))}
            <SqureAds />
          </div>
        </div>
        <MiddleAds />
      </div>
      <div>
        <Ads />
      </div>
    </div>
  );
};

export default Blogs;
