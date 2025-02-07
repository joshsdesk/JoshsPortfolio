import React, { useState, useEffect } from "react";
import "./Navigation.css";
import logo from "../assets/images/joshslogo.png"; // Import your logo

const Navigation = () => {
  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavClass("affix"); // Darkens navbar when scrolling
      } else {
        setNavClass(""); // Fully transparent navbar at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${navClass}`}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Josh's Logo" className="nav-logo" />
        </div>
        <div className="main_list">
          <ul className="navlinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
