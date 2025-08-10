import React from 'react';

const InputField = ({ field, value, onChange }) => (
  <div className="group">
    <label className="block text-sm font-semibold text-gray-200 mb-2 flex items-center space-x-2">
      <span>{field.label}</span>
      {field.unit && <span className="text-gray-400 text-xs">({field.unit})</span>}
    </label>
    <div className="relative">
      {field.options ? (
        <select
          name={field.name}
          value={value}
          onChange={onChange}
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-700 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-900/80 text-gray-100 group-hover:border-purple-400 appearance-none cursor-pointer"
        >
          <option value="">Select...</option>
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="number"
          name={field.name}
          value={value}
          onChange={onChange}
          placeholder={field.placeholder}
          required
          min="0"
          step="0.1"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-700 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-900/80 text-gray-100 group-hover:border-purple-400 placeholder-gray-400"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  </div>
);

export default InputField;