import React, { useState, useEffect } from "react";
import "../styles/Navigation.css";

const Navigation = ({ onResumeClick }) => { 
  const [navClass, setNavClass] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`nav ${navClass}`}>
      <div className="container">
        <div className="logo">
          <img src="/images/joshslogo.png" alt="Josh's Logo" className="nav-logo" />
        </div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`navlinks ${isMobileMenuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#portfolio" onClick={closeMobileMenu}>Portfolio</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
          <li>
            {/* Resume trigger using parent handler */}
            <a href="#" onClick={(e) => { e.preventDefault(); onResumeClick(); closeMobileMenu(); }}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
