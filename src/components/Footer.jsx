import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons"; // Import Jedi icon
import "../components/Footer.css"; // Create this file for styles

const Footer = () => {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} JoshsWork. Made with
        <FontAwesomeIcon icon={faJedi} className="jedi-icon" /> powers!
      </p>
    </footer>
  );
};

export default Footer;