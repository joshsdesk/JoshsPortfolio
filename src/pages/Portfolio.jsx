import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./Portfolio.css";

// Import images for projects
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";

const projects = [
  { id: 1, title: "Project One", image: project1 },
  { id: 2, title: "Project Two", image: project2 },
  { id: 3, title: "Project Three", image: project3 },
  { id: 4, title: "Project Four", image: project4 },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

   // Close modal on ESC key press
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <h1 className="page-title">Portfolio</h1>

      {/* Swiper Slider */}
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 400,
          modifier: 2,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, EffectCoverflow]}
        className="swiper"
      >
        
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="swiper-slide">
            <div className="hexagon">
              <img
                src={project.image}
                alt={project.title}
                onClick={() => setSelectedProject(project)}
              />
            </div>
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
