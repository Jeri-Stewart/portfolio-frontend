import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { useDarkMode } from "../components/DarkModeContext";

import '../styles/Particles.css';
import "../styles/Header.css";
import '../styles/Home.css';
import '../styles/About.css';
import '../styles/Projects.css';
import '../styles/Skills.css';
import '../styles/Contact.css';
import '../styles/Layout.css';


const Layout = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div id="content-container" className={`home-page ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Home isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
};

export default Layout;
