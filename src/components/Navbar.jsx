/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/Logo.png";
import logo2 from "../assets/react.svg"

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className=" barlow-condensed-regular pt-2 flex overflow-hidden justify-between border-red-500  px-10 bg-[rgba(7,6,6,1)] text-white overflow-x-hidden">
      <Link to={"/"}>
        <img src={logo} alt="" className=" w-[73.16px] h-[29px] " />
      </Link>
      {/* <div className="flex gap-3">
        <p>Solution</p>
        <p>Learn</p>
        <p>About</p>
      </div>
      <div className="flex gap-3">
        <p>Login</p>
        <span>Get Started</span>
      </div> */}
      <div className="sm:flex hidden lg:flex lg:bg-transparent     lg:pr-[200px]  p-2 text-white ">
        <div className="flex justify-between xl:ml-72 gap-20">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2  border-white flex items-center  gap-2"
                : " flex items-center  gap-2"
            }
            to={"/solution"}
          >
            {" "}
            <p>Solution</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
                isActive
            ? "border-b-2  border-white flex items-center  gap-2"
            : " flex items-center  gap-2"
        }
        to={"/learn"}
      >
        {" "}
        <p>Learn</p>
      </NavLink>
      <NavLink
            className={({ isActive }) =>
                isActive
            ? "border-b-2  border-white flex items-center  gap-2"
            : " flex items-center  gap-2"
        }
        to={"/About"}
      >
        {" "}
        <p>About</p>
      </NavLink>
        </div>
     
      </div>
      <div className=" gap-3 md:flex hidden">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2  border-white flex items-center  gap-2"
                : " flex items-center  gap-2"
            }
            to={"/login"}
          >
            {" "}
            <p><b>Login</b></p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
                isActive
            ? "border-b-2  border-white flex items-center  gap-2"
            : " flex items-center  gap-2"
        }
        to={"/get_started"}
      >
        {" "}
        <p className=" bg-green-600 rounded-2xl p-1 px-2"><b>Get Started</b></p>
      </NavLink>
        </div>
      <div className="md:hidden">
        <span
          className="text-white relative z-40"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? (
            <img
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1710170668/space-tour/Group_lvuedt.png"
              alt=""
              className="h-4 w-6  text-3xl right-5 top-3 fixed z-30"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1710170668/space-tour/Group_lvuedt.png"
              alt=""
              className="h-4 w-6 text-3xl right-5 top-3 fixed z-30"
            />
          )}
        </span>
        {show && (
          <div className="  z-30  w-[75%] text-white bg-black  backdrop-blur-md   gap-7 flex flex-col barlow-condensed-regular items-start right-0 text-base  pl-5 pr-20 top-0 pt-20 h-screen absolute ">
            <NavLink className="flex items-center gap-2" to={"solution"}>
              <p>Solution</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"/learn"}>
              <p>Learn</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"/about"}>
              <p>About </p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"login"}>
              <p>Login</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"get-started"}>
              <p className=" bg-green-600 rounded-2xl p-1">Get Started</p>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
