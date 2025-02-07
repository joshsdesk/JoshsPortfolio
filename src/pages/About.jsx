import React from "react";
import "./About.css";
import userImage from "../assets/images/user.png"; // Import the image

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Left side - Image */}
        <div className="about-image">
          <img src={userImage} alt="Josh" />
        </div>

        {/* Right side - Text */}
        <div className="about-text">
          <h2>I'm <span className="red-text">Josh</span></h2>
          <p>
            As a passionate web designer, I thrive on creating visually appealing
            and user-friendly websites. My journey in web design began with a
            fascination for how design can enhance user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
