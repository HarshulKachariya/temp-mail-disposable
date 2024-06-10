import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/email.svg" crossOrigin="anonymous" />

        <title>
          TempMail - Get your temporary and disposable email address instantly!
        </title>

        <meta
          name="description"
          content="TempMail - Get your temporary email address instantly!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="tempmail, temporary email, disposable email, spoof mail, temp email, etc."
        />
        <meta name="author" content="Tempmail email" />
        <meta
          property="og:title"
          content="TempMail email - Free Temporary Email"
        />
        <meta
          property="og:description"
          content="TempMail provides temporary, secure, anonymous, free, disposable email addresses. No registration required!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tempmail-email.com" />
        <meta
          name="google-site-verification"
          content="google157ac4885f988124"
        />
        <meta name="google-adsense-account" content="ca-pub-5728499744349930" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5728499744349930"></script>
      </Head>
      <body className="bg-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
