import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";


const Footer = () => {
  const [copyName, setCopyName] = useState<string>();
  const params = useParams();
  useEffect(() => {
    const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
    return setCopyName(slug);
  }, [params]);
  return (
    <div>
      <footer className="bg-[#21232a] text-white px-14 py-8 bottom-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col">
          <div>
            <ul className=" flex md:flex-row flex-col gap-4">
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <p className="capitalize">
              &copy; {new Date().getFullYear()}{" "}
              {!!copyName ? copyName : "Temapmail-email"}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
