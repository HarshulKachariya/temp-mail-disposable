import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Document() {
  const [dynamicKeyword, setDynamicKeyword] = useState("temp mail");

  useEffect(() => {
    const path = window.location.pathname;
    setDynamicKeyword(path);
  }, []);

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/email.svg" crossOrigin="anonymous" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`TempMail-email.com | Free Disposable Email Service - ${dynamicKeyword}`}</title>

        <meta
          name="description"
          content={`Get instant ${dynamicKeyword} with TempMail-email.com. Our free, secure, and anonymous disposable email service protects your privacy and helps you avoid spam.`}
        />

        <meta
          name="keywords"
          content={`tempmail, ${dynamicKeyword}, disposable email, anonymous email, temporary email address, spam protection, privacy tool`}
        />

        <meta name="author" content="TempMail-email.com" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.tempmail-email.com/pages/${encodeURIComponent(
            dynamicKeyword
          )}`}
        />
        <meta
          property="og:title"
          content={`TempMail-email.com | ${dynamicKeyword} Generator`}
        />
        <meta
          property="og:description"
          content={`Generate ${dynamicKeyword} instantly with TempMail-email.com. Protect your inbox and privacy with our free disposable email service.`}
        />
        <meta property="og:image" content="/email.svg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content={`https://www.tempmail-email.com/pages/${encodeURIComponent(
            dynamicKeyword
          )}`}
        />
        <meta
          name="twitter:title"
          content={`TempMail-email.com | ${dynamicKeyword} Generator`}
        />
        <meta
          name="twitter:description"
          content={`Generate ${dynamicKeyword} instantly with TempMail-email.com. Protect your inbox and privacy with our free disposable email service.`}
        />
        <meta name="twitter:image" content="/email.svg" />

        <link
          rel="canonical"
          href={`https://www.tempmail-email.com/pages/${encodeURIComponent(
            dynamicKeyword
          )}`}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `TempMail-email.com - ${dynamicKeyword}`,
            url: `https://www.tempmail-email.com/pages/${encodeURIComponent(
              dynamicKeyword
            )}`,
            description: `Generate ${dynamicKeyword} instantly with TempMail-email.com. Our free, secure, and anonymous disposable email service protects your privacy and helps you avoid spam.`,
            mainEntity: {
              "@type": "WebApplication",
              name: "TempMail-email.com",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
              },
            },
          })}
        </script>
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
