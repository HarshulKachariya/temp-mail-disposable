import React from "react";
import Header from "../../components/header";
import HomePage from "@/components/home/home";
import Blogs from "@/pages/blogs";
import Footer from "@/components/copyrightPage/index";

const MainPage = () => {
  return (
    <>
      <HomePage />
      <Blogs />
    </>
  );
};

export default MainPage;
