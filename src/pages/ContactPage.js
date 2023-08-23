import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import "../styles/Contact.css";
import { useDarkMode } from "../components/DarkModeContext";


const ContactPage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();


  return (
    <div
      id="contact-page"
      className={`contact-page ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Contact isDarkMode={isDarkMode}/>
    </div>
  );
};

export default ContactPage;
