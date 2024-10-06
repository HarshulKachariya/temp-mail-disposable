import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/components/home/home"), {
  loading: () => <></>,
});
const Blogs = dynamic(() => import("@/pages/blogs"), {
  loading: () => <></>,
});
const CopyrightPage = dynamic(
  () => import("@/components/copyrightPage/index"),
  {
    loading: () => <></>,
  }
);
const SquareAds = dynamic(() => import("@/components/Ads/SquareAds"), {
  loading: () => <></>,
});

import { useRouter } from "next/router";

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
  //   }, 10000);

  //   return () => clearTimeout(timer);
  // }, [pathName, router]);

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
