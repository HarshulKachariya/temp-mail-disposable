import React, { useEffect, useState } from "react";

import HomePage from "@/components/home/home";
import Blogs from "@/pages/blogs";

import CopyrightPage from "@/components/copyrightPage/index";
import Ads from "@/components/ads";
import { useRouter } from "next/router";
import SquareAds from "@/components/Ads/SquareAds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tempmail",
  description: "TempMail - Get your temporary email address instantly!",
};

const MainPage = () => {
  const [pathName, setPathName] = useState("");

  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    setPathName(path);
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pathName) {
        router.push("/blogs/1");
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [pathName, router]);

  return (
    <>
      <HomePage />
      <Blogs isShow={false} />
      <div className="mb-7 flex justify-center items-center">
        <div className="w-[75%]">
          <SquareAds id={`1727114757466-0`} type="sequre-new" />
        </div>
      </div>
      <CopyrightPage />

      <SquareAds id={`1727114767454-0`} type="sequre-new" />
    </>
  );
};

export default MainPage;
