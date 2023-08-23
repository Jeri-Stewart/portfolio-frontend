import React from "react";
import { Particles } from "react-tsparticles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

class ParticlesContainer extends React.Component {
  async customInit(engine) {
    console.log("Custom initialization of particles is being called.");
    await loadFireflyPreset(engine);
  }

  render() {
    const options = {
      preset: "firefly",
      background: {
        color: this.props.isDarkMode ? "#000000" : "#cbb2fe", // Set background color for particles
      },
      particles: {
        color: {
          value: this.props.isDarkMode ? "#EADBFD" : "#5a189a", // Set particle color
        },
      },
    };

    return (
      <Particles
        id="tsparticles"
        options={options}
        init={this.customInit}
        style={{
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
    );
  }
}

export default ParticlesContainer;
