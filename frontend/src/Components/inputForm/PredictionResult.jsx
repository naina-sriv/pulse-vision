import React from 'react';

const PredictionResult = ({ prediction }) => {
  if (prediction === null) return null;

  return (
    <div className="bg-gradient-to-r from-green-900/70 to-emerald-900/70 border-2 border-green-700 rounded-2xl p-6 mb-6 mt-8 animate-fade-in">
      <div className="flex items-center justify-center space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
          <span className="text-2xl text-white animate-pulse">❤️</span>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-200 mb-1">Prediction Complete</h3>
          <p className="text-green-300">Predicted Systolic Blood Pressure</p>
          <p className="text-4xl font-bold text-green-100 mt-2">
            {prediction.toFixed(1)} <span className="text-xl text-green-300">mmHg</span>
          </p>
        </div>
      </div>
      <div className="mt-4 p-4 bg-gray-900/60 rounded-xl">
        <p className="text-sm text-green-300 text-center">
          <strong>Note:</strong> This prediction is for informational purposes only. Please consult with a healthcare professional for medical advice.
        </p>
      </div>
    </div>
  );
};

export default PredictionResult;