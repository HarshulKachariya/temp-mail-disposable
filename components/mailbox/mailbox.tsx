import Image from "next/image";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MailBox = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTxt, setModalTxt] = useState("Loading...");
  const [countdown, setCountdown] = useState(600); // 10 minutes

  const emails = [
    {
      id: 1,
      subject: "Welcome to Our Service",
      sender: "admin@example.com",
      content: "Thank you for joining our service!",
    },
    {
      id: 2,
      subject: "Your Weekly Update",
      sender: "newsletter@example.com",
      content: "Here is your weekly update.",
    },
    // Add more emails here if needed
  ];

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => setCountdown(countdown - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  const handleMailClick = (content: any) => {
    setModalTxt(content);
    setShowModal(true);
  };

  const modifiedHtmlContent = modalTxt?.replace(
    /<a(?![^>]*target="_blank")/g,
    '<a target="_blank"'
  );

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
        {" "}
        {/* //bg-gray-900 */}
        <div className="bg-white w-[90%] lg:w-[50%] mb-3 rounded-md shadow-md mt-10">
          <div className="bg-[#21232a] flex items-center justify-between p-4 rounded-t">
            <h1 className="text-xl font-bold text-white">Inbox</h1>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={(countdown / 600) * 100}
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
          <ul className="flex flex-col h-96 overflow-y-auto">
            {emails.length > 0 ? (
              emails.map((mail, index) => (
                <li key={index} className="border-b border-gray-200">
                  <button
                    className="flex w-full p-4 text-left"
                    onClick={() => handleMailClick(mail.content)}
                  >
                    <div className="flex-shrink-0">
                      <Image
                        className="h-8 w-8 rounded-full"
                        src="/email.png" // Ensure you have the correct path to your image
                        alt="Email icon"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="ml-3 flex-grow">
                      <p className="text-sm font-semibold text-gray-900">
                        {mail.sender}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {mail.subject}
                      </p>
                    </div>
                  </button>
                </li>
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
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
                <p className="text-white mt-4">Your inbox is empty</p>
                <p className="text-gray-400">Waiting for incoming emails</p>
              </div>
            )}
          </ul>
        </div>
        <div className="flex justify-center items-center flex-col md:w-1/2 px-6 gap-3 text-slate-500">
          <h1 className="text-2xl font-bold">
            What is Disposable Temporary E-mail?
          </h1>

          <p className="text-center">
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

      {showModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl w-full">
              <div className="flex justify-end p-4 border-b">
                <button
                  className="text-red-500 font-bold uppercase text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
              <div className="p-6">
                <div
                  dangerouslySetInnerHTML={{
                    __html: modifiedHtmlContent,
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MailBox;
