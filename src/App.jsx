// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Footer from "./components/Footer";

import "./index.css";
import BgImage from "../public/assets/2bgImage.jpg";
const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};
function App() {
  return (
    <div className="overflow-x-hidden ">
      <div style={bgStyle} className="flex flex-col min-h-screen">
        <Navbar />
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
