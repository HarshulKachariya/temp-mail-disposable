import React, { useEffect, useRef } from "react";

const MiddleAds: React.FC = () => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-5728499744349930"
      data-ad-slot="6527410868"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default MiddleAds;
