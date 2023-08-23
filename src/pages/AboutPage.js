import About from '../components/About';
import Header from '../components/Header';

const AboutPage = ({ isDarkMode, toggleDarkMode }) => {
  console.log("isDarkMode prop in AboutPage:", isDarkMode);
  return (
    <div
      id="about"
      className={`about-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <About isDarkMode={isDarkMode}/>
    </div>
  );
};

export default AboutPage;
