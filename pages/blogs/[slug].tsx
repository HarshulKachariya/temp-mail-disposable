import Link from "next/link";
import React, { useMemo, useEffect, useState } from "react";
import { blogs } from "@/utils/data";
import { useParams } from "next/navigation";

import SquareAds from "@/components/Ads/SquareAds";
import { useRouter } from "next/router";
import Head from "next/head";

interface Blog {
  id: number;
  title: string;
  content: any;
  description: string;
}

const ComingSoon = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [randomBlogs, setRandomBlogs] = useState<Blog[]>([]);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentBlogId < 14) {
        router.push(`/blogs/${currentBlogId + 1}`);
      } else {
        // Redirect to privacy policy page after the last blog
        router.push("/privacy-policy");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentBlogId, router]);

  useMemo(() => {
    if (slug) {
      const foundBlog = blogs.find((blog) => blog.id === Number(slug.slug));
      setBlog(foundBlog || null);
    }

    // Randomly select 5 blogs
    const shuffledBlogs = [...blogs].sort(() => 0.5 - Math.random());
    setRandomBlogs(shuffledBlogs.slice(0, 5));
  }, [slug]);

  if (slug && !blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        {/* Dynamic Meta Tags for the Current Blog Post */}
        <title>{blog?.title}</title>
        <meta name="description" content={blog?.description} />

        <meta property="og:title" content={blog?.title} />
        <meta property="og:description" content={blog?.content} />
        <meta
          property="og:url"
          content={`https://tempmail-email.com/blogs/${window.location.pathname
            .split("/")
            .pop()}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Your Blog Name" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog?.title} />
        <meta name="twitter:description" content={blog?.content} />
        <meta
          name="twitter:url"
          content={`https://tempmail-email.com/blogs/${window.location.pathname
            .split("/")
            .pop()}`}
        />

        <link
          rel="canonical"
          href={`https://tempmail-email.com/blogs/${window.location.pathname
            .split("/")
            .pop()}`}
        />

        <meta name="author" content="Tempmail-email.com" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "${blog?.title} | TempMail-email.com",
              "description": "TempMail-email.com's ${blog?.content}",
              "url": "https://www.tempmail-email.com/blogs/${window.location.pathname
                .split("/")
                .pop()}",
              "mainEntity": {
                "@type": "WebSite",
                "name": "TempMail-email.com",
                "url": "https://www.tempmail-email.com"
              }
            }
          `}
        </script>
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 bg-gray-100">
        <div className="lg:col-span-3  space-y-4">
          <div className="w-full ">
            <SquareAds id={`1726286290822-0`} type="sequre-new" />
          </div>
          <div className="w-full  ">
            <SquareAds id={`1726290027315-0`} type="sequre-new" />{" "}
          </div>
          <div className="w-full   ">
            <SquareAds id={`1726290016924-0`} type="sequre-new" />{" "}
          </div>
          <div className="w-full  ">
            <SquareAds id={`1726290000960-0`} type="sequre-new" />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-6 flex px-6 md:px-10 md:h-full flex-col gap-10 overflowx-x-hidden   font-bold bg-white">
          <Link
            href="/pages/temp mail"
            className="text-lg flex w-full justify-start font-semibold mt-5"
          >
            {"<"} GO BACK
          </Link>
          <div className="space-y-10 ">
            {slug ? (
              <div className=" flex flex-col gap-4">
                <div className="w-full  ">
                  <SquareAds id={`1726287410753-0`} type="sequre-new" />
                </div>
                {blog?.description && (
                  <div
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                    className="text-gray-800"
                  />
                )}
                <div className="w-full ">
                  <SquareAds id={`1727111401755-0`} type="sequre-new" />{" "}
                </div>
              </div>
            ) : (
              randomBlogs.map((blog: Blog) => (
                <div key={blog.id} className=" flex flex-col gap-4">
                  <h1 className="text-3xl text-black">{blog.title}</h1>
                  <div className="w-full">
                    <SquareAds id={`1727111417691-0`} type="sequre-new" />
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                    className="text-gray-800"
                  />
                  <div className="w-full ">
                    <SquareAds id={`1726287372412-0`} type="sequre-new" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className=" lg:col-span-3  space-y-4 px-3">
          <div className="flex flex-col gap-3">
            <div className="w-full  ">
              <SquareAds id={`1727111433306-0`} type="sequre-new" />
            </div>
            <div className="w-full ">
              <SquareAds id={`1727111443398-0`} type="sequre-new" />
            </div>
            {randomBlogs.map(({ id, title, content }: Blog) => (
              <div
                className="sm:max-w-xl sm:h-44 bg-white  overflow-hidden cursor-pointer sm:p-4 p-3"
                key={id}
              >
                <h2 className="sm:mb-0 md:text-base text-xl sm:text-sm font-semibold text-gray-900 hover:text-emerald-500">
                  {title}
                </h2>
                <p className="text-gray-700 text-sm sm:hidden  md:block !line-clamp-3 overflow-hidden">
                  {content}
                </p>
                <Link
                  href={`/blogs/${id}`}
                  className="text-blue-500 hover:text-zinc-600"
                >
                  Read more...
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full">
            <SquareAds id={`1726289913861-0`} type="sequre-new" />
          </div>
          <div className="w-full  ">
            <SquareAds id={`1727111456818-0`} type="sequre-new" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-full ">
            <SquareAds id={`1726286806414-0`} type="sequre-new" />
          </div>
          <div className="w-full  ">
            <SquareAds id={`1726289885283-0`} type="sequre-new" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
