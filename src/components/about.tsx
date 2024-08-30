import Image from "next/image";
import React, { useRef } from "react";
import Skills from "./skills";
import useVisible from "../utils/useVisible";

const About = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(ref1);

  return (
    <section
      id="about"
      ref={ref1}
      className={`
        container mx-auto p-4 space-y-10
        transition-opacity
        ease-in
        duration-700
        ${isVisible ? "opacity-100" : "opacity-0"}
        lg:py-20 lg:px-12 md:px-8
      `}
    >
      <div className="flex items-center">
        <h2 id="h2" className="text-4xl font-serif tracking-wide md:text-6xl">
          <span className="text-base mr-2 text-orange-300">02.</span>
          About Me
        </h2>
        <div className="flex-grow h-0.5 bg-orange-300 ml-4 lg:ml-6 md:w-48 lg:w-60"></div>
      </div>
      <div className="md:flex md:flex-row-reverse md:justify-between lg:gap-16 lg:items-center">
        <Image
          src="/profile.jpeg"
          alt="Profile picture"
          width={350}
          height={350}
          className="rounded-lg mb-4 lg:mb-0 md:w-64 md:h-64 lg:w-96 lg:h-96 lg:shadow-lg"
        />
        <div className="md:w-2/5 md:mt-10 lg:w-1/2 space-y-4 lg:space-y-6">
          <p className="text-xl font-serif leading-relaxed md:text-2xl md:leading-snug">
            I’m a dedicated frontend developer with a passion for creating
            visually stunning and highly functional websites. My work is all
            about crafting immersive digital experiences that captivate users
            and leave a lasting impact.
          </p>
          <p className="text-lg leading-relaxed md:leading-snug">
            With a solid expertise in React, Next.js, and Tailwind CSS, I bring
            design concepts to life through clean, efficient code. I’m always on
            the lookout for new technologies to keep my skillset sharp and stay
            ahead in the fast-evolving world of web development.
          </p>
        </div>
      </div>
      <div className="bg-gray-700 p-8 rounded-lg shadow-xl md:mt-12 border border-gray-500">
        <h3 className="text-2xl font-bold mb-6 text-orange-300 tracking-wide">
          Past Experience
        </h3>
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white">
            Frontend Developer Intern at Momang
          </h4>
          <p className="text-lg leading-relaxed text-gray-300">
            During my internship at Momang, I played a key role in developing a
            SaaS product that enhances the workflows of consulting companies. I
            collaborated closely with senior developers to refine the user
            interface, troubleshoot frontend issues, and ensure cross-browser
            compatibility.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Notable achievements include implementing a platform-wide
            spellchecking solution and significantly improving loading times by
            50% through optimizing key features into a separate Next.js project.
          </p>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default About;
