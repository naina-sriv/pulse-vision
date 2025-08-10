import React from 'react';

const ErrorDisplay = ({ error }) => {
  if (!error) return null;

  return (
    <div className="bg-gradient-to-r from-red-900/70 to-pink-900/70 border-2 border-red-700 rounded-2xl p-6 mb-6 mt-8 animate-shake">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
          <span className="text-white text-xl">⚠️</span>
        </div>
        <div>
          <h4 className="text-red-200 font-bold text-lg">Prediction Error</h4>
          <p className="text-red-300">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;