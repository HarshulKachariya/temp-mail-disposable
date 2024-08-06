import React from "react";
import Head from "next/head";

const SqureAds: React.FC = () => {

  return (
    <>
      <Head>
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.googletag = window.googletag || {cmd: []};
              googletag.cmd.push(function() {
                googletag.defineSlot('/23199569535/footer', [250, 250], 'div-gpt-ad-1722956656352-0').addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
              });
            `,
          }}
        />
      </Head>
      <div id="div-gpt-ad-1722956656352-0" style={{ width: '250px', height: '250px' }}></div>
    </>
  );
};

export default SqureAds;
