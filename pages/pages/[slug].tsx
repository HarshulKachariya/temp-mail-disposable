import React from "react";

import HomePage from "@/components/home/home";
import Blogs from "@/pages/blogs";

import CopyrightPage from "@/components/copyrightPage/index";
import Ads from "@/components/ads";

const MainPage = () => {
  return (
    <>
      <HomePage />
      <Blogs />
      <div className="  h-32  flex justify-center items-center">
        <div className="w-[75%]">
          <Ads />
        </div>
      </div>
      <CopyrightPage />
    </>
  );
};

export default MainPage;
