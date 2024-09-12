import Link from "next/link";
import React, { useMemo, useEffect, useState } from "react";
import { blogs } from "@/utils/data";
import { useParams } from "next/navigation";
import Image from "next/image";
import Ads from "@/components/ads";
import SqureAds from "@/components/squreAds";
import { useRouter } from "next/router";
import MiddleAds from "@/components/middleAds";

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
      const validId = isNaN(id) || id < 1 || id > 14 ? 1 : id;
      setCurrentBlogId(validId);
    };

    updateCurrentBlogId();
    router.events.on("routeChangeComplete", updateCurrentBlogId);

    return () => {
      router.events.off("routeChangeComplete", updateCurrentBlogId);
    };
  }, [router]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (currentBlogId < 14) {
  //       router.push(`/blogs/${currentBlogId + 1}`);
  //     } else {
  //       // Redirect to privacy policy page after the last blog
  //       router.push("/privacy-policy");
  //     }
  //   }, 15000);

  //   return () => clearTimeout(timer);
  // }, [currentBlogId, router]);


  useEffect(() => {
    const timer = setTimeout(() => {
      const nextBlogId = currentBlogId < 6 ? currentBlogId + 1 : 1;

      // Generate the target URL for the next blog
      const targetUrl = `/blogs/${nextBlogId}`;

      // Encode the target URL to mimic Google redirection format
      const encodedUrl = encodeURIComponent(`https://tempmail-email.com${targetUrl}`);

      // Construct the Google-style redirection URL
      const googleRedirectUrl = `https://www.google.com/url?q=${encodedUrl}&sa=D&sntz=1&usg=XYZ`;

      // Redirect the user to the Google-style URL
      router.push(googleRedirectUrl);
    }, 5000);

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
    <div className="grid grid-cols-12 bg-gray-100">
      <div className="col-span-2  ">
        <SqureAds />
      </div>
      <div className="col-span-8 flex px-6 md:px-20 md:h-full flex-col gap-10 justify-center items-center  font-bold bg-white">
        <Link
          href="/pages/temp mail"
          className="text-lg flex w-full justify-start font-semibold mt-5"
        >
          {"<"} GO BACK
        </Link>
        <div className="space-y-10 ">
          {slug ? (
            <div className=" flex flex-col gap-4">
              {blog?.url && (
                <>
                  <Image
                    src={blog.url}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="w-full h-[500px] object-contain sm:object-cover rounded-md "
                  />
                  <SqureAds />
                </>
              )}
              {blog?.description && (
                <div
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                  className="text-gray-800"
                />
              )}
            </div>
          ) : (
            blogs.map((blog: Blog) => (
              <div key={blog.id} className=" flex flex-col gap-4">
                <Image
                  src={blog.url}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded-md "
                />
                <SqureAds />

                <h1 className="text-3xl text-black">{blog.title}</h1>
                <div
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                  className="text-gray-800"
                />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="col-span-2  ">
        <SqureAds />
      </div>
    </div>
  );
};

export default ComingSoon;
