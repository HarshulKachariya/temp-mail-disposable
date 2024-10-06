import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/email.svg" crossOrigin="anonymous" />

        <title>TempMail - Get your temporary email address instantly!</title>

        <meta
          name="description"
          content="TempMail - Get your temporary email address instantly!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="keywords"
          content="free, temporary, email, disposable, mail, email address"
        />
        <meta name="author" content="Tempmail" />
        <meta
          property="og:title"
          content="Temp Mail - Get Free Temporary Email"
        />
        <meta
          property="og:description"
          content="TempMail provides temporary, secure, anonymous, free, disposable email addresses. No registration required!"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tempmail-email.com/" />
        <meta property="og:site_name" content="Temp Mail" />
        <meta property="og:image" content="/email.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Keep spam out of your mail and stay safe - just use a disposable temporary email address! Protect your personal email address from spam with Tempmail-email"
        />
        <link href="/email.svg" rel="shortcut icon" />
        <link rel="canonical" href="https://tempmail-email.com/" />
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
