// components/MainContainer.js
import React from 'react';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import AboutPage from '../pages/AboutPage';
import SkillsPage from '../pages/SkillsPage';
import ContactPage from '../pages/ContactPage';
import '../styles/MainContainer.css';

const MainContainer = () => {
  return (
    <div className="main-container">
      <HomePage />
      <ProjectsPage />
      <AboutPage />
      <SkillsPage />
      <ContactPage />
    </div>
  );
};

export default MainContainer;
