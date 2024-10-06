import React, { useEffect, useState } from "react";

import HomePage from "@/components/home/home";
import Blogs from "@/pages/blogs";

import CopyrightPage from "@/components/copyrightPage/index";
import Ads from "@/components/ads";
import { useRouter } from "next/router";
import SquareAds from "@/components/Ads/SquareAds";
import Head from "next/head";

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
      <Head>
        <link rel="icon" href="/email.svg" crossOrigin="anonymous" />

        <title>TempMail - Get your temporary email address instantly!</title>

        <meta
          name="description"
          content="TempMail - Get your temporary email address instantly!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="keywords"
          content="free, temporary, email, disposable, mail, email address"
        />
        <meta name="author" content="Tempmail" />
        <meta
          property="og:title"
          content="Temp Mail - Get Free Temporary Email"
        />
        <meta
          property="og:description"
          content="TempMail provides temporary, secure, anonymous, free, disposable email addresses. No registration required!"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tempmail-email.com/" />
        <meta property="og:site_name" content="Temp Mail" />
        <meta property="og:image" content="/email.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Keep spam out of your mail and stay safe - just use a disposable temporary email address! Protect your personal email address from spam with Tempmail-email"
        />
        <link href="/email.svg" rel="shortcut icon" />
        <link rel="canonical" href="https://tempmail-email.com/" />
      </Head>
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
