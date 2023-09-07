import React from "react";
import "../styles/Footer.css";
import { useDarkMode } from "./DarkModeContext"; 

const Footer = () => {
  const { isDarkMode } = useDarkMode(); 

  return (
    <div className={`footer ${isDarkMode ? "dark-mode" : ""}`}>
      <p className={`footer-text ${isDarkMode ? "dark-text" : ""}`}>
        Jeri Stewart | &copy; 2023
      </p>
    </div>
  );
};

export default Footer;
