import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/pages/temp mail");
  }, [router]);

  return <div>Index</div>;
};

export default Index;
