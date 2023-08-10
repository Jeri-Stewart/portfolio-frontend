import React from "react";
import Header from "../components/Header";
import HomeDescription from "../components/HomeDescription";
import ParticlesContainer from "../components/ParticlesContainer";
import "../styles/Particles.css"; 
import "../styles/Home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <ParticlesContainer className="particles-container" />
      <HomeDescription />
    </div>
  );
};

export default HomePage;




