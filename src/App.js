import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Layout from "./pages/Layout";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ParticlesContainer from "./components/ParticlesContainer";
import { useDarkMode } from "./components/DarkModeContext";

import "./styles/Home.css";
import "./styles/Particles.css";
import "./styles/Header.css";
import "./styles/About.css";
import "./styles/Projects.css";
import "./styles/Skills.css";
import "./styles/Contact.css";

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <Router>
      <div>
        <ParticlesContainer className="particles-container" isDarkMode={isDarkMode} />
        <Layout isDarkMode={isDarkMode}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} /> 
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;

