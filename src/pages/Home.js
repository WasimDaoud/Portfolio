import React from "react";
import "../styles/home.css";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

import img from "../Assets/IMAGES/javascript-backend-development.png";

const Home = () => {
  return (
    <>
      <div className="home w-full">
        <div className="h-[100%] mx-auto max-w-[1380px]">
          {/* container of welcome & image */}
          <div className="flex flex-col md:flex-row h-[100%] w-[100%]">
            <div className="md:w-[50%] md:h-[100%] h-[50%] flex-col justify-center items-center">
              {/* home welcome */}
              <div className="welcome  w-[100%] h-[50%] md:w-[100%] md:h-[50%] flex items-center justify-center text-white">
                <h1 className="lg:text-[45px] md:text-[35px] text-black font-bold text-center text-[35px]">
                  Welcome In
                  <span className="lg:text-[55px] md:text-[45px] text-[40px] mx-3">
                    Wasim
                  </span>
                  Portfolio
                </h1>
              </div>
              {/* arrow container */}
              <div className="flex justify-center w-[100%] h-[50%] ">
                <Link to="/projects" className="relative ">
                  <MdOutlineKeyboardDoubleArrowDown className="arrow text-[60px]" />
                  <button className="home-btn text-white bg-blue-900 absolute top-[65px] right-[-65px] w-[200px] border-[1px] rounded-md p-1 lg:text-[30px] text-[25px] border-white hover:scale-105 duration-500">
                    Projects & Skills
                  </button>
                </Link>
              </div>
            </div>
            {/* home image  */}
            <div className="arrow home-image-container w-[100%] h-[50%] md:w-[50%] md:h-[90%] flex justify-center items-center ">
              <img
                src={img}
                className=" home-image absolute top-[400px] lg:top-[150px] md:top-[300px] lg:right-[100px] md:right-[50px] max-w[70%] max-h-[70%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
