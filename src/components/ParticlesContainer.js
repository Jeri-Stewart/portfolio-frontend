import React from "react";
import { Particles } from "react-tsparticles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

class ParticlesContainer extends React.Component {
  async customInit(engine) {
    await loadFireflyPreset(engine);
  }

  render() {
    const options = {
      preset: "firefly",
    };

    return (
      <Particles
        id="tsparticles"
        options={options}
        init={this.customInit}
      />
    );
  }
}

export default ParticlesContainer;
