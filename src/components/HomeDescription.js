import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import profileImage from "../images/profile-avatar-animation.gif"; // Import profileImage

const jobDescriptions = [
  "tech enthusiast",
  "full-stack software developer",
  "biologist",
  "tech enthusiast",
  "book lover",
  "avid movie watcher",
  "data professional",
];

const HomeDescription = ({ isDarkMode }) => {
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);
  const [typingDescription, setTypingDescription] = useState("");
  const [typingCursorVisible, setTypingCursorVisible] = useState(true);

  useEffect(() => {
    const descriptionInterval = setInterval(() => {
      const nextIndex = (currentDescriptionIndex + 1) % jobDescriptions.length;
      setCurrentDescriptionIndex(nextIndex);

      // Start typing animation for the next job description
      startTypingAnimation(jobDescriptions[nextIndex]);
    }, 3000); // Change job description every 3 seconds

    return () => clearInterval(descriptionInterval);
  }, [currentDescriptionIndex]);

  const startTypingAnimation = (description) => {
    setTypingDescription("");
    setTypingCursorVisible(true);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypingDescription(description.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > description.length) {
        clearInterval(typingInterval);
        setTypingCursorVisible(false);
      }
    }, 100); // Typing speed

    return () => clearInterval(typingInterval);
  };

  return (
    <div className={`home-description ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <img src={profileImage} alt="Profile Avatar" className="profile-image" />
      <h1 className="greeting">Hello, I am </h1>
      <h1 className="name" >Jeri Stewart</h1>
      <h2>
        {typingDescription}
        {typingCursorVisible && <span className="typing-cursor">|</span>}
      </h2>
      <h3>Empowering Data-Driven Decisions and Crafting Innovative Solutions: Explore My Portfolio ⤵ </h3>
      <div className="frosted-glass-background"></div>
    </div>
  );
};

export default HomeDescription;
