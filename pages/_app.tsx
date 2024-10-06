import React from "react";
import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
const GA_TRACKING_ID = "G-TLSRBXL8TD";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
