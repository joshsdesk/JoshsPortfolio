import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Portfolio.css";

// Import images for projects
import project1 from "../assets/images/HTML.png";
import project2 from "../assets/images/GDesign.png";
import project3 from "../assets/images/APPS.png";

const projects = [
  { id: 1, title: "Project One", image: project1 },
  { id: 2, title: "Project Two", image: project2 },
  { id: 3, title: "Project Three", image: project3 },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="portfolio">
      <h1 className="page-title">Portfolio</h1>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="swiper-slide">
            <img
              src={project.image}
              alt={project.title}
              onClick={() => setSelectedProject(project)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Navigation Buttons */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setSelectedProject(null)}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
