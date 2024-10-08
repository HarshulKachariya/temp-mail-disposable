import React from "react";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const Header = dynamic(() => import("@/components/header"), {
  loading: () => <></>,
});
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <></>,
});

import Head from "next/head";
const GA_TRACKING_ID = "G-TLSRBXL8TD";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/email.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>TempMail - Get Your Temporary Email Address Instantly!</title>
        <meta
          name="description"
          content="TempMail provides secure, anonymous, and disposable email addresses. Protect your inbox from spam - no registration required! and avoid spam with TempMail's free service."
        />
        <meta name="author" content="TempMail" />
        <meta
          name="keywords"
          content="tempmail, email, free email, temp mail, spoof mail, fake mail, temporary email, disposable email, anonymous email, spam protection, email privacy"
        />
        <meta
          property="og:title"
          content="TempMail - Free Temporary Email Service"
        />
        <meta
          property="og:description"
          content="Get a secure, disposable email address instantly. Protect your privacy and avoid spam with TempMail's free service."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tempmail-email.com/pages/temp%20mail"
        />
        <meta property="og:site_name" content="TempMail email" />
        <meta
          property="og:image"
          content="https://tempmail-email.com/email.png"
        />
        <meta property="og:image:alt" content="TempMail logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TempMail - Free Temporary Email Service"
        />
        <meta
          name="twitter:description"
          content="Get a secure, disposable email address instantly. Protect your privacy and avoid spam with TempMail's free service."
        />
        <meta
          name="twitter:image"
          content="https://tempmail-email.com/email.png"
        />
        <link
          rel="canonical"
          href="https://tempmail-email.com/pages/temp%20mail"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
