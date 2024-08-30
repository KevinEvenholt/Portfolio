import React from "react";
import Socials from "./socials";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="flex flex-col items-center justify-center space-y-8 mb-8 md:justify-around">
      <div className="w-5/6 border-y border-y-white border-opacity-10 py-10 items-center justify-center ">
        <Socials />
      </div>
      <div className="flex flex-col items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
