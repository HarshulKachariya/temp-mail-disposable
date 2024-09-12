import Link from "next/link";
import React, { useMemo, useEffect, useState } from "react";
import { blogs } from "@/utils/data";
import { useParams } from "next/navigation";
import Image from "next/image";
import Ads from "@/components/ads";
import SqureAds from "@/components/squreAds";
import { useRouter } from "next/router";

interface Blog {
  id: number;
  title: string;
  url: string;
  description: string;
}

const ComingSoon = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const slug = useParams();
  const router = useRouter();
  const [currentBlogId, setCurrentBlogId] = useState(1);

  useEffect(() => {
    const updateCurrentBlogId = () => {
      const path = window.location.pathname;
      const id = parseInt(path.split("/").pop() || "1", 10);
      const validId = isNaN(id) || id < 1 || id > 6 ? 1 : id;
      setCurrentBlogId(validId);
    };

    // Update currentBlogId when the component mounts or the route changes
    updateCurrentBlogId();

    // Set up a listener for route changes
    router.events.on("routeChangeComplete", updateCurrentBlogId);

    return () => {
      router.events.off("routeChangeComplete", updateCurrentBlogId);
    };
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextBlogId = currentBlogId < 6 ? currentBlogId + 1 : 1;
      router.push(`/blogs/${nextBlogId}`);
    }, 15000);

    return () => clearTimeout(timer);
  }, [currentBlogId, router]);

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
    <>
      <Ads />

      <div className="flex px-6 md:px-36  md:h-full flex-col gap-10 justify-center items-center text-zinc-200 font-bold bg-[#21232a]">
        <Link
          href="/pages/temp mail"
          className="text-lg flex w-full justify-start font-semibold"
        >
          {"<"} GO BACK
        </Link>
        <div className="space-y-10">
          <Ads />

          {slug ? (
            <div className="max-w-4xl flex flex-col gap-4">
              {blog?.url && (
                <>
                  <Ads />

                  <Image
                    src={blog.url}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="w-full h-[500px] object-contain sm:object-cover rounded-md mb-4"
                  />
                  <SqureAds />
                </>
              )}
              {blog?.description && (
                <div dangerouslySetInnerHTML={{ __html: blog.description }} />
              )}
              <SqureAds />
            </div>
          ) : (
            blogs.map((blog: Blog) => (
              <div key={blog.id} className="max-w-4xl flex flex-col gap-4">
                <Ads />

                <Image
                  src={blog.url}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h1 className="text-3xl">{blog.title}</h1>
                <Ads />

                <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                <Ads />
              </div>
            ))
          )}
        </div>
        <Ads />
      </div>
    </>
  );
};

export default ComingSoon;
