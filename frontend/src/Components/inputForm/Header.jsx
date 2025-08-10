import React from 'react';

const Header = () => (
  <div className="text-center mb-12">
    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-pink-700 rounded-full mb-6 shadow-xl">
      <span className="text-4xl text-white animate-pulse">❤️</span>
    </div>
    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
      Blood Pressure Predictor
    </h1>
    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
      Advanced AI-powered prediction system for systolic blood pressure analysis using comprehensive health metrics
    </p>
  </div>
);

export default Header;