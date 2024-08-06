import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import Head from "next/head";

const Header = () => {
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
      <div className="bg-[#21232a] p-7 text-white font-mono">
        <div className="logo flex text-2xl flex-row gap-2 font-bold  justify-center items-center">
          <Link href="/pages/temp mail" className="logo flex  flex-row gap-2 ">
            <EmailIcon className="text-3xl" />
            <h1>Temp Mail</h1>
          </Link>
        </div>
        <div id="div-gpt-ad-1722955528138-0" style={{ width: '728px', height: '90px' }}></div>
      </div>
    </>
  );
};

export default Header;
