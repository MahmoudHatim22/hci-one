import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className="header w-full z-10 transition-all duration-300 h-auto">

      <nav className="hidden lg:flex justify-between items-center w-[90%] mx-auto py-4">
        <Link to="/">
          <img className="w-[150px]" src="../../public/images/swaply.png" alt="Logo" />
        </Link>
        <ul className="flex w-[500px] text-lg justify-between px-3">
          <li className="itemNav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-gradient bg-clip-text text-transparent font-bold" : "itemNav"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="itemNav">
            <NavLink
              to="/Explore"
              className={({ isActive }) =>
                isActive ? "bg-gradient bg-clip-text text-transparent font-bold" : "itemNav"
              }
            >
              Explore
            </NavLink>
          </li>
          <li className="itemNav">
            <NavLink
              to="/Notes"
              className={({ isActive }) =>
                isActive ? "bg-gradient bg-clip-text text-transparent font-bold" : "itemNav"
              }
            >
              Notes
            </NavLink>
          </li>
          <li className="itemNav">
            <NavLink
              to="/Support"
              className={({ isActive }) =>
                isActive ? "bg-gradient bg-clip-text text-transparent font-bold" : "itemNav"
              }
            >
              Support
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center">
          <Button to="/Login" className="border-gradient">
            Login
          </Button>
          <Button to="/Signup" className="bg-gradient text-white w-[80px] h-[45px] rounded-md ml-2">
            Sign up
          </Button>
        </div>
      </nav>

      <nav className="flex lg:hidden justify-between items-center w-[100%] mx-auto py-4 px-4 ">
        <Link to="/">
          <img className="w-[150px]" src="../../public/images/swaply.png" alt="Logo" />
        </Link>
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`lg:hidden bg-gray-50 shadow-md rounded-lg px-4 py-6 space-y-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-4">
          <li className="itemNav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient bg-clip-text text-transparent font-bold hover:text-gray-800"
                  : "navLink hover:text-gray-800"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="itemNav">
            <NavLink
              to="/Explore"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient bg-clip-text text-transparent font-bold hover:text-gray-800"
                  : "navLink hover:text-gray-800"
              }
            >
              Explore
            </NavLink>
          </li>
          <li className="itemNav">
            <NavLink
              to="/Notes"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient bg-clip-text text-transparent font-bold hover:text-gray-800"
                  : "navLink hover:text-gray-800"
              }
            >
              Notes
            </NavLink>
          </li>
          <li className="itemNav">
            <NavLink
              to="/Support"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient bg-clip-text text-transparent font-bold hover:text-gray-800"
                  : "navLink hover:text-gray-800"
              }
            >
              Support
            </NavLink>
          </li>
        </ul>
        <div className="flex flex-col items-start space-y-3">
          <Button to="/Login" className="border-gradient-sm w-full text-center">
            Login
          </Button>
          <Button to="/Signup" className="bg-gradient text-white w-full h-[45px] rounded-md text-center">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
