import React from "react";
import Logo from "../assets/art.jpg";
// import Resume from "../assets/sumanthresume.pdf";

function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-10 bg-neutral-950  backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img className="w-10 md:w-[unset] md:h-12 sm:h-1 rounded-full" src={Logo} alt="sumanth" />
              <span className="text-sm md:text-xl text-white font-bold tracking-wider">SUMANTH</span>
            </div>
            <div className="">
              <a href="https://docs.google.com/document/d/1nR8o245tyWA0xCOwHJnKdGQtRe_uhGx6IvIBOHTr-pM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="bg-neutral-950 backdrop-filter backdrop-blur-lg bg-opacity-20 px-5 py-2 rounded-lg text-sm text-white tracking-wider font-semibold border border-indigo-950">
                  RESUME
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
