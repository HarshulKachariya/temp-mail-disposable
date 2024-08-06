import Head from "next/head";
import React from "react";

const MultipleAds: React.FC = () => {
  return (
    <>
      <Head>
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.googletag = window.googletag || {cmd: []};
              googletag.cmd.push(function() {
                googletag.defineSlot('/23199569535/multiple1', [[336, 280], [468, 60], [320, 480], [320, 100]], 'div-gpt-ad-1722957281574-0').addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
              });
            `,
          }}
        />
      </Head>
      <div>

        <div id="div-gpt-ad-1722957281574-0" style={{ width: '336px', height: '280px' }}></div>
      </div>
    </>
  );
};

export default MultipleAds;
