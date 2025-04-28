import React from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <div className="bg-black text-white">Hello</div>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
