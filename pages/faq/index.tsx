import SqureAds from "@/components/Ads/SqureAds";

import Link from "next/link";
import { useRouter } from "next/router";
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
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <SqureAds id={`1726289966999-0`} type="Display" />
      <Link href="/pages/temp mail" className="text-lg font-semibold">
        {"<"} GO BACK
      </Link>
      <h1 className="bg-[#21232a] capitalize p-3 rounded-2xl text-white font-mono sm:text-3xl text-xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>
      <SqureAds id={`1726286290822-0`} type="Display" />
      <p className="text-lg text-center mb-4">
        Temporary anonymous email service is specifically designed to protect
        your privacy. This service has appeared relatively recently. Answers to
        frequently asked questions will help you to clarify the service offered
        and to immediately make full use of our convenient and fully secure
        service.
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
      <SqureAds id={`1726287372412-0`} type="Display" />
      <div>
        <SqureAds id={`1726289913861-0`} type="Display" />
      </div>
    </div>
  );
}
