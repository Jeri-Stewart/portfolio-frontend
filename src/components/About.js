import React, { useState, useEffect } from "react";
import profileImage from "../images/headshot.png";
import fastlearnerGif from "../images/fast-learner.gif";
import organizedGif from "../images/organized.gif";
import CollaborativeGif from "../images/collab.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import PopupModal from './PopupModal.js';
import "../styles/About.css";

const AboutPage = ({ isDarkMode }) => {
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
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-text">
          <p className="about-description">
            I am a public health scientist and full-stack software engineer. In
            addition to my professional pursuits, I have a passion for reading,
            staying active mentally and physically through activities like
            volleyball, and solving puzzles. I also enjoy volunteering and
            supporting my community. This leads me to my career in public health
            which began with my fascination with science and my desire to make a
            positive impact. I worked as a biologist at the CDC with the
            Rickettsial Diagnostic Team. I contributed to clinical diagnostic
            testing and as well as research projects to address public health
            challenges. There, I recognized the potential of technology to
            enhance our ability to solve problems and support our communities,
            leading me to software engineering. Also, I am committed to reducing
            racial and gender bias in the technical field and believe that
            technology holds great potential for creating actionable insights to
            combat health disparities in underrepresented communities. I believe
            that by combining my knowledge and skills from both disciplines, I
            can effectively address complex challenges and provide innovative
            solutions to improve public well-being and provide a meaningful
            impact.
          </p>
        </div>
      </div>
      <div className="about-layer bottom-layer">
        <div className="about-me-buttons">
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
      <PopupModal
        ClassName="popup-modal"
        isOpen={selectedPopup === 1}
        onClose={() => setSelectedPopup(null)}
        title="Adaptable and Fast Learner"
        gifSrc={fastlearnerGif}
        text=" Successfully completed Hackbright Academy Bright Paths Bootcamp with expertise in Java, REST API, React, 
        and Spring Framework, showcasing a high aptitude for learning and mastering new technologies
        "
      />
      <PopupModal
        ClassNameName="popup-modal"
        isOpen={selectedPopup === 2}
        onClose={() => setSelectedPopup(null)}
        title="Organized and Meticulous"
        gifSrc={organizedGif}
        text="Excelled in managing data for clinical and research specimens, implementing efficient laboratory practices, 
        and maintaining a high standard of quality in a public health laboratory environment"
      />
      <PopupModal
        ClassNameName="popup-modal"
        isOpen={selectedPopup === 3}
        onClose={() => setSelectedPopup(null)}
        title="Collaborative Team Player"
        gifSrc={CollaborativeGif}
        text="Thrived in diverse, cross-functional environments, leveraging strong communication skills to work alongside 
        4+ teams, ensuring effective diagnostic testing and surveillance for pathogenic organisms"
      />
    </div>
  );
};

export default AboutPage;