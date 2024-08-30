import React, { useEffect, useState } from "react";
import Navigation from "./navigation";
import Image from "next/image";

type Props = {};

export const Header = (props: Props) => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrevScrollPos(window.scrollY);

      const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (prevScrollPos > currentScrollPos) {
          setVisible(true);
        } else {
          setVisible(false);
        }
        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <header
      className={`bg-[#19252b] z-50 sticky top-0 flex justify-center border-b border-b-white border-opacity-10 h-20 transition-transform duration-300 md:justify-between ${
        visible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        width={50}
        height={75}
        className="md:ml-10"
      />
      <Navigation />
    </header>
  );
};
