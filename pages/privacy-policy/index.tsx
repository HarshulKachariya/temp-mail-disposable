import SqureAds from "@/components/Ads/SqureAds";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [pathName, setPathName] = useState("");

  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    setPathName(path);
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pathName === "/privacy-policy") {
        router.push("/terms-of-service");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [pathName, router]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <div className="col-span-3 space-x-4">
        <div className="w-full ">
          <SqureAds id={`1726286290822-0`} type="Display" />
        </div>
        <div className="w-full ">
          <SqureAds id={`1726287451092-0`} type="Display" />
        </div>
        <div className="w-full ">
          <SqureAds id={`1726289966999-0`} type="Display" />
        </div>
      </div>
      <div className="col-span-1 md:col-span-6  mx-auto p-6 space-y-4">
        <Link href="/pages/temp mail" className="text-lg font-semibold">
          {"<"} GO BACK
        </Link>
        <h1 className="bg-[#21232a] capitalize p-3 rounded-2xl text-white font-mono sm:text-3xl text-lg font-bold mb-8 text-center">
          Privacy Policy
        </h1>

        <p>
          Following<Link href="/privacy-policy-app">Privacy policy</Link> refers
          to Tempmail-email free to use web site and browser extensions,
          hereinafter “Tempmail-email” , based on url https://tempmail-email.com
          and TempMail-email on web.
        </p>
        <p>
          <Link href="/privacy-policy-app">Privacy policy</Link> for
          Tempmail-email mobile applications for Android and iOS available here
          https://tempmail-email.com/privacy-policy-app.
        </p>
        <p>
          Tempmail-email are committed to protecting your privacy. We will only
          use the information that we collect lawfully in accordance with the
          General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679).
        </p>
        <p>
          Information is saved for many years on your conventional e-mail. This
          may be exposed to hacking or lost due to failure of service.
        </p>
        <p>
          Using the temporary mail allows you to completely protect your real
          mailbox against the loss of personal information. Your temporary
          e-mail address is completely anonymous. Your details: information
          about your person and users with whom you communicate, IP-address,
          e-mail address are protected and completely confidential.
        </p>
        <div className="w-full ">
          <SqureAds id={`1726289913861-0`} type="Display" />
        </div>
        <p>
          Tempmail-email does not store your IP-address. This means you are
          reliably protected from all unauthorised actions that may endanger
          your information and compromise your privacy. All emails and data
          temporarily stored on our service are permanently deleted after the
          time expired. You can delete your temporary Email address at any time
          using the appropriate button 'Delete' .
        </p>
        <p>
          Your privacy is the highest priority for us. You need not concern
          yourself about your data. We will provide full protection. Access to
          your data will only be provided to you personally and only for the
          lifetime of the temporary email address.
        </p>
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold">
              What does Tempmail-email do?
            </h1>
            <p>
              Our website provides you with a temporary email address that you
              can use to receive emails and get notified of a new emails
              received to this inbox. The user may change addresses instantly
              (“Change” button) and copy it to the clipboard (“Copy” button). QR
              code is available to open the same mailbox ( email address) in
              another web browser. Please note, that Tempmail-email don’t store
              email messages for more than 2 hours.{" "}
            </p>
          </div>
          <div className="w-full ">
            <SqureAds id={`1726287429838-0`} type="Display" />
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold">
              Online<Link href="/privacy-policy-app">Privacy policy</Link> Only
            </h1>
            <p>
              This online<Link href="/privacy-policy-app">Privacy policy</Link>{" "}
              applies only to information collected through our website and not
              to information collected offline.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold">Your Consent</h1>
            <p>
              By using our website, you consent to the Terms of Service and
              Privacy policy.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold">
              Changes to our
              <Link href="/privacy-policy-app">Privacy policy</Link>
            </h1>
            <p>
              If we decide to change our
              <Link href="/privacy-policy-app">Privacy policy</Link>, we will
              post those changes on this page.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold">Contact Us</h1>
            <p className="flex flex-col gap-1">
              If there are any questions regarding this
              <Link href="/privacy-policy-app">Privacy policy</Link> or you wish
              to unsubscribe from our site and services you may contact us using
              the information below or by writing to us at:
              <span>Email: support@tempmail-email.com</span>
              <span>This policy is effective as of 1 Jul 2020</span>
            </p>
            <div className="w-full ">
              <SqureAds id={`1726287410753-0`} type="Display" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 space-x-4">
        <div className="w-full ">
          <SqureAds id={`1726287372412-0`} type="Display" />
        </div>
        <div className="w-full ">
          <SqureAds id={`1726286806414-0`} type="Display" />
        </div>
        <div className="w-full ">
          <SqureAds id={`1726289885283-0`} type="Display" />
        </div>
      </div>
    </div>
  );
};

export default Index;
