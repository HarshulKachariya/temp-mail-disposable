import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta
          name="google-site-verification"
          content="google157ac4885f988124"
        /> */}
        <meta name="google-adsense-account" content="ca-pub-5728499744349930" />
        <meta name="google-adsense-account" content="ca-pub-4884709384818916" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>

        <meta
          name="google-site-verification"
          content="WuFxV91DgUW_CNbRf45kqrU3eFpS49q5qqTBnGLhpCM"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-TLSRBXL8TD`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-TLSRBXL8TD', {
                  page_path: window.location.pathname,
                });
              `,
          }}
        ></script>
        {/*         <meta name="google-adsense-account" content="ca-pub-3938307797483770" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3938307797483770" crossOrigin="anonymous"></script> */}
      </Head>
      <body className="bg-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
