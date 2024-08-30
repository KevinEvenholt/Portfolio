import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

type Props = {
  main?: boolean;
};

function Socials({ main }: Props) {
  return (
    <ul
      className={`${
        main
          ? "fixed left-2 bottom-0 ml-4 text-3xl flex flex-col space-y-4 lg:ml-10"
          : "flex justify-around items-center text-4xl"
      }`}
    >
      <li className="flex flex-col items-center w-16">
        <Link
          href="https://www.linkedin.com/in/kevin-evenholt-518785232/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-orange-300 transition-colors flex flex-col items-center"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
          {!main && <span className="mt-2 text-base text-white">LinkedIn</span>}
        </Link>
      </li>
      {!main && (
        <li className="flex justify-center w-16">
          <div className="h-14 w-0.5 bg-white opacity-10"></div>
        </li>
      )}
      <li className="flex flex-col items-center w-16">
        <Link
          href="https://github.com/KevinEvenholt"
          target="_blank"
          rel="noreferrer"
          className="hover:text-orange-300 transition-colors flex flex-col items-center"
          aria-label="GitHub"
        >
          <FaGithub />
          {!main && <span className="mt-2 text-base text-white">GitHub</span>}
        </Link>
      </li>
      {!main && (
        <li className="flex justify-center w-16">
          <div className="h-14 w-0.5 bg-white opacity-10"></div>
        </li>
      )}
      <li className="flex flex-col items-center w-16">
        <Link
          href="mailto:kevin.evenholt@hotmail.com"
          className="hover:text-orange-300 transition-colors flex flex-col items-center"
          aria-label="Email"
        >
          <IoMailOutline />
          {!main && <span className="mt-2 text-base text-white">Email</span>}
        </Link>
      </li>
      {main && (
        <li className="flex justify-center">
          <div className="h-14 w-0.5 bg-white opacity-10"></div>
        </li>
      )}
    </ul>
  );
}

export default Socials;
