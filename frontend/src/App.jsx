import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/pages/HomePage';
import MainPage from './Components/pages/MainPage';


function App() {
  return (
    <Routes>
      <Route path="/check/*" element={<HomePage />} />
      <Route path="/*" element={<MainPage />} />
      
    </Routes>
  );
}

export default App;