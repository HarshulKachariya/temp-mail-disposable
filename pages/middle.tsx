import MiddleAds from "@/components/middleAds";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";

const Middle = () => {
  const [pathName, setpathName] = useState("");

  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    setpathName(path);
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pathName === "/middle") {
        router.push("/multiple");
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [pathName, router]);

  return (
    <div>
      <MiddleAds />
    </div>
  );
};

export default Middle;
