import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const ScrollToSection = ({ sectionId }) => {
  React.useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [sectionId]);

  return null;
};

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Default Route: Keeps the Single Page Structure */}
          <Route path="/" element={
            <>
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <Portfolio /> {/* Keeps portfolio layout intact */}
              <section id="contact"><Contact /></section>
              <section id="resume"><Resume /></section>
            </>
          } />
          
          {/* Navigation to Sections Using Anchor Links */}
          <Route path="/about" element={<><ScrollToSection sectionId="about" /></>} />
          <Route path="/portfolio" element={<><ScrollToSection sectionId="portfolio" /></>} />
          <Route path="/contact" element={<Contact />} /> {/* ✅ Separate Contact Page */}
          <Route path="/resume" element={<><ScrollToSection sectionId="resume" /></>} />
          
          {/* Redirect unknown routes back to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
