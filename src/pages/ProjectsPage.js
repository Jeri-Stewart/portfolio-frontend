import React from "react";
import { Link } from "react-router-dom";
import projectOne from "../images/cedarCountyLMS.png";
import projectTwo from "../images/bookReviewApp.png";
import projectThree from "../images/Data-img.jpg";
import { useDarkMode } from "../components/DarkModeContext";

import "../styles/Projects.css";

const ProjectsPage = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      id="projects"
      className={`projects-page ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="projects-top">
        <h1 className="projects-title">Projects</h1>
      </div>
      <div className="projects-grid">
        <div className="project-item">
          <Link to="https://vimeo.com/830428955?share=copy" className="project-link">
            <img src={projectOne} alt="Project One" className="project-image" />
          </Link>
        </div>
        <div className="project-item">
          <Link to="https://vimeo.com/846723092?share=copy" className="project-link">
            <img src={projectTwo} alt="Project Two" className="project-image" />
          </Link>
        </div>
        <div className="project-item">
          <Link to="https://github.com/Jeri-Stewart/Data-Science-and-Analytics-Portfolio" className="project-link">
            <img src={projectThree} alt="Project Three" className="project-image" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

