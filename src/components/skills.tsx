import React from "react";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoNodejs,
  IoLogoReact,
} from "react-icons/io5";
import { BiLogoTypescript, BiLogoRedux } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <IoLogoJavascript className="text-yellow-500 text-6xl hover:text-yellow-400 transition-transform transform hover:scale-110" />
          <IoLogoHtml5 className="text-orange-600 text-6xl hover:text-orange-500 transition-transform transform hover:scale-110" />
          <IoLogoCss3 className="text-blue-600 text-6xl hover:text-blue-500 transition-transform transform hover:scale-110" />
          <IoLogoSass className="text-pink-500 text-6xl hover:text-pink-400 transition-transform transform hover:scale-110" />
          <IoLogoNodejs className="text-green-500 text-6xl hover:text-green-400 transition-transform transform hover:scale-110" />
          <IoLogoReact className="text-cyan-500 text-6xl hover:text-cyan-400 transition-transform transform hover:scale-110" />
          <BiLogoTypescript className="text-blue-500 text-6xl hover:text-blue-400 transition-transform transform hover:scale-110" />
          <RiNextjsFill className="text-black text-6xl hover:text-gray-900 transition-transform transform hover:scale-110" />
          <RiTailwindCssFill className="text-teal-500 text-6xl hover:text-teal-400 transition-transform transform hover:scale-110" />
          <FaGitAlt className="text-orange-500 text-6xl hover:text-orange-400 transition-transform transform hover:scale-110" />
          <BiLogoRedux className="text-purple-500 text-6xl hover:text-purple-400 transition-transform transform hover:scale-110" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
