import React from "react";
import "./Home.css"; 

const Home = () => {
  return (
    <section 
      className="home"
      style={{ backgroundImage: 'url(/images/background-desktop.png)' }}
    >
      <div className="home-text">
        <p>UX/UI Ninja</p>
        <h1>Hi, I'm <span>Josh</span> Bourassa</h1>
      </div>
    </section>
  );
};

export default Home;