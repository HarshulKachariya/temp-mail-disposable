import MultipleAds from "@/components/multipleAds";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const Multiple = () => {
  const [pathName, setPathName] = useState("");

  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    setPathName(path);
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pathName === "/multiple") {
        router.push("/squre");
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [pathName, router]);
  return (
    <div>
      <MultipleAds />
    </div>
  );
};

export default Multiple;
