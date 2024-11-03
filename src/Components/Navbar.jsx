import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="data:image/png;base64,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"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          React JS
          </span>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg
            className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to="/" className="block py-2 pr-4 pl-3 text-gray-900 rounded md:bg-transparent md:p-0 dark:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/FormHandling" className="block py-2 pr-4 pl-3 text-gray-900 rounded md:bg-transparent md:p-0 dark:text-white">
              FormHandling
              </Link>
            </li>
            <li>
              <Link  to="/Cards" className="block py-2 pr-4 pl-3 text-gray-900 rounded md:bg-transparent md:p-0 dark:text-white">
              Cards
              </Link>
            </li>
            <li>
              <Link to="/Axios" className="block py-2 pr-4 pl-3 text-gray-900 rounded md:bg-transparent md:p-0 dark:text-white">
              Axios
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
