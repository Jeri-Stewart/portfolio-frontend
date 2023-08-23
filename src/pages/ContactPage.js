import Header from "../components/Header";
import Contact from "../components/Contact";

const ContactPage = ({ isDarkMode, toggleDarkMode }) => {
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
