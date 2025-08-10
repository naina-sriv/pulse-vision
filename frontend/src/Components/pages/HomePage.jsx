import React, { useState } from "react";
import Header from "../inputForm/Header";
import HealthAssessmentForm from "../inputForm/HealthAssessmentForm";
import PredictionResult from "../inputForm/PredictionResult";
import ErrorDisplay from "../inputForm/ErrorDisplay";
import InfoCards from "../inputForm/InfoCards";
import '../../index.css';

const HomePage = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    total_cholesterol: "",
    ldl: "",
    hdl: "",
    smoking: "",
    diabetes: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPrediction(null);
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const mockPrediction = 120 + Math.random() * 40;
      setPrediction(mockPrediction);
    } catch (err) {
      setError("Failed to get a prediction. Please check your inputs.");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden text-gray-100 flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-900/30 to-blue-900/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4 py-8 flex flex-col items-center animate-fade-in">
        <Header />
        <HealthAssessmentForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
        <PredictionResult prediction={prediction} />
        <ErrorDisplay error={error} />
        <InfoCards />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-700 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-700 rounded-full animate-ping opacity-50 delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-pink-700 rounded-full animate-ping opacity-60 delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-indigo-700 rounded-full animate-ping opacity-40 delay-3000"></div>
      </div>

      {/* Custom Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out;
          }
          .animate-shake {
            animation: shake 0.5s ease-in-out;
          }
          .delay-1000 { animation-delay: 1s; }
          .delay-2000 { animation-delay: 2s; }
          .delay-3000 { animation-delay: 3s; }
        `,
        }}
      />
    </div>
  );
};

export default HomePage;