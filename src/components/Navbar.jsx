import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); 
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-500 text-white py-4 fixed top-0 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">Task Manager</Link>
        </h1>

        {/* Menu toggle button for small screens */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:justify-center absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-blue-600 md:bg-transparent z-10 md:z-auto`}
        >
          <div className="space-y-4 md:space-y-0 md:flex md:space-x-8 p-4 md:p-0 font-bold">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="block md:inline-block hover:text-yellow-300"
            >
              Home
            </Link>
            <Link
              to="/todo"
              onClick={handleLinkClick}
              className="block md:inline-block hover:text-yellow-300"
            >
              To Do
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="block md:inline-block hover:text-yellow-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="block md:inline-block hover:text-yellow-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title or description..."
            className="px-3 py-2 rounded w-48 text-black border border-gray-300"
          />
        </div>
      </div>

      {/* Search bar in dropdown for small screens */}
      <div className={`p-4 ${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title or description..."
          className="px-3 py-2 rounded w-full text-black border border-gray-300"
        />
      </div>
    </nav>
  );
};

export default Navbar;
