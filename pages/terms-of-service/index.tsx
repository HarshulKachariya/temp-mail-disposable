import Ads from "@/components/ads";

import SqureAds from "@/components/squreAds";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="px-6">
      <div className=" w-full h-full ">
        <Ads />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-12 gap-5 w-full h-full justify-between items-center">
        <div className=" col-span-1 md:col-span-3 ">
          <SqureAds />
        </div>
        <div className="col-span-1 md:col-span-6 mx-auto p-6  space-y-4">
          <Link href="/pages/temp mail" className="text-lg font-semibold">
            {"<"} GO BACK
          </Link>
          <h1 className="bg-[#21232a] p-3 rounded-2xl text-white font-mono sm:text-3xl text-lg font-bold mb-8 text-center">
            TERMS OF SERVICE
          </h1>
          <p>
            Following<Link href="/privacy-policy-app">Privacy policy</Link>{" "}
            refers to Tempmail-email free to use web site and browser
            extensions, hereinafter “Tempmail-email” , based on url
            https://tempmail-email.com and TempMail-email on web.
          </p>
          <p>
            Tempmail-email are also committed to protecting your privacy. Please
            read our privacy policy following this link
            https://tempmail-email.com/privacy-policy.
          </p>
          <p>
            By using this service, you agree to the following terms.
            Tempmail-email makes no warranty of reliability or suitability for
            any purpose. Its availability or existence may be removed at any
            time by its owners. Any email sent through Tempmail-email may or may
            not be available for viewing, may be altered, and is immediately
            viewable by ANY user of the system. You agree to only access
            Tempmail-email data through the Tempmail-email website.
          </p>
          <p>
            You agree to not use Tempmail-email directly or indirectly for any
            unlawful purpose. You agree that any email you send to
            Tempmail-email or emails you induce other sites/persons to send will
            become public domain once in the Tempmail-email system with no
            expectation of privacy for email content .
          </p>
          <p>
            You agree not to use the public Tempmail-email system to receive,
            store, or view emails containing private or confidential
            information. You understand that Tempmail-email has no control over
            material put into mailboxes.
          </p>
          <p>
            You agree to hold Tempmail-email harmless from any damages caused by
            loss of emails, content within emails, damage to your computer (or
            innocence) from viewing emails, direct or indirect use of this
            system.
          </p>
          <p>
            You agree that you cannot send email using Tempmail-email, only
            receive. Moreover, the Free service handling a couple millions
            emails per hour. Therefore, you agree that emails can be stored up
            to 1-2 hours and the domains may be the subject for change. You
            agree, not use temporary emails for registering important accounts
            or receiving sensitive data. The Tempmail-email , will have no
            ability to restore emails or domains once removed.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-lg font-semibold">
                With Free version of Tempmail-email, you can :
              </h1>
              <ul>
                <li>Get access to free domains list</li>
                <li>Generate a new email address instantly </li>
                <li>Copy to clipboard or using QR-code </li>
                <li>Change email names</li>
                <li>Receive emails and attachments automatically</li>
                <li>Get browser notification of new emails</li>
                <li>Read incoming emails, including attachments</li>
                <li>Quickly delete and/or generate new email addresses</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-lg font-semibold">
                Online<Link href="/privacy-policy-app">Privacy policy</Link>{" "}
                Only
              </h1>
              <p>
                This online
                <Link href="/privacy-policy-app">Privacy policy</Link> applies
                only to information collected through our website and not to
                information collected offline.
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
                <Link href="/privacy-policy-app">Privacy policy</Link> or you
                wish to unsubscribe from our site and services you may contact
                us using the information below or by writing to us at:
                <span>Email: support@tempmail-email.com</span>
                <span>This policy is effective as of 1 Jul 2020</span>
              </p>
            </div>
            <Ads />
          </div>
        </div>
        <div className=" col-span-1 md:col-span-3 ">
          <SqureAds />
          <Ads />
        </div>
      </div>
      <div className=" w-full h-full ">
        <Ads />
      </div>
    </div>
  );
};

export default index;
