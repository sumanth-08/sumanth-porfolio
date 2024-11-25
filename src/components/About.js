import React from "react";
import Image from "../assets/me.jpg";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function About() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4">
        <div className="md:flex items-center justify-between gap-8 h-96 mt-24">
          <div className="">
            <h1 className="text-5xl font-bold tracking-normal text-white">
              Trust me, I'm a <span className="text-blue-900"> Software Engineer.</span>
            </h1>
            <p className="pt-5 text-slate-300 text-justify">
              As a Backend Developer who spends most of my time making servers talk to each other, keeping databases happy, and turning coffee into code. When I’m not building APIs, you can find me
              battling bugs or trying to figure out why my <span className="bg-zinc-600 bg-opacity-30 px-1 rounded-sm font-mono">console.log</span> isn’t working. :)
            </p>
            <p className="text-gray-500 py-2 font-thin">~ Meta AI</p>
            <div className="flex gap-6 py-3 pl-3">
              <a href="https://www.linkedin.com/in/sumanth-r-3b960419a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-slate-400 text-xl hover:text-slate-100" />
              </a>
              <a href="https://github.com/sumanth-08" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-slate-400 text-xl hover:text-slate-100" />
              </a>
              <a href="mailto:mrsumanth1947@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdEmail className="text-slate-400 text-xl hover:text-slate-100" />
              </a>
              <a href="https://www.youtube.com/@creativityinside1947" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-slate-400 text-xl hover:text-slate-100" />
              </a>
            </div>
          </div>
          <img className="w-64 rounded-2xl border border-gray-500 border-opacity-50" src={Image} alt="sumanth" />
        </div>
      </div>
    </>
  );
}

export default About;
