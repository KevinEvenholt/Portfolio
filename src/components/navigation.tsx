"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./button";

type Props = {};

const Navigation = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center md:hidden absolute top-8 right-6 z-30"
        aria-label="Open navigation"
      >
        <span
          className={`bg-white block transition-all duration-300 ease-out 
            h-0.5 w-8 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5 mb-0.5"
            }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out 
            h-0.5 w-8 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out 
            h-0.5 w-8 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5 mt-0.5"
            }`}
        ></span>
      </button>
      <nav
        className={`md:flex md:justify-around md:items-end md:space-x-12 md:mr-10 ${
          isOpen
            ? "bg-black z-20 block no-doc-scroll h-screen w-screen fixed top-0 left-0"
            : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 w-screen h-screen mt-28 md:w-full md:h-full md:flex-row md:mt-0 md:space-y-0 md:space-x-4">
          <li>
            <Link href="/" onClick={handleClick}>
              <p className="text-2xl font-medium hover:text-orange-300 md:text-lg">
                <span className="text-lg mr-1 text-orange-300 md:text-sm">
                  01.
                </span>
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={handleClick}>
              <p className="text-2xl font-medium hover:text-orange-300 md:text-lg">
                <span className="text-lg mr-1 text-orange-300 md:text-sm">
                  02.
                </span>
                About
              </p>
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={handleClick}>
              <p className="text-2xl font-medium hover:text-orange-300 md:text-lg">
                <span className="text-lg mr-1 text-orange-300 md:text-sm">
                  03.
                </span>
                My Projects
              </p>
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={handleClick}>
              <p className="text-2xl font-medium hover:text-orange-300 md:text-lg">
                <span className="text-lg mr-1 text-orange-300 md:text-sm">
                  04.
                </span>
                Contact
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/KevinEvenholtCV.pdf"
              target="_blank"
              onClick={handleClick}
            >
              <Button
                secondary
                text="Resumé"
                className="md:text-lg md:px-4 py-2"
                ariaLabel="Download resume"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
