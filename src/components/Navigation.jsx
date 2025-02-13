import React, { useState, useEffect } from "react";
import "./Navigation.css";
import Resume from "../pages/Resume"; // Import Resume modal

const Navigation = () => {
  const [navClass, setNavClass] = useState("");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

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
    <>
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
              {/* Resume trigger */}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsResumeOpen(true); }}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Resume Modal */}
      <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Navigation;