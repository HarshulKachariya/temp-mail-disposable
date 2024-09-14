import React from "react";
import Head from "next/head";

const SqureAds = ({ id, type }: any) => {
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
                googletag.defineSlot('/23199569535/${type}', ['fluid', [300, 250], [250, 250], [336, 280]], ${`div-gpt-ad-${id}`}).addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
              });
            `,
          }}
        />
      </Head>
      <div
        id={`div-gpt-ad-${id}`}
        style={{ minWidth: "250px", minHeight: "250px" }}
      ></div>
    </>
  );
};

export default SqureAds;

// div-gpt-ad-1726286290822-0

{
  /* <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/23199569535/Display', ['fluid', [300, 250], [250, 250], [336, 280]], 'div-gpt-ad-1726286290822-0').addService(googletag.pubads());
    googletag.enableServices();
  });
</script>


<!-- /23199569535/Display -->
<div id='div-gpt-ad-1726286290822-0' style='min-width: 250px; min-height: 250px;'>
  <script>
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1726286290822-0'); });
  </script>
</div> */
}
