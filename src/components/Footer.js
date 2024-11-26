import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Footer() {
  let thisYear = new Date().getFullYear();
  return (
    <>
      <footer className="">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between pt-16 pb-2">
            <h1 className="text-slate-300 text-sm tracking-wide">&copy; {thisYear} sumanth | creativity inside</h1>
            <div className="flex gap-1">
              <h1 className="text-slate-300 text-sm tracking-wide">Contribute</h1>
              <a href="https://github.com/sumanth-08/my-porfolio" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="text-blue-900 text-xs mt-1" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
