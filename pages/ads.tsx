import React, { useEffect, useRef } from "react";

const Ads: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // if (!document.querySelector('script[data-adsbygoogle-loaded="true"]')) {
    //   const script = document.createElement("script");
    //   script.src =
    //     "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5728499744349930";
    //   script.async = true;
    //   script.setAttribute("data-adsbygoogle-loaded", "true");
    //   document.body.appendChild(script);
    // }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(error);
    }
    {
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5728499744349930"
        data-ad-slot="1183533549"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default Ads;
