import SqureAds from "@/components/squreAds";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Squre = () => {
  const [pathName, setPathName] = useState("");

  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    setPathName(path);
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pathName === "/squre") {
        router.push("/");
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [pathName, router]);

  return (
    <div className="w-[400px] h-[400px] bg-black">
      <SqureAds />
    </div>
  );
};

export default Squre;
//landscap w-[160px] h-[600px]
