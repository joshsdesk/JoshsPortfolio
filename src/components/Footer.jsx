import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../components/Footer.css"; // Ensure this path is correct

const Footer = () => {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} JoshsWork. Made with
        <FontAwesomeIcon icon={faJedi} className="jedi-icon" /> powers!
      </p>
      <div className="social-icons">
        <a href="https://github.com/JoshsDesk" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareGithub} className="footer-icon" />
        </a>
        <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
