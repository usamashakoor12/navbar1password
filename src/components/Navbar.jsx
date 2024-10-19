import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleFeaturesDropdown = () =>
    setIsFeaturesDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img
                  className="h-8 w-auto"
                  src="https://1password.com/img/logo.png"
                  alt="1Password"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 items-center">
              <div className="relative">
                <button
                  onClick={toggleFeaturesDropdown}
                  className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  Features
                  <svg
                    className={`w-5 h-5 ml-1 inline-block transition-transform ${
                      isFeaturesDropdownOpen ? "rotate-180" : "rotate-0"
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
                {/* Features Dropdown */}
                {isFeaturesDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    {["Business", "Enterprise", "Developers", "Personal"].map(
                      (index) => (
                        <Link
                          key={index}
                          to={`/${index.toLocaleLowerCase()}`}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                        >
                          {index}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Other links */}
              {["Pricing", "About"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </Link>
              ))}

              {/* Sign In and Get Started buttons */}
              <button
                onClick={() => navigate("/signIn")}
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
              >
                Get Started
              </button>
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
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
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
              {/* Mobile Links */}
              {["Features", "Pricing", "About"].map((item, index) => (
                <div key={index}>
                  {/* Features dropdown for mobile */}
                  {item === "Features" ? (
                    <>
                      <button
                        onClick={toggleFeaturesDropdown}
                        className="w-full text-left text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        {item}
                        <svg
                          className={`w-5 h-5 ml-auto transition-transform ${
                            isFeaturesDropdownOpen ? "rotate-180" : "rotate-0"
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
                      {/* Features Dropdown for Mobile */}
                      {isFeaturesDropdownOpen && (
                        <div className="pl-4 space-y-1">
                          {[
                            "Business",
                            "Enterprise",
                            "Developers",
                            "Personal",
                          ].map((index) => (
                            <Link
                              key={index}
                              to={`/${index.toLocaleLowerCase()}`}
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                            >
                              {index}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                    >
                      {item}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Sign In and Get Started buttons */}
              <button
                onClick={() => navigate("/signin")}
                className="w-full text-left text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="w-full text-left bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 text-center mb-6">
          Secure Your Digital Life
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">
          Manage your passwords, credit cards, and sensitive information with
          top-notch security. Get started with our all-in-one password manager.
        </p>
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </section>

      {/* Features Section with Cards */}
      <section className="bg-white py-12">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">

          {/* Feature Card 1 */}         
          <div className="bg-gray-50 shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Password Vault</h2>
            <p className="text-gray-600">
              Securely store and access all your passwords from one location.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-gray-50 shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Credit Card Manager</h2>
            <p className="text-gray-600">
              Keep your payment details safe and ready for use when needed.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-gray-50 shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Two-Factor Security</h2>
            <p className="text-gray-600">
              Add an extra layer of security with two-factor authentication.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 1Password Clone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Navbar;
