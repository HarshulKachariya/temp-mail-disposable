import Link from "next/link";
import React from "react";

const CommingSoon = () => {
  return (
    <>
      <div className="flex h-screen flex-col-reverse gap-10  justify-center items-center text-zinc-200  font-bold bg-[#21232a]">
        <Link href="/pages/temp mail" className="text-lg font-semibold">
          {"<"} GO BACK
        </Link>
        <p>Click below to back on home page</p>
        <h1 className=" md:text-7xl text-3xl">Comming Soon</h1>
      </div>
    </>
  );
};

export default CommingSoon;
