import Link from "next/link";
import React, { useEffect, useState } from "react";
import { blogs } from "@/utils/data";
import { useParams } from "next/navigation";

interface Blog {
  id: number;
  title: string;
  description: string;
}

const ComingSoon = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const slug = useParams();

  useEffect(() => {
    if (slug) {
      const foundBlog = blogs.find((blog) => blog.id === Number(slug.slug));
      setBlog(foundBlog || null);
    }
  }, [slug]);

  if (slug && !blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex px-6 md:px-36 md:h-screen flex-col gap-10 justify-center items-center text-zinc-200 font-bold bg-[#21232a]">
      <Link
        href="/pages/temp mail"
        className="text-lg flex w-full justify-start font-semibold"
      >
        {"<"} GO BACK
      </Link>
      {slug ? (
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl">{blog?.title}</h1>
          <p>{blog?.description}</p>
        </div>
      ) : (
        blogs.map((blog: Blog) => (
          <div key={blog.id} className="flex flex-col gap-4">
            <h1 className="text-3xl">{blog.title}</h1>
            <p>{blog.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ComingSoon;
