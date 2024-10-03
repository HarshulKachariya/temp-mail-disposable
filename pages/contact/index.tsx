import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import axios from "axios";
import SquareAds from "@/components/Ads/SquareAds";

import { useRouter } from "next/router";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "contact",
  description: "TempMail - Get in touch directly",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  reason: Yup.string().required("Please select a reason"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  // const apiUrls = process.env.API_URL;
  const [isSubmitted, setIsSubmmited] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      reason: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(`/api/contact`, values);
        setIsSubmmited(true);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [pathName, setPathName] = useState("");

  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    setPathName(path);
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pathName === "/contact") {
        router.push("/terms-of-service");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [pathName, router]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Contact us | TempMail-email.com - Get in touch instantly</title>
        <meta
          name="description"
          content="get in Touch Instantly TempMail-email.com's temporary email service, usage, features, and security measures."
        />
        <meta
          name="keywords"
          content="conatct us, contact,get in touch directly,contact instantly,  temporary email, disposable email, TempMail-email.com, email privacy, email security"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.tempmail-email.com/contact"
        />
        <meta
          property="og:title"
          content="Conatct | TempMail-email.com - Get in touch instantly"
        />
        <meta
          property="og:description"
          content="Get quick and easy contact us TempMail-email.com's temporary email service. Learn how to use our platform effectively and securely."
        />
        <meta
          property="og:image"
          content="https://www.tempmail-email.com/faq-og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.tempmail-email.com/faq" />
        <meta
          name="twitter:title"
          content="Conatct | TempMail-email.com - Get in touch instantly"
        />
        <meta
          name="twitter:description"
          content="Get quick and easy contact us TempMail-email.com's temporary email service. Learn how to use our platform effectively and securely."
        />
        <meta
          name="twitter:image"
          content="https://www.tempmail-email.com/faq-twitter-image.jpg"
        />

        <link rel="canonical" href="https://www.tempmail-email.com/contact" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Contact us | TempMail-email.com",
              "description": "TempMail-email.com's Contact us is get in touch Instantly withing 24 hours, and ensure the security of our temporary email service.",
              "url": "https://www.tempmail-email.com/contact",
              "mainEntity": {
                "@type": "WebSite",
                "name": "TempMail-email.com",
                "url": "https://www.tempmail-email.com"
              }
            }
          `}
        </script>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-5 gap-3 justify-between items-center md:mx-6">
        <div className="mx-auto w-full min-h-[200px] col-span-1 md:col-span-3">
          <SquareAds id={`1727111501599-0`} type="sequre-new" />
        </div>
        <div className="grid row-span-1 md:col-span-6">
          <SquareAds id={`1727111509816-0`} type="sequre-new" />
          <div className="md:max-w-xl min-h-screen max-w-md mx-auto p-6 bg-white rounded-md shadow-lg  my-5">
            <h1 className="bg-[#21232a]  capitalize p-3 rounded-2xl text-white font-mono sm:text-3xl text-lg font-bold mb-8 text-center">
              Conatct us
            </h1>
            <p className="text-gray-600 mb-6">
              If the answers to common questions and a detailed description on
              the home page about the Temp Mail service do not assist you, let
              us know. Only from your feedback can we provide solutions for
              other users.
            </p>
            <p className="text-gray-600 mb-6">
              If required, we will consult with you at any time of the day. We
              will help to efficiently manage services on offer, to solve
              problems you may experience in receiving emails in the unlikely
              event they occur.
            </p>
            {isSubmitted ? (
              <h1 className="text-2xl font-bold text-green-500 text-center">
                Your request sent sucessfull and we will contact you soon...
              </h1>
            ) : (
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-3 py-2 border ${
                      formik.touched.name && formik.errors.name
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500 mt-1">
                      {formik.errors.name}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-3 py-2 border ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 mt-1">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="reason"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Select reason
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formik.values.reason}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-3 py-2 border ${
                      formik.touched.reason && formik.errors.reason
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">Select a reason</option>
                    <option value="General inqiry">General inqiry</option>
                    <option value="Abuse report">Abuse report</option>
                    <option value="Bug report">Bug report</option>
                    <option value="Feedback / suggestion">
                      Feedback / suggestion
                    </option>
                    <option value="Domain / Email recovery">
                      Domain / Email recovery
                    </option>
                    <option value="Advertising">Advertising</option>
                  </select>
                  {formik.touched.reason && formik.errors.reason && (
                    <div className="text-red-500 mt-1">
                      {formik.errors.reason}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-3 py-2 border ${
                      formik.touched.message && formik.errors.message
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    rows={4}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <div className="text-red-500 mt-1">
                      {formik.errors.message}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 disabled:bg-green-300 focus:ring-green-500"
                  disabled={!formik.isValid || !formik.dirty}
                >
                  Send
                </button>
                <SquareAds id={`1727111522422-0`} type="sequre-new" />
              </form>
            )}
          </div>
          <SquareAds id={`1727111535906-0`} type="sequre-new" />
        </div>
        <div className="mx-auto w-fullh-full col-span-1 md:col-span-3">
          <SquareAds id={`1727114696008-0`} type="sequre-new" />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
