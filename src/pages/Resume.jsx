import React from "react";
import "./resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPrint } from "@fortawesome/free-solid-svg-icons";
import resumeFile from "../assets/images/J_Bourassa_Resume.pdf";

const Resume = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-resume" onClick={onClose}>&times;</button>
        <h2 className="resume-title">My Resume</h2>
        <iframe src={resumeFile} title="Resume" className="resume-viewer"></iframe>
        <div className="resume-buttons">
          <a href={resumeFile} download className="resume-btn download">
            <FontAwesomeIcon icon={faDownload} /> Download
          </a>
          <button className="resume-btn print" onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} /> Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
