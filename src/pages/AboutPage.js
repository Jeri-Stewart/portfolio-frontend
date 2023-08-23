import About from "../components/About";
import Header from "../components/Header";
import { useDarkMode } from "../components/DarkModeContext";


const AboutPage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      id="about"
      className={`about-page ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <About isDarkMode={isDarkMode} />
    </div>
  );
};

export default AboutPage;
