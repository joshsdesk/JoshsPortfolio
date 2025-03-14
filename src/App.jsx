import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation"; // ✅ Add Navigation here
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume"; // Import Resume modal
import "./styles/resume.css";

const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div>
      <Header onResumeClick={() => setIsResumeOpen(true)} /> {/* Pass function to Header */}
      <Navigation onResumeClick={() => setIsResumeOpen(true)} /> {/* ✅ Pass function to Navigation */}
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <Portfolio />
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      
      {/* Resume Modal */}
      <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default App;
