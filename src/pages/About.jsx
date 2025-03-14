import React, { useState } from "react";
import "../styles/About.css";


const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  // Function to switch tabs
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id="about" className="page-section">
  {/* Page Title */}
  <h2 className="page-title">About Me</h2>

  <div className="about-container">
    {/* Left Side - User Image */}
    <div className="about-image">
      <img src="/images/user.png" alt="User" />
    </div>

    {/* Right - About Info & Tabs */}
    <div className="about-text">
      <h2>I'm <span className="red-text">Josh</span></h2>
      <p>
        As a passionate web designer, I thrive on creating visually
        appealing and user-friendly websites. My journey in web design
        began with a fascination for how design can enhance user
        experience.
      </p>

      {/* Tab Titles */}
      <div className="tab-titles">
        <p
          className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
          onClick={() => openTab("skills")}
        >
          Skills
        </p>
        <p
          className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
          onClick={() => openTab("experience")}
        >
          Experience
        </p>
        <p
          className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
          onClick={() => openTab("education")}
        >
          Education
        </p>
      </div>

      {/* Tab Content */}
      <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`}>
        <ul>
          <li><span>UI/UX Design</span><br />Web Development</li>
          <li><span>React & JS</span><br />Frontend Development</li>
          <li><span>TypeScript & SQL</span><br />Backend Development</li>
        </ul>
      </div>

      <div className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`}>
        <ul>
          <li><span>Freelancer</span><br />Web Development</li>
          <li><span>Company XYZ</span><br />Frontend/Backend Development</li>
          <li><span>Startup ABC</span><br />UI/UX Designer</li>
        </ul>
      </div>

      <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`}>
        <ul>
          <li><span>Bachelor’s Degree</span><br />Broadcast Engineering</li>
          <li><span>Web Dev Course</span><br />Full-Stack Development</li>
          <li><span>Self-Taught</span><br />Design & Coding</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;
