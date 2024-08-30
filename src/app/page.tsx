"use client";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/header";
import About from "@/components/about";
import Contact from "@/components/contact";
import Socials from "@/components/socials";
import Main from "@/components/main";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

type Props = {};

const Page = (props: Props) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const footerElement = document.querySelector("footer");
    if (footerElement) {
      footerObserver.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        footerObserver.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <aside
        className={`hidden transition-opacity duration-400 md:block ${
          isFooterVisible ? "opacity-0" : "opacity-100"
        }`}
      >
        <Socials main />
      </aside>
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
