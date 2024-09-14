import React from "react";
import Head from "next/head";

const FooterAds = ({ id, type }: any) => {
  return (
    <>
      <Head>
        <script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/23199569535/footer-new', [[300, 100], [320, 50], [320, 100], [300, 50]], 'div-gpt-ad-1726289885283-0').addService(googletag.pubads());
    googletag.enableServices();`,
          }}
        />
      </Head>
      <div
        id={`div-gpt-ad-1726289885283-0`}
        style={{ minWidth: "300px", minHeight: "50px" }}
      ></div>
    </>
  );
};

export default FooterAds;
