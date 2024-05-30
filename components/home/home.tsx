"use client";

import QrCodeIcon from "@mui/icons-material/QrCode";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SyncIcon from "@mui/icons-material/Sync";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Button from "../button";
import QRCode from "react-qr-code";

import { errorHandler, successHandler } from "@/common/appHandler";
import axiosInstance from "@/common/axiosInstance";

const MailBox = dynamic(() => import("../mailbox/mailbox"), { ssr: false });
// const Blogs = dynamic(() => import("../blogs"), { ssr: true });

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>("");

  const copyEmailToClipboard = useCallback(() => {
    if (emailRef.current) {
      emailRef.current.select();
      emailRef.current.setSelectionRange(0, 999);
      window.navigator.clipboard.writeText(email);
    }
  }, [email]);

  const handleFetchEmails = async () => {
    try {
      const response = await axiosInstance.get("/new");
      const res = successHandler(response);
      return setEmail(res.data.email);
    } catch (error) {
      return errorHandler(error);
    }
  };

  useEffect(() => {
    handleFetchEmails();
  }, []);

  return (
    <>
      <div className="bg-[#21232a] md:p-7 p-5 flex flex-col justify-center items-center w-full md:h-2/3 h-3/4">
        <div className="max-w-[556px] w-full h-full">
          <div className="flex flex-col gap-4 justify-center items-center mx-auto md:p-7 p-5 max-w-[556px] h-full border-2 border-zinc-700 rounded-md border-dashed">
            <span className="text-xl font-bold">
              Your Temporary Email Address
            </span>
            <div className="flex w-full md:flex-row flex-col gap-5 md:justify-center relative">
              <div className="flex md:flex-row flex-col w-full">
                <input
                  type="text"
                  readOnly
                  value={email}
                  ref={emailRef}
                  className="p-4 md:w-5/6 w-full h-full text-xl bg-[#2B2C33] rounded-full outline-none"
                />
                <div className="md:flex flex flex-row gap-5 md:absolute md:-right-2 md:-top-4 mt-5 w-full">
                  <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-zinc-600 gap-1 rounded-full md:w-12 w-full h-12 p-3 items-center justify-center flex md:absolute md:right-24"
                  >
                    <QrCodeIcon className="text-white text-2xl" />
                    <span className="md:hidden">QR Code</span>
                  </Button>

                  <Button
                    onClick={copyEmailToClipboard}
                    className="bg-emerald-500 hover:bg-zinc-500 gap-1 rounded-full md:w-12 w-full h-12 p-3 items-center justify-center flex md:absolute md:right-7"
                  >
                    <FileCopyIcon className="text-white text-2xl" />
                    <span className="md:hidden">Copy</span>
                  </Button>
                </div>
                <div
                  className={`${
                    isOpen ? "bg-white p-3 rounded-md h-46 w-46" : "hidden"
                  } absolute top-32 left-2 md:top-16 md:left-72`}
                >
                  <QRCode
                    size={256}
                    className={`${isOpen ? "h-40 w-40" : "hidden"}`}
                    value={email}
                    viewBox={`0 0 256 256`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-5">
            <p className="text-zinc-500 text-center">
              Forget about spam, advertising mailings, hacking and attacking
              robots. Keep your real mailbox clean and secure. Temp Mail
              provides temporary, secure, anonymous, free, disposable email
              address.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-row gap-4 md:gap-7 shadow-2xl justify-center items-center p-7 bg-white text-black">
        <Button
          onClick={copyEmailToClipboard}
          className="flex gap-1 font-semibold px-7 py-3 shadow-lg bg-slate-100 hover:bg-emerald-500"
        >
          <FileCopyIcon />
          Copy
        </Button>
        <Button
          onClick={handleFetchEmails}
          className="flex gap-1 font-light px-7 py-3 shadow-lg bg-slate-100 hover:bg-emerald-500"
        >
          <SyncIcon />
          Refresh
        </Button>
        <Button
          onClick={handleFetchEmails}
          className="flex gap-1 font-semibold px-7 py-3 shadow-lg bg-slate-100 hover:bg-emerald-500"
        >
          <EditIcon />
          Change
        </Button>
        <Button
          onClick={handleFetchEmails}
          className="flex gap-1 font-semibold px-7 py-3 shadow-lg bg-slate-100 hover:bg-emerald-500"
        >
          <DeleteIcon />
          Delete
        </Button>
      </div>
      <MailBox email={email} />
    </>
  );
};

export default Home;
