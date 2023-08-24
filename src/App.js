import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route
          path="/"
          element={<HomePage isDarkMode={isDarkMode} />}
        />
        <Route
          path="/about"
          element={<AboutPage isDarkMode={isDarkMode} />}
        />
        <Route
          path="/projects"
          element={<ProjectsPage isDarkMode={isDarkMode} />}
        />
        <Route
          path="/skills"
          element={<SkillsPage isDarkMode={isDarkMode} />}
        />
        <Route
          path="/contact"
          element={<ContactPage isDarkMode={isDarkMode} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

