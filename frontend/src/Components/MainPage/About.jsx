import React from 'react';
import { Link } from 'react-router-dom';

// Renamed to 'About' to match the file name and import in MainPage.jsx
const About = () => {
  return (
    // Replaced 'min-h-screen' with 'flex-grow' to fix the layout.
    // Removed the light background and adjusted padding.
    <section className="flex-grow text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Updated text colors to be light for the dark theme. */}
        <h2 className="text-4xl font-bold text-center mb-6 text-white">About Our Project</h2>
        <p className="text-lg text-center mb-12 text-gray-300">
          We’re passionate about leveraging technology to provide insightful health predictions.
        </p>

        {/* Updated card styling to match the dark, glassy theme of your app. */}
        <div className="bg-gray-800/80 backdrop-blur-md border border-gray-700 shadow-2xl rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            At <span className="font-semibold text-pink-400">BP Predictor</span>, our goal is to provide an accessible and easy-to-use tool for predicting systolic blood pressure using key health metrics. We believe in empowering individuals with information to better understand their health.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Why We Built This</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Understanding cardiovascular health can be complex. We wanted to create a simple, powerful, and user-focused application that gives instant, AI-driven insights without the complexity.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Our Technology</h3>
          <p className="text-gray-300 leading-relaxed">
            This application is built with modern web technologies and powered by a machine learning model trained to identify patterns in health data. We are constantly working to improve the accuracy and user experience of our platform.
          </p>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Have questions or feedback?</p>
          {/* Updated button to match the style of other buttons on your site. */}
          <Link
            to="/contact-us"
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About;
