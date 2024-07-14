import React, { useEffect, useRef } from "react";

const MultipleAds: React.FC = () => {
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
      data-ad-slot="7648920840"
      data-ad-format="autorelaxed"
    ></ins>
  );
};

export default MultipleAds;
