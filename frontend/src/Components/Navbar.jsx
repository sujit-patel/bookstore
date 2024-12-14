import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Search from "./Search";
import ThemeControll from "./ThemeControll";
import Login from "./Login.jsx";

const Navbar = () => {
  const [strick, setStrick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setStrick(true);
      } else {
        setStrick(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItem = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container z-30 rounded-md mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 
        ${
          strick
            ? "shadow-md bg-base-200 duration-300 transition-all ease-in-out"
            : ""
        }`}
    >
      <div className="navbar items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <div className="w-full space-y-2 p-2">
                <div>{navItem}</div>
                <div>
                  <Search></Search>
                </div>
              </div>
            </ul>
          </div>
          <a className="font-bold text-xl">
            Book <span className="text-pink-500">Store </span>
          </a>
        </div>
        <div className="navbar-end items-center space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItem}</ul>
            <Search />
          </div>
          <div>
            <ThemeControll />
          </div>
          <div>
            <a onClick={()=>document.getElementById("my_modal_3").showModal()} className="btn bg-transparent text-pink-500">Login</a>
            <Login></Login>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
