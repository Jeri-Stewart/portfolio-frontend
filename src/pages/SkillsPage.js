import React from "react";
import Header from "../components/Header"
import { useDarkMode } from "../components/DarkModeContext";
import "../styles/Skills.css";

import skillsLight1 from "../images/skills-icons-light-1.png";
import skillsLight2 from "../images/skills-icons-light-2.png";
import skillsLight3 from "../images/skills-icons-light-3.png";
import skillsLight4 from "../images/skills-icons-light-4.png";
import skillsLight5 from "../images/skills-icons-light-5.png";
import skillsLight6 from "../images/skills-icons-light-6.png";
import skillsLight7 from "../images/skills-icons-light-7.png";
import skillsLight8 from "../images/skills-icons-light-8.png";
import skillsLight9 from "../images/skills-icons-light-9.png";
import skillsLight10 from "../images/skills-icons-light-10.png";
import skillsDark1 from "../images/skills-icons-dark-1.png";
import skillsDark2 from "../images/skills-icons-dark-2.png";
import skillsDark3 from "../images/skills-icons-dark-3.png";
import skillsDark4 from "../images/skills-icons-dark-4.png";
import skillsDark5 from "../images/skills-icons-dark-5.png";
import skillsDark6 from "../images/skills-icons-dark-6.png";
import skillsDark7 from "../images/skills-icons-dark-7.png";
import skillsDark8 from "../images/skills-icons-dark-8.png";
import skillsDark9 from "../images/skills-icons-dark-9.png";
import skillsDark10 from "../images/skills-icons-dark-10.png";



const SkillsPage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      id="skills"
      className={`skills-page ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="skills-section">
        <h1
          className={`skills-title ${isDarkMode ? "dark-mode" : "light-mode"}`}
        >
          Skills
        </h1>
      </div>
      <div className="skills-section skills-icons-container">
        <img
          src={isDarkMode ? skillsDark1 : skillsLight1}
          alt="Skills Icon"
          className="skills-icon"
        />
        <img
          src={isDarkMode ? skillsDark2 : skillsLight2}
          alt="Skills Icon"
          className="skills-icon"
        />
        <img
          src={isDarkMode ? skillsDark3 : skillsLight3}
          alt="Skills Icon"
          className="skills-icon"
        />
        <img
          src={isDarkMode ? skillsDark4 : skillsLight4}
          alt="Skills Icon"
          className="skills-icon"
        />
        <img
          src={isDarkMode ? skillsDark5 : skillsLight5}
          alt="Skills Icon"
          className="skills-icon"
        />
        <img
          src={isDarkMode ? skillsDark6 : skillsLight6}
          alt="Skills Icon"
          className="skills-icon"
        />
        <img
          src={isDarkMode ? skillsDark7 : skillsLight7}
          alt="Skills Icon"
          className="skills-icon"
        />
        <img
          src={isDarkMode ? skillsDark8 : skillsLight8}
          alt="Skills Icon"
          className="skills-icon"
        />
        <img
          src={isDarkMode ? skillsDark9 : skillsLight9}
          alt="Skills Icon"
          className="skills-icon"
        />
        <img
          src={isDarkMode ? skillsDark10 : skillsLight10}
          alt="Skills Icon"
          className="skills-icon"
        />
      </div>
      <div className="skills-section">
        <ul
          className={`skills-list ${isDarkMode ? "dark-mode" : "light-mode"}`}
        >
          <li>JavaScript </li>
          <li>Python</li>
          <li>Java</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Responsive Web Design</li>
          <li>RESTful APIs</li>
          <li>Git</li>
          <li>SQL</li>
          <li>React.js</li>
          <li>NumPy</li>
          <li>Pandas</li>
          <li>Express.js</li>
          <li>Java</li>
          <li>Spring Framework</li>
          <li>Spring Boot</li>
          <li>Agile Development</li>
          <li>Test-Driven Development (TDD)</li>
          <li>Continuous Integration (CI/CD)</li>
          <li>Express.js</li>
          <li>Object-oriented Programming</li>
        </ul>
      </div>
      <div className="skills-section">
        <a
          href="my-portfolio/src/Jeri_Stewart_Resume.pdf"
          className={`download-button ${
            isDarkMode ? "dark-mode" : "light-mode"
          }`}
          download
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default SkillsPage;
