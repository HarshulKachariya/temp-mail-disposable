import React from "react";
import SqureAds from "../Ads/SqureAds";

const CopyrightPage = () => {
  return (
    <>
      <SqureAds id={`1726286290822-0`} type="Display" />

      <div className="flex flex-col items-center justify-center bg-gray-100 mx-5 mb-5">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Copyright Notice
          </h1>
          <div className="text-gray-700">
            <p className="mb-4">
              &copy; {new Date().getFullYear()} temp-mail. All rights reserved.
            </p>
            <p className="mb-4">
              This website and its content is the property of Temp-mail.
              Unauthorized use and/or duplication of this material without
              express and written permission from this website’s author and/or
              owner is strictly prohibited.
            </p>
            <p className="mb-4">
              Excerpts and links may be used, provided that full and clear
              credit is given to Temp-mail with appropriate and specific
              direction to the original content.
            </p>
            <p className="mb-4">
              For permissions beyond the scope of this license, please contact
              us at{" "}
              <a
                href="mailto:contact@yourcompany.com"
                className="text-blue-500"
              >
                contact@tempmail-email.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyrightPage;
