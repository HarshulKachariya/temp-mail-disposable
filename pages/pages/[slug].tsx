import React, { useEffect, useState } from "react";

import HomePage from "@/components/home/home";
import Blogs from "@/pages/blogs";

import CopyrightPage from "@/components/copyrightPage/index";
import Ads from "@/components/ads";
import { useRouter } from "next/router";
import SqureAds from "@/components/Ads/SqureAds";

const MainPage = () => {
  const [pathName, setPathName] = useState("");

  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    setPathName(path);
  }, [router]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (pathName) {
  //       router.push("/blogs/1");
  //     }
  //   }, 20000);

  //   return () => clearTimeout(timer);
  // }, [pathName, router]);

  return (
    <>
      <HomePage />
      <Blogs isShow={false} />
      <div className="mb-7 flex justify-center items-center">
        <div className="w-[75%]">
          <SqureAds id={`1726289913861-0`} type="Display" />
        </div>
      </div>
      <CopyrightPage />

      <SqureAds id={`1726287372412-0`} type="Display" />
    </>
  );
};

export default MainPage;
