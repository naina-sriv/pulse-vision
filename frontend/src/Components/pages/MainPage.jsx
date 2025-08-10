import React from "react";
import NavBar from "../MainPage/NavBar";
import Body from "../MainPage/Body";
import { Route, Routes } from "react-router-dom";
import About from "../MainPage/About";
import ContactUs from "../MainPage/ContactUs";

const MainPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <NavBar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </div>
  );
};

export default MainPage;
