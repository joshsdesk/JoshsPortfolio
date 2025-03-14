import React, { useState, useEffect } from "react";
import "../styles/Navigation.css";

const Navigation = ({ onResumeClick }) => { 
  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavClass("affix"); 
      } else {
        setNavClass(""); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${navClass}`}>
      <div className="container">
        <div className="logo">
          <img src="/images/joshslogo.png" alt="Josh's Logo" className="nav-logo" />
        </div>
        <ul className="navlinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            {/* Resume trigger using parent handler */}
            <a href="#" onClick={(e) => { e.preventDefault(); onResumeClick(); }}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

/* mobile*/

export default Navigation;
