import React, { useEffect } from "react";
import Head from "next/head";

interface MultipleAdsProps {
  id?: string;
}

declare global {
  interface Window {
    googletag: any;
  }
}

const MultipleAds: React.FC<MultipleAdsProps> = ({
  id = "1722957281574-0",
}) => {
  useEffect(() => {
    const loadGPT = () => {
      const googletag = window.googletag || { cmd: [] };

      googletag.cmd.push(() => {
        googletag
          .defineSlot(
            "/23199569535/multiple-new",
            [
              [336, 280],
              [468, 60],
              [320, 480],
              [320, 100],
            ],
            `div-gpt-ad-${id}`
          )
          ?.addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        googletag.display(`div-gpt-ad-${id}`);
      });
    };

    // Load GPT script
    const script = document.createElement("script");
    script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
    script.async = true;
    script.onload = loadGPT;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(script);
    };
  }, [id]);

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.googletag = window.googletag || {cmd: []};
            `,
          }}
        />
      </Head>
      <div
        id={`div-gpt-ad-${id}`}
        style={{ minWidth: "250px", minHeight: "250px" }}
      />
    </>
  );
};

export default MultipleAds;
