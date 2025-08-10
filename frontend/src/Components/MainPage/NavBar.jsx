import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  // A simple style for the active navigation link
  const activeLinkStyle = {
    color: "#f472b6", // A bright pink to show the active page
    fontWeight: "900",
  };

  return (
    // The main navigation bar container
    <nav
      className="bg-red-900/90 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50"
      style={{ backgroundColor: "#4E71FF" }}
    >
      <div className="w-full mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              {/* Logo icon with updated background color */}
              <span className="inline-flex items-center justify-center w-12 h-12 bg-[#8DD8FF] rounded-2xl shadow-md">
                <span className="text-2xl">❤️</span>
              </span>
              {/* App Name */}
              <span className="text-xl font-bold text-white">BP Predictor</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <NavLink
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact-us"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              Contact
            </NavLink>
          </div>

          {/* "Get Started" Button with fully rounded corners */}
          <div>
            <Link to="/predict">
              <button
                className="px-6 py-2.5 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                style={{ backgroundColor: "#0E2148" }}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
