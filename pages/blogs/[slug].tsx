import Link from "next/link";
import React, { useEffect, useState } from "react";
import { blogs } from "@/utils/data";
import { useParams } from "next/navigation";

const ComingSoon = () => {
  const [blog, setBlog] = useState<null | any>(null);
  const { slug } = useParams();

  useEffect(() => {
    const foundBlog = blogs.find((blog) => blog.id === Number(slug));
    setBlog(foundBlog);
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex px-6 md:px-36 h-full flex-col gap-10 justify-center items-center text-zinc-200 font-bold bg-[#21232a]">
      <Link
        href="/pages/temp mail"
        className="text-lg flex w-full justify-start font-semibold"
      >
        {"<"} GO BACK
      </Link>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl">{blog?.title}</h1>
        <p>{blog?.description}</p>
      </div>
    </div>
  );
};

export default ComingSoon;
