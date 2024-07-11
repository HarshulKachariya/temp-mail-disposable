import React, { useEffect, useRef } from "react";

const Ads = ({
  dataAdSlot,
  dataAdFormat,
}: {
  dataAdSlot: any;
  dataAdFormat: any;
}) => {
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
      data-ad-slot={dataAdSlot}
      // data-ad-slot="1183533549"
      data-ad-format={dataAdFormat}
      data-full-width-responsive="true"
    ></ins>
  );
};

export default Ads;
