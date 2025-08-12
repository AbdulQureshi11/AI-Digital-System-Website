import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: { enable: false }, // keep inside parent only
      background: {
        color: {
          value: "transparent", // let our custom gradient show
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: false, mode: "repulse" },
          onHover: { enable: false, mode: "grab" },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 200 },
        },
      },
      particles: {
        color: { value: "#00CAFF" },
        links: {
          color: "#00CAFF",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 450,
        },
        opacity: { value: 0.2 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  // Gradient background wrapper
  const wrapperStyle = {
    height: "100vh", // only cover first section
    background: "linear-gradient(135deg, #171a88 0%, #0f1018 100%)",
    overflow: "hidden",
    position: "relative",
  };

  return (
    <div style={wrapperStyle} className="absolute top-0 left-0 w-full h-full -z-10">
      <Particles id={props.id} init={particlesLoaded} options={options} />
    </div>
  );
};

export default ParticlesComponent;
