import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import profileImage from '../images/profile-avatar-animation.gif';

const jobDescriptions = [
  'full-stack software developer',
  'biologist',
  'tech enthusiast',
  'book lover',
  'avid movie watcher',
  'data professional',
];

const HomeDescription = () => {
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);
  const [typingDescription, setTypingDescription] = useState('');
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
    setTypingDescription('');
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
    <div className="home-description">
      <img src={profileImage} alt="Profile Avatar" className="profile-image" />
      <h1>Introducing Jeri Stewart</h1>
      <h2>
        {typingDescription}
        {typingCursorVisible && <span className="typing-cursor">|</span>}
      </h2>
    </div>
  );
};

export default HomeDescription;

