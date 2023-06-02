import React from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { BsYoutube, BsGithub } from "react-icons/bs";

const Project = ({ project }) => {
  return (
    <div className="w-full mx-auto pt-[10px] bg-blue-600">
      {/* project title */}
      <h1 className="text-center text-[40px] font-bold text-white ">
        {`${project.title} `}
        <a href="#demo" className="relative left-[50px]">
          <MdOutlineKeyboardDoubleArrowDown className="arrow text-[60px]" />
        </a>
      </h1>
      {/* demo-section */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-[30px] mb-[15px]">
          {project?.github ? (
            <a
              target="_blank"
              className="text-[20px] hover:scale-105 duration-1000 flex gap-[5px] items-center font-bold mt-[20px] mb-[5px] text-green-900 bg-white p-[5px] border-2 border-green-900 rounded-lg"
              href={`${project?.github}`}
            >
              <BsGithub className="text-green-900 text-[35px]" /> See On GitHub
            </a>
          ) : (
            ""
          )}
          <a
            target="_blank"
            className="text-[20px] hover:scale-105 duration-1000 flex gap-[5px] items-center font-bold mt-[20px] mb-[5px] text-red-900 bg-white p-[5px] border-2 border-red-900 rounded-lg"
            href={`${project?.src}`}
          >
            <BsYoutube className="text-red-900 text-[35px]" /> See On Youtube
          </a>
        </div>

        <div className="w-[100%] h-[700px] flex justify-center">
          <iframe
            width="90%"
            height="100%"
            src={`${project?.src}`}
            title="Blog App Project"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/* details-section */}
      <div className="w-full h-full py-[60px]" id="demo">
        <span className="my-[10px]"></span>
        <div className="flex gap-[10px] justify-center items-start">
          {/* front-end */}
          <ul className="w-[22%] p-[20px] text-center">
            <li className="text-[30px] text-white font-bold">Front End</li>
            {project?.frontEnd?.map((item, index) => (
              <li className=" text-black font-bold text-[25px]" key={index}>
                {index + 1}-{item}
              </li>
            ))}
          </ul>
          {/* back-end */}
          {project?.backEnd ? (
            <ul className="w-[22%] p-[20px] text-center">
              <li className="text-[30px] text-white  font-bold">Back End</li>
              {project?.backEnd?.map((item, index) => (
                <li className=" text-black font-bold text-[25px]" key={index}>
                  {index + 1}-{item}
                </li>
              ))}
            </ul>
          ) : (
            " "
          )}
          {/* Site Capabilities */}
          <ul className="w-[50%] p-[20px] ">
            <li className="text-[30px] font-bold text-white  ">
              Site Capabilities
            </li>
            {project?.description?.map((item, index) => (
              <li
                className=" text-black font-bold text-[25px] border-b-2 border-blue-500"
                key={index}
              >
                {index + 1} - {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
