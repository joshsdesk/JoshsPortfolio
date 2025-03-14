import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">  {/* <-- Add className here */}
      <p>
        © {new Date().getFullYear()} JoshsWork. Made with
        <FontAwesomeIcon icon={faJedi} className="jedi-icon" /> powers!
      </p>      
    </footer>
  );
};

export default Footer;
