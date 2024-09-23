import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";

import axiosInstance from "@/common/axiosInstance";
const Image = dynamic(() => import("next/image"), { ssr: false });

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import Ads from "../ads";
import SqureAds from "../Ads/SquareAds";
import MiddleAds from "../middleAds";

const MailBox = ({ email }: { email: string }) => {
  const [modalTitle, setModalTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalTxt, setModalTxt] = useState("Loading...");
  const [countdown, setCountdown] = useState(10);
  const [mails, setMails] = useState([]);

  const fetchEmailsMessage = async () => {
    try {
      const res = await axiosInstance.get(`/messages?email=${email}`);
      setMails(res.data);
      setCountdown(10);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEmailsMessage();
  }, [email]);

  useEffect(() => {
    const intervalId = setInterval(fetchEmailsMessage, 10000); // Fetch every 10 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [email]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => setCountdown(countdown - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  const handleMailClick = async (id: any, title: any) => {
    try {
      const response = await axiosInstance.get(`/message?id=${id}`);
      setModalTitle(title);
      setModalTxt(response.data);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const formatGmail = (mail: any) => {
    let inputString = mail.from;

    // Remove the surrounding double quotes
    let withoutQuotes = inputString.replace(/"/g, "");

    // Split the string into an array using '<' and '>' as separators
    let parts = withoutQuotes.split("<");

    // Extract the name and email
    let name = parts[0].trim();
    let emails = parts[1] ? parts[1].replace(">", "").trim() : "";
    var data = {
      email: emails,
      name,
    };
    return data;
  };

  const modifiedHtmlContent = modalTxt?.replace(
    /<a(?![^>]*target="_blank")/g,
    '<a target="_blank"'
  );

  const formatTime = (seconds: any) => {
    const secs = seconds;
    return `${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <>
      <div className="flex flex-col  gap-4 items-center justify-center min-h-screen bg-gray-100">
        <div className=" grid grid-cols-1   md:grid-cols-12 gap-4  w-full h-full  justify-between items-center ">
          {/* <div className="md:grid grid-cols-1 md:grid-cols-12 gap-4  w-full h-full  justify-between items-center "> */}
          <div className="w-full h-full   col-span-1 md:col-span-2">
            <SqureAds id={`1726286290822-0`} type="sequre-new" />
          </div>
          <div className="bg-white col-span-1 md:col-span-8 mb-3 rounded-md shadow-md mt-10 sm:mx-6 md:mx-0 mx-4">
            <div className="bg-[#21232a] flex items-center justify-between p-4 rounded-t">
              <h1 className="text-xl font-bold text-white">Inbox</h1>
              <div className="w-12 h-12">
                <CircularProgressbar
                  value={countdown * 10}
                  text={formatTime(countdown)}
                  styles={buildStyles({
                    textSize: "24px",
                    textColor: "white",
                    pathColor: "white",
                    trailColor: "rgba(255, 255, 255, 0.2)",
                  })}
                />
              </div>
            </div>
            <ul className="flex flex-col min-h-96 overflow-y-auto">
              {mails.length > 0 ? (
                mails.map((mail: any, index) => (
                  <li key={index} className="border-b border-gray-200">
                    <button
                      className="flex w-full p-4 text-left"
                      onClick={() => handleMailClick(mail?.id, mail?.subject)}
                    >
                      <div className="flex-shrink-0">
                        <Image
                          className="h-8 w-8 rounded-full"
                          src="/email.png"
                          alt="Email icon"
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="flex w-full justify-between">
                        <div className="min-w-0 px-3 flex-col text-start">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {formatGmail(mail)?.name}
                          </p>
                          <p className="mt-0 truncate text-xs leading-5 text-gray-500">
                            {formatGmail(mail)?.email}
                          </p>
                        </div>
                        <div className="min-w-0 px-3 flex-col text-start">
                          <p className="text-sm font-semibold leading-6 text-gray-900 hidden md:flex">
                            {mail?.subject}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                ))
              ) : (
                <div className="flex flex-col gap-2 items-center justify-center mt-28">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-12 h-12 animate-spin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                    <path
                      fillRule="evenodd"
                      d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                    />
                  </svg>
                  <p className="text-gray-400 mt-4">Your inbox is empty</p>
                  <p className="text-gray-400">Waiting for incoming emails</p>
                </div>
              )}
            </ul>
          </div>
          <div className="w-full h-full   col-span-1 md:col-span-2">
            <SqureAds id={`1726287429838-0`} type="sequre-new" />
          </div>
        </div>
        <SqureAds id={`1726286806414-0`} type="sequre-new" />
        <div className="flex justify-center items-center flex-col lg:w-1/2 md:w-full sm:w-full w-full px-6 gap-3 text-slate-500">
          <h1 className="text-2xl font-bold">
            What is Disposable Temporary E-mail?
          </h1>
          <p className="md:text-center text-start">
            <strong>Disposable email</strong> - is a free email service that
            allows to receive email at a temporary address that self-destructed
            after a certain time elapses. It is also known by names like :
            tempmail, 10minutemail, 10minmail, throwaway email, fake-mail , fake
            email generator, burner mail or trash-mail. Many forums, Wi-Fi
            owners, websites and blogs ask visitors to register before they can
            view content, post comments or download something. Temp-Mail - is
            most advanced throwaway email service that helps you avoid spam and
            stay safe.
          </p>
        </div>
      </div>

      <SqureAds id={`1726287372412-0`} type="sequre-new" />

      {showModal && (
        <>
          <div className="justify-center w-full items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative h-[90%] w-[90%] my-6 mx-auto overflow-hidden">
              <div className="border-0 h-full rounded-lg shadow-lg overflow-hidden relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
                <section className="relative p-6 flex-auto overflow-auto">
                  <div
                    dangerouslySetInnerHTML={{ __html: modifiedHtmlContent }}
                    className="text-black"
                  />
                </section>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default MailBox;
