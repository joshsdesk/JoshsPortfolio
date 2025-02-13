import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./Portfolio.css";

const GITHUB_USERNAME = "JoshsDesk"; // Replace with your GitHub username

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        let allRepos = [];
        let page = 1;
        let perPage = 100; // GitHub API max per request
        let fetchedRepos = [];

        do {
          const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=${perPage}&page=${page}`
          );
          fetchedRepos = await response.json();
          allRepos = [...allRepos, ...fetchedRepos]; // Append repos
          page++;
        } while (fetchedRepos.length === perPage); // Continue fetching if full page

        // Add preview image URL for each repo
        const reposWithImages = allRepos.map(repo => ({
          ...repo,
          image: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/preview.png`
        }));

        setRepos(reposWithImages);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedRepo(null);
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
        spaceBetween={40} // Proper spacing between slides
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 1.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, EffectCoverflow]}
        className="swiper"
      >
        {repos.map((repo) => (
          <SwiperSlide key={repo.id} className="swiper-slide">
            <div className="card" onClick={() => setSelectedRepo(repo)}>
              <img 
                src={repo.image} 
                alt={repo.name} 
                className="repo-image"
                onError={(e) => (e.target.src = "https://via.placeholder.com/400")} // Fallback if no image
              />
              <h3>{repo.name}</h3>
              <p>{repo.description || "No description available."}</p>
              <div className="repo-stats">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Navigation Buttons */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* Modal for Repo Details */}
      {selectedRepo && (
        <div className="modal-overlay" onClick={() => setSelectedRepo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setSelectedRepo(null)}>
              &times;
            </span>
            <h2>{selectedRepo.name}</h2>
            <img src={selectedRepo.image} alt={selectedRepo.name} className="modal-image" />
            <p>{selectedRepo.description || "No description available."}</p>
            <p>🌟 Stars: {selectedRepo.stargazers_count} | 🍴 Forks: {selectedRepo.forks_count}</p>
            <p>📅 Created: {new Date(selectedRepo.created_at).toLocaleDateString()}</p>
            <a href={selectedRepo.html_url} target="_blank" rel="noopener noreferrer" className="modal-link">
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
