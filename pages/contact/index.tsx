import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import axiosInstance from "@/common/axiosInstance";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  reason: Yup.string().required("Please select a reason"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const [isSubmitted, setIsSubmmited] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      reason: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      try {
        axios.post("/api/contact", values);
        setIsSubmmited(true);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="md:max-w-xl min-h-screen max-w-md mx-auto p-6 bg-white rounded-md shadow-lg  my-5">
      <h1 className="bg-[#21232a]  capitalize p-3 rounded-2xl text-white font-mono sm:text-3xl text-lg font-bold mb-8 text-center">
        Conatct us
      </h1>
      <p className="text-gray-600 mb-6">
        If the answers to common questions and a detailed description on the
        home page about the Temp Mail service do not assist you, let us know.
        Only from your feedback can we provide solutions for other users.
      </p>
      <p className="text-gray-600 mb-6">
        If required, we will consult with you at any time of the day. We will
        help to efficiently manage services on offer, to solve problems you may
        experience in receiving emails in the unlikely event they occur.
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
              <div className="text-red-500 mt-1">{formik.errors.name}</div>
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
              <div className="text-red-500 mt-1">{formik.errors.email}</div>
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
              <div className="text-red-500 mt-1">{formik.errors.reason}</div>
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
              <div className="text-red-500 mt-1">{formik.errors.message}</div>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 disabled:bg-green-300 focus:ring-green-500"
            disabled={!formik.isValid || !formik.dirty}
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
