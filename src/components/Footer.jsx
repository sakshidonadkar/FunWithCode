import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {

  return (
    <nav className="bg-slate-50 text-black px-4 py-3 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-center">
          <div className="text-xl">Designed and Developed by ❤️</div>
        </div>
        <div className="absolute right-4 text-sm">
          ©Copyright 2025 
        </div>
      </div>
    </nav>
  );
};

export default Footer;
