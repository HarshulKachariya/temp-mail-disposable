import Head from "next/head";
import React from "react";

const MiddleAds: React.FC = () => {
  return (
    <>
      <Head>
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.googletag = window.googletag || {cmd: []};
              googletag.cmd.push(function() {
                googletag.defineSlot('/23199569535/mniddle', [[216, 36], [216, 54]], 'div-gpt-ad-1722957856023-0').addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
              });
            `,
          }}
        />
      </Head>
      <div id='div-gpt-ad-1722957856023-0' style={{ minWidth: "216px", minHeight: "36px" }}></div>
    </>
  );
};

export default MiddleAds;
