import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  function handleOpen() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full bg-[#2C3E50] border-gray-200 transition-all duration-300 ${
          scrolled
            ? "h-18 transition-all ease-in-out"
            : "h-30 pt-7 transition-all ease-in-out"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/">
            <h1 className="text-2xl md:text-4xl self-center font-semibold whitespace-nowrap text-white">
              START FRAMEWORK
            </h1>
          </Link>

          {/* Hamburger icon for small screens */}
          <div
            onClick={handleOpen}
            className="lg:hidden text-white cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>

          {/* Navigation links */}
          <div
            className={`${
              open ? "block" : "hidden"
            } w-full lg:block lg:w-auto text-white`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col lg:flex-row space-y-5 lg:space-y-0 p-4 lg:p-0 mt-4 lg:mt-0 lg:space-x-8 rtl:space-x-reverse bg-[#2C3E50] rounded-lg lg:bg-transparent">
              <li>
                <Link
                  to="/about"
                  className="py-2 px-3 text-2xl text-white rounded-sm hover:bg-[#1ABC9C] hover:rounded-xl"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="py-2 px-3 text-2xl text-white rounded-sm hover:bg-[#1ABC9C] hover:rounded-xl"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="py-2 px-3 text-2xl text-white rounded-sm hover:bg-[#1ABC9C] hover:rounded-xl"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
