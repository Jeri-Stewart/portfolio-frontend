import React, { useState } from "react";
import profileImage from "../images/headshot.png";
import fastlearnerGif from "../images/fast-learner.gif";
import organizedGif from "../images/organized.gif";
import CollaborativeGif from "../images/collab.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import PopupModal from "./PopupModal.js";
import { useDarkMode } from "../components/DarkModeContext";
import "../styles/About.css";

const About = () => {
  const { isDarkMode } = useDarkMode();

  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);

  const [selectedPopup, setSelectedPopup] = useState(null);

  const handleCheckboxChange = (checkboxNum) => {
    if (checkboxNum === 1) {
      setCheckbox1Checked(!checkbox1Checked);
      setSelectedPopup(checkbox1Checked ? null : 1);
    } else if (checkboxNum === 2) {
      setCheckbox2Checked(!checkbox2Checked);
      setSelectedPopup(checkbox2Checked ? null : 2);
    } else if (checkboxNum === 3) {
      setCheckbox3Checked(!checkbox3Checked);
      setSelectedPopup(checkbox3Checked ? null : 3);
    }
  };

  return (
    <div
      id="about"
      className={`about-page ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="background-card"></div>
      <div className="about-layer top-layer">
        <h1 className="about-title">About</h1>
      </div>
      <div className="about-layer middle-layer">
        <img className="about-image" src={profileImage} alt="Profile" />
        <p className="about-text">
        Hello, I'm Jeri Stewart, a dynamic public health scientist and accomplished Software Engineer. Beyond my professional pursuits, I find joy in the pages of books, the strategy of volleyball, and the satisfaction of solving intricate puzzles. Rooted in my dedication to community, I've journeyed from public health to technology. As a biologist at the CDC's Rickettsial Diagnostic Team, I not only contributed to diagnostics and research, but also witnessed the transformative power of technology in addressing societal challenges. This realization steered me toward software engineering, where I combine my unique insights from both worlds to tackle intricate problems and craft innovative solutions. My diverse background, analytical acumen, and unyielding commitment make me an invaluable asset, poised to drive positive change through technology and beyond.
        </p>
      </div>
      <div className="about-layer bottom-layer">
        <div className="about-me-buttons">
          <div className="button-container">
            <input
              id="btn1"
              type="checkbox"
              checked={checkbox1Checked}
              onChange={() => handleCheckboxChange(1)}
            />
            <label htmlFor="btn1">
              <FontAwesomeIcon
                id="icon1"
                className="user-icons"
                icon={faUser}
                size="3x"
                color="#95F1D8"
              />
            </label>
          </div>
          <div className="button-container">
            <input
              id="btn2"
              type="checkbox"
              checked={checkbox2Checked}
              onChange={() => handleCheckboxChange(2)}
            />
            <label htmlFor="btn2">
              <FontAwesomeIcon
                id="icon2"
                className="user-icons"
                icon={faUser}
                size="3x"
                color="#95F1D8"
              />
            </label>
          </div>
          <div className="button-container">
            <input
              id="btn3"
              type="checkbox"
              checked={checkbox3Checked}
              onChange={() => handleCheckboxChange(3)}
            />
            <label htmlFor="btn3">
              <FontAwesomeIcon
                id="icon3"
                className="user-icons"
                icon={faUser}
                size="3x"
                color="#95F1D8"
              />
            </label>
          </div>
        </div>
      </div>
      <PopupModal
        className="popup-modal"
        isOpen={selectedPopup === 1}
        onClose={() => setSelectedPopup(null)}
        title="Adaptable and Fast Learner"
        gifSrc={fastlearnerGif}
        text=" Successfully completed Hackbright Academy Bright Paths Bootcamp with expertise in Java, REST API, React, 
        and Spring Framework, showcasing a high aptitude for learning and mastering new technologies
        "
        isDarkMode={isDarkMode} 
      />
      <PopupModal
        className="popup-modal"
        isOpen={selectedPopup === 2}
        onClose={() => setSelectedPopup(null)}
        title="Organized and Meticulous"
        gifSrc={organizedGif}
        text="Excelled in managing data for clinical and research specimens, implementing efficient laboratory practices, 
        and maintaining a high standard of quality in a public health laboratory environment"
        isDarkMode={isDarkMode} 
      />
      <PopupModal
        className="popup-modal"
        isOpen={selectedPopup === 3}
        onClose={() => setSelectedPopup(null)}
        title="Collaborative Team Player"
        gifSrc={CollaborativeGif}
        text="Thrived in diverse, cross-functional environments, leveraging strong communication skills to work alongside 
        4+ teams, ensuring effective diagnostic testing and surveillance for pathogenic organisms"
        isDarkMode={isDarkMode} 
      />
    </div>
  );
};

export default About;
