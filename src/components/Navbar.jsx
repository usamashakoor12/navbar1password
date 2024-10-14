import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleFeaturesDropdown = () => {
    setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  className="h-8 w-auto"
                  src="https://1password.com/img/logo.png" 
                  alt="1Password"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {/* Features Dropdown */}
            <div className="relative">
              <button
                onClick={toggleFeaturesDropdown}
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                Features
                <svg
                  className={`w-5 h-5 ml-1 inline-block transition-transform ${
                    isFeaturesDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isFeaturesDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <Link
                    to="/feature1"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Feature 1
                  </Link>
                  <Link
                    to="/feature2"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Feature 2
                  </Link>
                  <Link
                    to="/feature3"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Feature 3
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16m-7 6h7'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Features Dropdown for Mobile */}
            <div>
              <button
                onClick={toggleFeaturesDropdown}
                className="w-full text-left text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                Features
                <svg
                  className={`w-5 h-5 ml-auto transition-transform ${
                    isFeaturesDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isFeaturesDropdownOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/feature1"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Feature 1
                  </Link>
                  <Link
                    to="/feature2"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Feature 2
                  </Link>
                  <Link
                    to="/feature3"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Feature 3
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
