import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./Portfolio.css";

const GITHUB_USERNAME = "JoshsDesk";

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    const storedRepos = localStorage.getItem("github_repos");
    if (storedRepos) {
      setRepos(JSON.parse(storedRepos));
    } else {
      const fetchRepos = async () => {
        try {
          let allRepos = [];
          let page = 1;
          let perPage = 100;
          let fetchedRepos = [];

          do {
            const response = await fetch(
              `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=${perPage}&page=${page}`
            );
            fetchedRepos = await response.json();
            allRepos = [...allRepos, ...fetchedRepos];
            page++;
          } while (fetchedRepos.length === perPage);

          const reposWithImages = allRepos.map(repo => ({
            ...repo,
            image: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/preview.png`,
          }));

          setRepos(reposWithImages);
          localStorage.setItem("github_repos", JSON.stringify(reposWithImages));
        } catch (error) {
          console.error("Error fetching GitHub repositories:", error);
        }
      };
      fetchRepos();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedRepo(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const formatDescription = (text) => {
    if (!text) return "No description available.";
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`);
  };

  return (
    <section id="portfolio" className="portfolio">
      <h1 className="page-title">Portfolio</h1>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={40}
        loop={repos.length > 4}
        coverflowEffect={{ rotate: 0, stretch: 50, depth: 200, modifier: 1.5, slideShadows: false }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
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
                onError={(e) => (e.target.src = "https://via.placeholder.com/400")} 
              />
              <h3>{repo.name}</h3>
              {repo.description && <p dangerouslySetInnerHTML={{ __html: formatDescription(repo.description) }}></p>}
              <div className="repo-stats">
                {repo.stargazers_count > 0 && <span>⭐ {repo.stargazers_count}</span>}
                {repo.forks_count > 0 && <span>🍴 {repo.forks_count}</span>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {selectedRepo && (
        <div className="modal-overlay" onClick={() => setSelectedRepo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => setSelectedRepo(null)}>&times;</span>
            <h2>{selectedRepo.name}</h2>
            <img src={selectedRepo.image} alt={selectedRepo.name} className="modal-image" />
            {selectedRepo.description && <p dangerouslySetInnerHTML={{ __html: formatDescription(selectedRepo.description) }}></p>}
            {selectedRepo.stargazers_count > 0 && <p>🌟 Stars: {selectedRepo.stargazers_count}</p>}
            {selectedRepo.forks_count > 0 && <p>🍴 Forks: {selectedRepo.forks_count}</p>}
            {selectedRepo.created_at && <p>📅 Created: {new Date(selectedRepo.created_at).toLocaleDateString()}</p>}
            {selectedRepo.homepage && (
              <p>
                🔗 <a href={selectedRepo.homepage} target="_blank" rel="noopener noreferrer">Website</a>
              </p>
            )}
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
