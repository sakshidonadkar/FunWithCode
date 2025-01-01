import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-50 text-black px-4 py-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-center">
          <div className="text-3xl font-bold">Welcome to the Fun World</div>
          <div className="text-xl">of Javascript</div>
        </div>
        <ul className="hidden md:flex space-x-6 mt-3 md:mt-0">
          <li className="hover:underline cursor-pointer">
            <a
              href="https://github.com/sakshidonadkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={25} />
            </a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a
              href="https://www.linkedin.com/in/sakshi-donadkar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={25} />
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-white focus:outline-none mt-3 md:mt-0"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-3 px-4 mt-3">
            <li className="hover:underline cursor-pointer">Github</li>
            <li className="hover:underline cursor-pointer">Linkedin</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
