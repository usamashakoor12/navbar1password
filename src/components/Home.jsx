import React, { useState } from 'react';

function Home() {
  // Dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <header className="bg-white shadow p-6 rounded-lg text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            1Password-like Dropdown
          </h1>
        </header>
        
        <div className="relative mt-6">
          {/* Dropdown Button */}
          <button
            onClick={toggleDropdown}
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            Select an option
            <svg
              className={`w-5 h-5 ml-2 inline-block transition-transform ${
                isDropdownOpen ? 'rotate-180' : 'rotate-0'
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

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                Option 1
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                Option 2
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                Option 3
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
