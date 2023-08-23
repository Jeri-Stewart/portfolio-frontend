import React from "react";
import { NavHashLink } from "react-router-hash-link";
import darkModeImage from "../images/light-dark-mode.png";
import "../styles/Header.css";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  console.log("isDarkMode prop in Header:", toggleDarkMode);
  return (
    <header className="header">
      <nav className="nav-links">
        <div className="navbar">
          <NavHashLink
            smooth
            to="/#"
            className="nav-link"
            activeclassname="active"
          >
            Home
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#about"
            className="nav-link"
            activeclassname="active"
          >
            About
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#projects"
            className="nav-link"
            activeclassname="active"
          >
            Projects
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#skills"
            className="nav-link"
            activeclassname="active"
          >
            Skills
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#contact"
            className="nav-link"
            activeclassname="active"
          >
            Contact
          </NavHashLink>
        </div>
        <div
          className="dark-mode-toggle"
          onClick={() => {
            console.log("Dark mode toggle button clicked");
            toggleDarkMode();
          }}
        >
          <img src={darkModeImage} alt="Dark Mode Toggle" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
