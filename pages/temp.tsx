import FooterAds from "@/components/Ads/FooterAds";
import MultipleAds from "@/components/Ads/MultipleAds";
import SquareAds from "@/components/Ads/SquareAds";
import React from "react";

const AdsComponent = () => {
  return (
    <div>
      <SquareAds id={`1726289966999-0`} type="sequre-new" />
      <FooterAds id="1727111595342-0" />
      <MultipleAds id="1727111937849-0" />
    </div>
  );
};

export default AdsComponent;
