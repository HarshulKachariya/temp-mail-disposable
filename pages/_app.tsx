import type { AppProps } from "next/app";
import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import Head from "next/head";

const GA_TRACKING_ID = "G-TLSRBXL8TD";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="title" content="TempMail Free Disposable Email Service" />
        <meta
          name="description"
          content="Get instant tempmail with TempMail-email.com. Our free, secure, and anonymous disposable email service protects your privacy and helps you avoid spam."
        />
        <meta
          name="keywords"
          content="TempMail,Temporary email,Disposable email,Anonymous email,Fake email generator,Free TempMail service,Temp email address,TempMail email generator,TempMail for spam protection,Temp email service,Secure temporary email,Temp email without registration,Instant disposable email,Create a temp email address,TempMail for privacy,Disposable email for online shopping,TempMail to avoid spam,Best temporary email service,Temporary email for verification,Free anonymous email,spoofmail,email,mail,fakemail,tempemail"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
