import React from "react";
import ReactDOM from "react-dom";
import "../styles/resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPrint } from "@fortawesome/free-solid-svg-icons";

const Resume = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const modalContent = (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-resume" onClick={onClose}>
          &times;
        </button>
        <h2 className="resume-title">My Resume</h2>
        <iframe
          src="/images/J_Bourassa_Resume.pdf"
          title="Resume"
          className="resume-viewer"
        ></iframe>
        <div className="resume-buttons">
          <a
            href="/images/J_Bourassa_Resume.pdf"
            download
            className="resume-btn download"
          >
            <FontAwesomeIcon icon={faDownload} /> Download
          </a>
          <button className="resume-btn print" onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} /> Print
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
};

export default Resume;
