import React from "react";

import HomePage from "@/components/home/home";
import Blogs from "@/pages/blogs";

import CopyrightPage from "@/components/copyrightPage/index";


const MainPage = () => {
  return (
    <>
      <HomePage />
      <Blogs />
      <CopyrightPage />
    </>
  );
};

export default MainPage;
