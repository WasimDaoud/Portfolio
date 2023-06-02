import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaPeriscope,
  FaYoutube,
  FaMobileAlt,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io"
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="footer px-4 w-full bg-blue-900 pt-[25px] text-gray-200">
      <div className="max-w-[1380px] mx-auto  pt-[40px] md:h-[300px] min-h-[300px]  text-xl border-t-[3px] flex flex-col justify-between">
        <div className="flex flex-col items-center md:flex-row justify-center gap-[25px]">
          <div className="max-w-[50%] md:max-w-auto ">
            <span className="tasty text-[20px] mr-4">
              <Link to="/">ENG.Wasim Daoud</Link>
            </span>
          </div>

          <div className="min-w-[15%] text-center">
            <div>
              <ul>
                <li className="hover:ml-[5px] duration-500 my-[7px]">
                  <Link to="/home">HOME</Link>
                </li>
                <li className="hover:ml-[5px] duration-500 my-[7px]">
                  <Link to="/projects">PROJECTS</Link>
                </li>
                <li className="hover:ml-[5px] duration-500 my-[7px]">
                  <Link to="/cv">CV</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="min-w-[25%] flex flex-col justify-center items-center gap-[8px]">
            <div className="flex items-center gap-3 md:justify-center">
              <span>
                <FaPeriscope className="text-green-800 text-[25px]" />
              </span>
              <span>Latakia</span>
            </div>
            <div className="flex items-center gap-3 md:justify-center ">
              <span>
                <SiGmail className="text-orange-600 text-[25px]" />
              </span>
              <a target="_blank" href="https://wasimdaoud97@gmail.com">wasimdaoud97@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 md:justify-center">
              <span>
                <FaMobileAlt className="text-blue-900 text-[25px]" />
              </span>
              <div className="flex flex-col justify-center items-center">
                <span>0995510238</span>
                <span>0968823794</span>
              </div>
            </div>
          </div>

          <div className="min-w-[25%] flex flex-col justify-center items-center gap-[8px]">
            <div className="flex items-center gap-3 md:justify-end">
              <span>
                <Link to="/">
                  <IoLogoWhatsapp className="text-green-800 text-[25px]" />
                </Link>
              </span>
              <span>0995510238</span>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <span>
                <Link to="/">
                  <FaYoutube className="text-red-800 text-[25px]" />
                </Link>
              </span>
              <a target="_blank" href="https://www.youtube.com/channel/UCuDUNlSWAgl8hUuUtcNCnsA">My projects on youtube</a>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <span>
                <Link to="/">
                  <FaLinkedin className="text-blue-900 text-[25px]" />
                </Link>
              </span>
              <a  target="_blank" href="https://www.linkedin.com/in/wasim-daoud/">linkedin.com/in/wasim-daoud/</a>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <span>
                <Link to="/">
                  <BsGithub className="text-orange-900 text-[25px]" />
                </Link>
              </span>
              <a  target="_blank" href="https://github.com/WasimDaoud">github.com/WasimDaoud</a>
            </div>
          </div>
        </div>

        <h1 className="text-center text-white   mb-2">
          copyright copyright copyright copyright copyright
        </h1>
      </div>
    </div>
  );
};

export default Footer;
