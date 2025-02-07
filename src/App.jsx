import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="contact"><Contact /></section>
        <section id="resume"><Resume /></section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
