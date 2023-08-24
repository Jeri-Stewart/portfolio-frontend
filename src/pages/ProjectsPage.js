import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projectOne from "../images/cedarCountyLMS.png";
import projectTwo from "../images/bookReviewApp.png";
import projectThree from "../images/Data-img.jpg";
import projectFour from "../images/digitalPortfolio.png";
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
          <div className="project-image-container">
            <img src={projectOne} alt="Project One" className="project-image" />
            <div className="project-hover-overlay">
              <div className="project-icons">
                <a href="https://vimeo.com/830428955?share=copy" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLink} className="project-icon" />
                </a>
                <a href="https://github.com/Jeri-Stewart/dv-foundations-capstone" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="project-icon" />
                </a>
              </div>
              <div className="project-description">
              Description: A library management system simulation developed using JavaScript, HTML (with EJS files for rendering variables), and CSS. The system allows users to perform various library-related tasks.
Technical Frameworks and Tools: CORS, Express.js, Node.js, REST API.
              </div>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image-container">
            <img src={projectTwo} alt="Project Two" className="project-image" />
            <div className="project-hover-overlay">
              <div className="project-icons">
                <a href="https://vimeo.com/846723092?share=copy" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLink} className="project-icon" />
                </a>
                <a href="https://github.com/Jeri-Stewart/bookReviewApp" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="project-icon" />
                </a>
              </div>
              <div className="project-description">
              Description: A book review application that enables users to leave, edit, and delete book reviews. The backend is built with Java (Spring Boot and Spring Framework), while the frontend uses HTML, JavaScript, and CSS. The app includes user authentication and leverages REST APIs.
Technical Frameworks and Tools: Spring Boot, Spring Framework, Java, HTML, JavaScript, CSS, REST API.
              </div>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image-container">
            <img src={projectThree} alt="Project Three" className="project-image" />
            <div className="project-hover-overlay">
              <div className="project-icons">
                <a href="https://github.com/Jeri-Stewart/Data-Science-and-Analytics-Portfolio" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="project-icon" />
                </a>
              </div>
              <div className="project-description">
              Contains a comprehensive portfolio showcasing various technical and analytical skills as a data professional.
              </div>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image-container">
            <img src={projectFour} alt="Project Four" className="project-image" />
            <div className="project-hover-overlay">
              <div className="project-icons">
                <a href="https://github.com/Jeri-Stewart/portfolio-frontend" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="project-icon" />
                </a>
              </div>
              <div className="project-description">
              An all-encompassing software developer portfolio developed using React.js. This interactive web application showcases diverse skills and achievements:
              </div>
            </div>
          </div>
        </div>
        {/* Add more project items  here*/}
      </div>
    </div>
  );
};

export default ProjectsPage;


