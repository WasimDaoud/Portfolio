import React, { useState } from "react";
import "../styles/header.css";
import { RiArrowUpDownLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [barVal, setBarVal] = useState(false);

  const navLinks = [
    {
      id: 1,
      title: "HOME",
      path: "/",
    },
    {
      id: 6,
      title: "PROJECTS",
      path: "/projects",
    },
    {
      id: 2,
      title: "CV",
      path: "cv",
    },
  ];

  return (
    <header className="sticky z-[10000] top-0 bg-white header md:px-4">
      
      <nav className="mx-auto flex items-center justify-between bg-transparent h-[70px] max-w-[1380px] border-b-[2px] border-blue-900">
        <div className="max-h-[70px] max-w-[175px] flex items-center gap-4">
          <div className="max-w-[60px] md:max-w-[70px] max-h-[70px]">
            <Link className=" text-blue-600 p-[5px] text-[35px] font-bold" to="/">
              Wasim
            </Link>
          </div>
        </div>

        <div className="hidden md:flex">
          <ul className="">
            {navLinks.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={(navClass) =>
                  navClass.isActive ? "active px-[15px] text-[20px]" : "px-[15px] text-[20px]"
                }
              >
                {item.title}
              </NavLink>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <RiArrowUpDownLine
            onClick={() => {
              setBarVal(!barVal);
            }}
            className="text-blue-600 mr-2 text-[23px] cursor-pointer md:hidden hover:scale-125 duration-500"
          />

        </div>
      </nav>

      {barVal ? (
        <div className="w-full  md:hidden">
          <ul className="mob-menu py-[30px] flex flex-col items-center gap-[25px]">
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/home">Home</Link>
            </li>
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/cv">CV</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="w-full  md:hidden">
          <ul className="move-up py-[30px] flex flex-col items-center gap-[25px]">
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/home">HOME</Link>
            </li>
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/project">PROJECTS</Link>
            </li>
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/cv">CV</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
