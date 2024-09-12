import Ads from "@/components/ads";
import BlogsCard from "@/components/blog";
import MiddleAds from "@/components/middleAds";
import { blogs } from "@/utils/data";

import Link from "next/link";

const Blogs = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10 md:px-24 sm:px-14">
      <div>
        <Ads />
      </div>
      <div className="mx-auto px-4">
        <h1 className="text-4xl font-bold text-black text-center mb-10">
          Popular Articles
        </h1>
        <MiddleAds />
        <div className="md:max-w-6xl grid md:gap-8 sm:gap-5 gap-3 lg:grid-cols-2 sm:grid-cols-1">
          {blogs?.map((blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id}>
              <BlogsCard {...blog} />
            </Link>
          ))}
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
