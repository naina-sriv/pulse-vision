import React from 'react';
import InputField from './InputField';

const HealthAssessmentForm = ({ formData, handleChange, handleSubmit, isLoading }) => {
  const inputFields = [
    { name: "age", label: "👤 Age", placeholder: "Enter your age", unit: "years" },
    { name: "sex", label: "⚧ Sex", placeholder: "0 for Female, 1 for Male", unit: "", options: [{ value: "0", label: "Female" }, { value: "1", label: "Male" }] },
    { name: "total_cholesterol", label: "🧪 Total Cholesterol", placeholder: "Enter total cholesterol", unit: "mg/dL" },
    { name: "ldl", label: "💧 LDL Cholesterol", placeholder: "Enter LDL cholesterol", unit: "mg/dL" },
    { name: "hdl", label: "💧 HDL Cholesterol", placeholder: "Enter HDL cholesterol", unit: "mg/dL" },
    { name: "smoking", label: "🚬 Smoking Status", placeholder: "0 for No, 1 for Yes", unit: "", options: [{ value: "0", label: "No" }, { value: "1", label: "Yes" }] },
    { name: "diabetes", label: "💉 Diabetes Status", placeholder: "0 for No, 1 for Yes", unit: "", options: [{ value: "0", label: "No" }, { value: "1", label: "Yes" }] },
  ];

  return (
    <div className="bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 p-6 rounded-t-3xl">
        <div className="flex items-center justify-center space-x-3">
          <span className="text-3xl animate-bounce">📊</span>
          <h2 className="text-2xl font-bold text-white">Health Assessment Form</h2>
        </div>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {inputFields.map((field) => (
            <InputField
              key={field.name}
              field={field}
              value={formData[field.name]}
              onChange={handleChange}
            />
          ))}
        </div>
        <div className="flex justify-center mb-6">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="group relative px-12 py-4 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-700 via-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center space-x-3">
              {isLoading ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <span className="text-xl">📊</span>
                  <span>Predict Blood Pressure</span>
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthAssessmentForm;