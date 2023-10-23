import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      {/* <div className="container p-12 flex justify-between"> */}
      <div className="container p-4 md:p-8 flex flex-col md:flex-row justify-between items-center">
        {/* <span className="name-logo">bilal.</span> */}
        <div className="flex items-center">
          <Link href={"https://github.com/dncoyote"} target="_blank" className="name-logo" spy smooth offset={50} duration={500} to="home">
            dncoyote.
          </Link>
          <span className="blink"></span>
        </div>
        
        <div className="social-media-links mt-4 md:mt-0 flex space-x-4 text-center md:text-left">
          <a
            href="https://www.linkedin.com/in/bilal-ahmed-694533218/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/dncoyote"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/dn_coyote"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-500"
          >
            <FaTwitter />
          </a>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
