import HeaderAds from "@/components/headerAds";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";

const HAds = () => {
  const [pathName, setpathName] = useState("");

  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    setpathName(path);
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pathName === "/hAds") {
        router.push("/middle");
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [pathName, router]);

  return (
    <div>
      <HeaderAds />
    </div>
  );
};

export default HAds;
