import React from 'react';
import { Link } from 'react-router-dom';

export default function Body() {
  return (
    // Main container for the body content
    <div className="flex-grow flex items-center justify-center text-white" style={{ backgroundColor: "#52357B" }}>
      <div className="text-center px-4">
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Predict Your Blood Pressure
          </span>
        </h1>
        
        {/* Subheading/Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Utilize our advanced AI to get an instant prediction of your systolic blood pressure. Just a few health metrics are all we need to get started.
        </p>
        
        {/* Call-to-action Button */}
        <Link to="/check">
          <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            Get Your Prediction Now
          </button>
        </Link>
        
      </div>
    </div>
  );
}
