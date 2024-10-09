import React, { useEffect } from "react";
import Head from "next/head";

interface FooterAdsProps {
  id?: string;
  type?: string;
}

declare global {
  interface Window {
    googletag: any;
  }
}

const FooterAds: React.FC<FooterAdsProps> = ({
  id = "1726289885283-0",
  type = "footer-new",
}) => {
  useEffect(() => {
    const loadGPT = () => {
      const googletag = window.googletag || { cmd: [] };
      googletag.cmd.push(() => {
        googletag
          .defineSlot(
            `/23199569535/${type}`,
            [
              [300, 100],
              [320, 50],
              [320, 100],
              [300, 50],
            ],
            `div-gpt-ad-${id}`
          )
          ?.addService(googletag.pubads());
        googletag.enableServices();
        googletag.display(`div-gpt-ad-${id}`);
      });
    };

    loadGPT();

    // Load GPT script
    // const script = document.createElement("script");
    // script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
    // script.async = true;
    // script.onload = loadGPT;
    // document.head.appendChild(script);

    // return () => {
    //   // Cleanup
    //   document.head.removeChild(script);
    // };
  }, [id, type]);

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
        style={{ minWidth: "300px", minHeight: "50px" }}
      />
    </>
  );
};

export default FooterAds;
