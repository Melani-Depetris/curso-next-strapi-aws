"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "semantic-ui-react";

const JoinLayout = ({ children }) => {
  return (
    <div className="h-screen max-h-screen flex flex-row justify-between">
      <div className="absolute top-0 left-0 w-full flex justify-between p-[15px]">
        <Link href="/">
          <Image src="/images/logo.png" width={200} height={30} alt="logo" />
        </Link>
        <Link href="/">
          <Icon name="cancel" className="font-size-[26px] text-red-700 m-0" />
        </Link>
      </div>
      <div className="w-1/2 flex items-center justify-center ">{children}</div>
      <div className="bg-back-image-join bg-center bg-cover h-screen w-1/2" />
    </div>
  );
};

export default JoinLayout;
