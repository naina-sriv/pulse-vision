import React from 'react';

const InfoCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-4">
        <span className="text-xl text-white">🧪</span>
      </div>
      <h3 className="font-bold text-gray-100 mb-2">AI-Powered Analysis</h3>
      <p className="text-gray-300 text-sm">
        Advanced machine learning algorithms analyze your health metrics for accurate predictions.
      </p>
    </div>
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="w-12 h-12 bg-purple-700 rounded-xl flex items-center justify-center mb-4">
        <span className="text-xl text-white">❤️</span>
      </div>
      <h3 className="font-bold text-gray-100 mb-2">Health Monitoring</h3>
      <p className="text-gray-300 text-sm">
        Comprehensive assessment of cardiovascular risk factors and health indicators.
      </p>
    </div>
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="w-12 h-12 bg-pink-700 rounded-xl flex items-center justify-center mb-4">
        <span className="text-xl text-white">📊</span>
      </div>
      <h3 className="font-bold text-gray-100 mb-2">Instant Results</h3>
      <p className="text-gray-300 text-sm">
        Get immediate blood pressure predictions with detailed analysis and recommendations.
      </p>
    </div>
  </div>
);

export default InfoCards;