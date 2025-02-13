import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import GitHub and LinkedIn icons
import "../components/Footer.css"; // Create this file for styles

const Footer = () => {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} JoshsWork. Made with
        <FontAwesomeIcon icon={faJedi} className="jedi-icon" /> powers!
      </p>
      <div className="footer-social">
        <ul>
          <li>
            <a href="https://github.com/JoshsDesk" className="btn-social github" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/yourprofile" className="btn-social linkedin" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;