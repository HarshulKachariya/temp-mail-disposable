import Link from "next/link";
import React, { useMemo, useState } from "react";
import { blogs } from "@/utils/data";
import { useParams } from "next/navigation";
import Image from "next/image";
import SqureAds from "@/components/squreAds";
import HeaderAds from "@/components/headerAds";

interface Blog {
  id: number;
  title: string;
  url: string;
  description: string;
}

const ComingSoon = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const slug = useParams();

  useMemo(() => {
    if (slug) {
      const foundBlog = blogs.find((blog) => blog.id === Number(slug.slug));
      setBlog(foundBlog || null);
    }
  }, [slug]);

  if (slug && !blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex px-6 md:h-full flex-col gap-10 justify-center items-center text-zinc-200 font-bold bg-[#21232a]">
      <div className=" w-full h-full ">
        <SqureAds />
      </div>
      <Link
        href="/pages/temp mail"
        className="text-lg flex w-full justify-start font-semibold"
      >
        {"<"} GO BACK
      </Link>
      <div className="space-y-10 grid grid-cols-1 md:grid-cols-12 gap-5 w-full h-full justify-between items-center">
        <div className=" col-span-1 md:col-span-2">
          <SqureAds />
        </div>
        <div className="col-span-1 md:col-span-8">
          {slug ? (
            <div className="max-w-4xl flex flex-col gap-4">
              {blog?.url && (
                <>
                  <Image
                    src={blog.url}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="w-full h-[500px] object-contain sm:object-cover rounded-md mb-4"
                  />
                  <div className=" w-full h-full ">
                    <SqureAds />
                  </div>
                </>
              )}
              {blog?.description && (
                <div dangerouslySetInnerHTML={{ __html: blog.description }} />
              )}
              <div className=" w-full h-full">
                <SqureAds />
              </div>
            </div>
          ) : (
            blogs.map((blog: Blog) => (
              <div key={blog.id} className="max-w-4xl flex flex-col gap-4">
                <Image
                  src={blog.url}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h1 className="text-3xl">{blog.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: blog.description }} />
              </div>
            ))
          )}
        </div>
        <div className=" col-span-1 md:col-span-2">
          <SqureAds />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
