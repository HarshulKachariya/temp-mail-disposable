"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const QrCodeIcon = dynamic(() => import("@mui/icons-material/QrCode"), {
  ssr: false,
});
const FileCopyIcon = dynamic(() => import("@mui/icons-material/FileCopy"), {
  ssr: false,
});
const SyncIcon = dynamic(() => import("@mui/icons-material/Sync"), {
  ssr: false,
});
const EditIcon = dynamic(() => import("@mui/icons-material/Edit"), {
  ssr: false,
});
const DeleteIcon = dynamic(() => import("@mui/icons-material/Delete"), {
  ssr: false,
});
const Button = dynamic(() => import("../button"), { ssr: false });
const QRCode = dynamic(() => import("react-qr-code"), { ssr: false });
const MailBox = dynamic(() => import("../mailbox/mailbox"), { ssr: false });

import axiosInstance from "@/common/axiosInstance";
const CustomButton = dynamic(() => import("../custombuttons"), { ssr: false });

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [isMailboxLoading, setIsMailboxLoading] = useState(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>("Loading...");
  const effectRan = useRef(false);

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
      const { email } = response.data;
      setEmail(email);
      setIsMailboxLoading(false);
      setIsBtnLoading(false);
    } catch (error) {
      setEmail("Loading...");
      setIsBtnLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (effectRan.current === false) {
      if (email === "Loading...") {
        setTimeout(() => {
          handleFetchEmails();
        });
        setIsMailboxLoading(false);
      }
      effectRan.current = true;

      return () => {
        effectRan.current = false;
      };
    }
  }, []);

  return (
    <>
      <div className="bg-[#21232a] md:p-7 p-5 flex flex-col justify-center items-center w-full md:h-2/3 h-3/4">
        <div className="max-w-[556px]">
          <div className="flex flex-col gap-4 justify-center items-center text-white mx-auto md:p-7 p-5 max-w-[556px] h-full border-2 border-zinc-700 rounded-md border-dashed">
            <span className="text-xl font-bold">
              Your Temporary Email Address
            </span>
            <div className="flex w-full md:flex-row flex-col gap-5 md:justify-center relative">
              <div className="flex md:flex-row flex-col w-full text-white">
                <input
                  type="text"
                  readOnly
                  value={!isMailboxLoading ? email : "Loading..."}
                  ref={emailRef}
                  className="p-4 md:w-5/6 w-full h-full text-xl bg-[#2B2C33] rounded-full outline-none"
                />
                <div className="md:flex flex flex-row gap-5 md:absolute md:-right-2 md:-top-4 mt-5 w-full">
                  <Button
                    name="qrcode"
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-zinc-600 gap-1 rounded-full md:w-12 w-full h-12 p-3 items-center justify-center flex md:absolute md:right-24"
                  >
                    <QrCodeIcon className="text-white text-2xl" />
                    <span className="md:hidden">QR Code</span>
                  </Button>

                  <Button
                    name="copy"
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
          <p className=" mt-5 text-zinc-500 text-center">
            Forget about spam, advertising mailings, hacking and attacking
            robots. Keep your real mailbox clean and secure. Temp Mail provides
            temporary, secure, anonymous, free, disposable email address.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-row gap-4 md:gap-7 shadow-2xl justify-center items-center p-7 bg-white text-black">
        <CustomButton onClick={copyEmailToClipboard} name="copy">
          <FileCopyIcon />
          Copy
        </CustomButton>
        <CustomButton disabled={isBtnLoading} onClick={() => {}} name="refresh">
          <SyncIcon />
          Refresh
        </CustomButton>
        <CustomButton onClick={() => handleFetchEmails()} name="change">
          <EditIcon />
          Change
        </CustomButton>
        <CustomButton onClick={() => handleFetchEmails()} name="delete">
          <DeleteIcon />
          Delete
        </CustomButton>
      </div>
      <MailBox email={email} />
    </>
  );
};

export default Home;
