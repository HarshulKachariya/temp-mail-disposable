import BlogsCard from "@/components/blog";
import SqureAds from "@/components/Ads/SqureAds";

import { blogs } from "@/utils/data";

import Link from "next/link";

interface BlogsProps {
  isShow?: boolean;
}

const Blogs = ({ isShow = true }: BlogsProps) => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-12 min-h-screen  w-full  bg-gray-100 py-10 ">
      <div className="col-span-3">
        <SqureAds id={`1726290000960-0`} type="Display" />
      </div>
      <div className="px-4 flex flex-col col-span-6">
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
            <SqureAds id={`1726286290822-0`} type="Display" />
          </div>
          <div
            className={`hidden ${
              isShow === false && "sm:hidden"
            }  sm:flex flex-col bg-white  md:max-w-xl p-5 gap-3`}
          >
            <p className="text-3xl font-bold">Recent Posts</p>
            {blogs.map((i) => (
              <div
                key={i.id}
                className="text-blue-500 underline hover:text-zinc-500 cursor-pointer "
              >
                {i.title}
              </div>
            ))}
            <SqureAds id={`1726287429838-0`} type="Display" />
          </div>
        </div>
        <SqureAds id={`1726290027315-0`} type="Display" />
      </div>
      <div className="col-span-3">
        <SqureAds id={`1726286806414-0`} type="Display" />{" "}
      </div>
    </div>
  );
};

export default Blogs;
