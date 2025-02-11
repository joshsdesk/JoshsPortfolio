import React, { useState } from "react";
import "./About.css";
import userImage from "../assets/images/user.png"; // Import the image

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  // Function to switch tabs
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id="about">
      {/* Page Title */}
      <h2 className="page-title">About Me</h2> 

      <div className="container">
        <div className="about-container">
          {/* Left Side - About Info & Tabs */}
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
                <li><span>Web Layout</span><br />Web Development</li>
                <li><span>UI/UX Design</span><br />User Interface</li>
                <li><span>React & JS</span><br />Frontend Development</li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`}>
              <ul>
                <li><span>Freelancer</span><br />Web Development</li>
                <li><span>Company XYZ</span><br />Frontend Engineer</li>
                <li><span>Startup ABC</span><br />UI/UX Designer</li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`}>
              <ul>
                <li><span>Bachelor’s Degree</span><br />Computer Science</li>
                <li><span>Web Dev Bootcamp</span><br />Full-Stack Development</li>
                <li><span>Self-Taught</span><br />Design & Coding</li>
              </ul>
            </div>
          </div>

          {/* Right Side - User Image */}
          <div className="about-image">
            <img src={userImage} alt="User" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
