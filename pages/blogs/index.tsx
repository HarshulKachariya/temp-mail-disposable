import dynamic from "next/dynamic";

const BlogsCard = dynamic(() => import("@/components/blog"), {
  loading: () => <></>,
});

import SquareAds from "@/components/Ads/SquareAds";

import { blogs } from "@/utils/data";

import Link from "next/link";

interface BlogsProps {
  isShow?: boolean;
}

const Blogs = ({ isShow = true }: BlogsProps) => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-12 min-h-screen  w-full  bg-gray-100 py-10 ">
      <div className="col-span-3">
        <SquareAds id={`1727111456818-0`} type="sequre-new" />
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
            <SquareAds id={`1727111466235-0`} type="sequre-new" />
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
            <SquareAds id={`1727111466235-0`} type="sequre-new" />
          </div>
        </div>
        <SquareAds id={`1727111484263-0`} type="sequre-new" />
      </div>
      <div className="col-span-3">
        <SquareAds id={`1727111492026-0`} type="sequre-new" />{" "}
      </div>
    </div>
  );
};

export default Blogs;
