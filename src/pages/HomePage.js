import React from "react";
import Header from '../components/Header';
import HomeDescription from '../components/HomeDescription';
import ParticlesContainer from '../components/ParticlesContainer'; 
import About from './AboutPage';
import Projects from './ProjectsPage';
import Skills from './SkillsPage';
import Contact from './ContactPage';
import '../styles/Particles.css';
import '../styles/Home.css';
import { useDarkMode } from "../components/DarkModeContext";


const HomePage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();


  return (
    <div className={`home-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <ParticlesContainer className="particles-container" isDarkMode={isDarkMode} />
      <HomeDescription isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
};

export default HomePage;

