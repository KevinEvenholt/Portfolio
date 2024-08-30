import React, { useRef } from "react";
import Link from "next/link";
import { Button } from "./button";
import useVisible from "../utils/useVisible";
type Props = {};

const Main = (props: Props) => {
  // const ref1 = useRef<HTMLDivElement>(null);
  // const isVisible = useVisible(ref1);
  // ${isVisible ? "opacity-100" : "opacity-0"}
  return (
    <main
      // ref={ref1}
      className={`
      h-screen flex mt-36 justify-center
      transition-opacity
      ease-in
      duration-700
      opacity-100
      lg:py-20 lg:px-12
    `}
    >
      <div className="flex flex-col w-5/6">
        <p className="text-orange-300 md:text-lg">
          <span className="mr-1 text-orange-300 md:text-lg">01.</span>Hello, my
          name is
        </p>
        <h1 className="text-5xl font-serif md:text-7xl">Kevin Evenholt</h1>
        <p className="text-4xl font-serif md:text-6xl">Frontend Developer.</p>
        <div className="mt-4 md:w-2/3">
          <p className="text-lg opacity-80 font-serif lg:w-1/2">
            I'm a junior frontend developer passionate about transforming ideas
            into engaging user interfaces. I have experience in tackling
            challenging problems and delivering creative solutions that enhance
            user experiences.
          </p>
        </div>
        <Link href="#projects">
          <Button
            secondary
            text="Discover my projects"
            className="mt-14 md:py-4"
            ariaLabel="Discover my projects"
          />
        </Link>
      </div>
    </main>
  );
};

export default Main;
