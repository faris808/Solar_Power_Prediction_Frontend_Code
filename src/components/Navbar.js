import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Menu and Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-lg fixed w-full z-50 top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-white cursor-pointer tracking-wide hover:animate-pulse"
        >
          Solar<span className="text-yellow-500">IQ</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-yellow-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-medium hover:text-yellow-500 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg font-medium hover:text-yellow-500 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/prediction"
            className="text-white text-lg font-medium hover:text-yellow-500 transition duration-300"
          >
            Prediction
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-3xl text-white cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4">
          <ul className="flex flex-col space-y-6 text-center">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="text-white text-lg font-medium hover:text-yellow-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="text-white text-lg font-medium hover:text-yellow-500 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="text-white text-lg font-medium hover:text-yellow-500 transition duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/prediction"
                onClick={toggleMenu}
                className="text-white text-lg font-medium hover:text-yellow-500 transition duration-300"
              >
                Prediction
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
