import React from "react";
import { useDarkMode } from "../components/DarkModeContext.js";
import linkedinLightIcon from "../images/linkedin-light.png";
import linkedinDarkIcon from "../images/linkedin-dark.png";
import githubLightIcon from "../images/github-light.png";
import githubDarkIcon from "../images/github-dark.png";
import resumeLightIcon from "../images/resume-light.png";
import resumeDarkIcon from "../images/resume-dark.png";
import "../styles/Contact.css";

const Contact = () => {

  const { isDarkMode } = useDarkMode();

  return (
    <div
      id="contact"
      className={`contact-page ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div>
        <h1 className="about-subtitle">Let's connect!</h1>
      </div>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/jeri-stewart/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={isDarkMode ? linkedinDarkIcon : linkedinLightIcon}
            alt="LinkedIn"
            className="social-icon"
          />
        </a>
        <a
          href="https://github.com/Jeri-Stewart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={isDarkMode ? githubDarkIcon : githubLightIcon}
            alt="GitHub"
            className="social-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;

