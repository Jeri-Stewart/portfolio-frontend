import React, { useState } from "react";
import profileImage from "../images/headshot.png";
import fastlearnerGif from "../images/fast-learner.gif";
import organizedGif from "../images/organized.gif";
import CollaborativeGif from "../images/collab.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import PopupModal from "./PopupModal";
import { useDarkMode } from "./DarkModeContext";
import "../styles/About.css";

const About = () => {
  const { isDarkMode } = useDarkMode();

  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);

  const [selectedPopup, setSelectedPopup] = useState(null);

  const handleCheckboxChange = (checkboxNum) => {
    console.log(`Checkbox ${checkboxNum} clicked`);
    if (checkboxNum === 1) {
      setCheckbox1Checked(!checkbox1Checked);
      setSelectedPopup(!checkbox1Checked ? 1 : null);
    } else if (checkboxNum === 2) {
      setCheckbox2Checked(!checkbox2Checked);
      setSelectedPopup(!checkbox2Checked ? 2 : null);
    } else if (checkboxNum === 3) {
      setCheckbox3Checked(!checkbox3Checked);
      setSelectedPopup(!checkbox3Checked ? 3 : null);
    }
  };

  return (
    <div
      id="about"
      className={`about-page ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="background-card">
        <div className="about-layer top-layer">
          <h1 className="about-title">About</h1>
        </div>
        <div className="about-layer middle-layer">
          <img className="about-image" src={profileImage} alt="Profile" />
          <p className="about-text">
            Hi, I'm Jeri – a passionate public health scientist and skilled
            Software Engineer. When I'm not immersed in my professional work,
            you'll find me lost in the world of books, strategizing on the
            volleyball court, or unraveling challenging puzzles. My journey in
            public health and tech was driven by a deep commitment to community
            and a realization of technology's transformative potential. I saw
            firsthand how technology can address society's most pressing issues.
            I have the ability to I leverage my unique insights from both fields
            to solve complex problems and innovate.
          </p>
        </div>
        <div className="about-layer bottom-layer">
          <div className="about-me-buttons">
            <div className="button-container" id="btnOne">
              <input
                id="btn1"
                type="checkbox"
                checked={checkbox1Checked}
                onChange={() => handleCheckboxChange(1)}
              />
              <label className="btn-label" htmlFor="btn1">
                <FontAwesomeIcon
                  id="icon1"
                  className="user-icons"
                  icon={faUser}
                  size="3x"
                  color="#95F1D8"
                />
              </label>
            </div>
            <div className="button-container" id="btnTwo">
              <input
                id="btn2"
                type="checkbox"
                checked={checkbox2Checked}
                onChange={() => handleCheckboxChange(2)}
              />
              <label className="btn-label" htmlFor="btn2">
                <FontAwesomeIcon
                  id="icon2"
                  className="user-icons"
                  icon={faUser}
                  size="3x"
                  color="#95F1D8"
                />
              </label>
            </div>
            <div className="button-container" id="btnThree">
              <input
                id="btn3"
                type="checkbox"
                checked={checkbox3Checked}
                onChange={() => handleCheckboxChange(3)}
              />
              <label className="btn-label" htmlFor="btn3">
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
