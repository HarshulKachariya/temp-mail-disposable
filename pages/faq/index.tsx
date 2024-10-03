import SquareAds from "@/components/Ads/SquareAds";
import { Metadata } from "next";
import Head from "next/head";

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTitle, setActiveTitle] = useState(false);

  const router = useRouter();
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    setPathName(path);
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pathName === "/faq") {
        router.push("/contact");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [pathName, router]);

  const questionsAndAnswers = [
    {
      question: "What is Temp Mail?",
      answer:
        "Temp Mail is a temporary email service that allows you to receive email at a temporary address. It is ideal for situations where you need a disposable email address to avoid spam or protect your privacy.",
    },
    {
      question: "How does Temp Mail work?",
      answer:
        "Temp Mail generates a temporary email address for you. Any emails sent to this address will appear on our website, allowing you to read and respond to them if necessary. The email address expires after a certain period, or you can delete it manually.",
    },
    {
      question: "Is Temp Mail free to use?",
      answer:
        "Yes, Temp Mail is completely free to use. You can generate and use as many temporary email addresses as you need without any cost.",
    },
    {
      question: "Do I need to register to use Temp Mail?",
      answer:
        "No, you do not need to register or provide any personal information to use Temp Mail. Simply visit our website and start using the service immediately.",
    },
    {
      question: "How long do the temporary email addresses last?",
      answer:
        "The lifespan of a temporary email address varies. Typically, they last for a few hours to a day. However, you can manually delete the email address at any time.",
    },
    {
      question: "Can I send emails from a Temp Mail address?",
      answer:
        "No, Temp Mail is designed for receiving emails only. If you need to send emails, you will need to use a regular email service.",
    },
    {
      question: "Is my privacy protected with Temp Mail?",
      answer:
        "Yes, Temp Mail prioritizes your privacy. We do not store any personal data, and the temporary email addresses are completely anonymous.",
    },
    {
      question:
        "What happens to my emails after the temporary address expires?",
      answer:
        "Once the temporary email address expires, all emails associated with that address are permanently deleted from our servers. There is no way to recover them after deletion.",
    },
    {
      question: "Can I use Temp Mail for account verification on websites?",
      answer:
        "Yes, you can use Temp Mail for account verification on websites that require an email address. However, keep in mind that you won't be able to access the verification email if the temporary address expires before you receive it.",
    },
    {
      question: "Are there any limitations to using Temp Mail?",
      answer:
        "While Temp Mail is a convenient tool, it has limitations. You cannot send emails, and the temporary addresses are not intended for long-term use. Additionally, some websites may block temporary email addresses.",
    },
  ];

  const toggleAnswer = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
    setActiveTitle(true);
  };

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          FAQ | TempMail-email.com - Answers to Your Common Questions
        </title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about TempMail-email.com's temporary email service, usage, features, and security measures."
        />
        <meta
          name="keywords"
          content="FAQ, frequently asked questions, temporary email, disposable email, TempMail-email.com, email privacy, email security"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tempmail-email.com/faq" />
        <meta
          property="og:title"
          content="FAQ | TempMail-email.com - Your Questions Answered"
        />
        <meta
          property="og:description"
          content="Get quick answers to common questions about TempMail-email.com's temporary email service. Learn how to use our platform effectively and securely."
        />
        <meta
          property="og:image"
          content="https://www.tempmail-email.com/faq-og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.tempmail-email.com/faq" />
        <meta
          name="twitter:title"
          content="FAQ | TempMail-email.com - Your Questions Answered"
        />
        <meta
          name="twitter:description"
          content="Get quick answers to common questions about TempMail-email.com's temporary email service. Learn how to use our platform effectively and securely."
        />
        <meta
          name="twitter:image"
          content="https://www.tempmail-email.com/faq-twitter-image.jpg"
        />

        <link rel="canonical" href="https://www.tempmail-email.com/faq" />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": "What is TempMail-email.com?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TempMail-email.com is a temporary email service that provides disposable email addresses for users who want to protect their privacy online."
          }
        }, {
          "@type": "Question",
          "name": "How long do temporary emails last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Temporary emails on TempMail-email.com typically last for 24 hours, after which they are automatically deleted from our system."
          }
        }, {
          "@type": "Question",
          "name": "Is Temp Mail free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Temp Mail is completely free to use. You can generate and use as many temporary email addresses as you need without any cost."
          }
        }, {
          "@type": "Question",
          "name": "Do I need to register to use Temp Mail?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, you do not need to register or provide any personal information to use Temp Mail. Simply visit our website and start using the service immediately."
          }
        }, {
          "@type": "Question",
          "name": "How long do the temporary email addresses last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The lifespan of a temporary email address varies. Typically, they last for a few hours to a day. However, you can manually delete the email address at any time."
          }
        }, {
          "@type": "Question",
          "name": "Can I send emails from a Temp Mail address?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, Temp Mail is designed for receiving emails only. If you need to send emails, you will need to use a regular email service."
          }
        }, {
          "@type": "Question",
          "name": "Is my privacy protected with Temp Mail?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Temp Mail prioritizes your privacy. We do not store any personal data, and the temporary email addresses are completely anonymous."
          }
        }, {
          "@type": "Question",
          "name": "What happens to my emails after the temporary address expires?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once the temporary email address expires, all emails associated with that address are permanently deleted from our servers. There is no way to recover them after deletion."
          }
        }, {
          "@type": "Question",
          "name": "Can I use Temp Mail for account verification on websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can use Temp Mail for account verification on websites that require an email address. However, keep in mind that you won't be able to access the verification email if the temporary address expires before you receive it."
          }
        }, {
          "@type": "Question",
          "name": "Are there any limitations to using Temp Mail?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While Temp Mail is a convenient tool, it has limitations. You cannot send emails, and the temporary addresses are not intended for long-term use. Additionally, some websites may block temporary email addresses."
          }
        }]
      }
    `}
        </script>
      </head>
      <div className="max-w-4xl mx-auto p-6 space-y-4">
        <SquareAds id={`1727114719795-0`} type="sequre-new" />
        <Link href="/pages/temp mail" className="text-lg font-semibold">
          {"<"} GO BACK
        </Link>
        <h1 className="bg-[#21232a] capitalize p-3 rounded-2xl text-white font-mono sm:text-3xl text-xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <SquareAds id={`1727114730161-0`} type="sequre-new" />
        <p className="text-lg text-center mb-4">
          Temporary anonymous email service is specifically designed to protect
          your privacy. This service has appeared relatively recently. Answers
          to frequently asked questions will help you to clarify the service
          offered and to immediately make full use of our convenient and fully
          secure service.
        </p>
        <div className="space-y-6">
          {questionsAndAnswers.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-xl ">
              <h2
                className={`text-xl font-semibold cursor-pointer flex justify-between items-center ${
                  activeIndex === index ? "text-[#00c497]" : ""
                }`}
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
                <span
                  className={`transform transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </h2>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
        <SquareAds id={`1727114738172-0`} type="sequre-new" />
        <div>
          <SquareAds id={`1727114748373-0`} type="sequre-new" />
        </div>
      </div>
    </>
  );
}
