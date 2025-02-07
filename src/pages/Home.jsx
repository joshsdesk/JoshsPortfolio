import React from "react";
import backgroundImage from "../assets/images/background.png";
import "./Home.css"; // Create this file for styles

const Home = () => {
  return (
    <section 
      className="home"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div class="home-text">
        <p>Code Ninja</p>
        <h1>Hi, I'm <span>Josh</span> Bourassa</h1>
      </div>
    </section>
  );
};

export default Home;
