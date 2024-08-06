import Head from "next/head";
import React from "react";

const HeaderAds: React.FC = () => {
 
  return (
    <>
    <Head>
      <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
      <script
          dangerouslySetInnerHTML={{
            __html: `
              window.googletag = window.googletag || {cmd: []};
              googletag.cmd.push(function() {
                googletag.defineSlot('/23199569535/Header-ads', [728, 90], 'div-gpt-ad-1722955528138-0').addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
              });
            `,
          }}
        />
    </Head>
    <div id="div-gpt-ad-1722955528138-0" style={{ width: '728px', height: '90px' }}></div>

  </>
  );
};

export default HeaderAds;
