import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBg = ({ id, isMobile }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false }, 
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      particles: {
        color: { value: "#00CAFF" },
        links: {
          color: "#00CAFF",
          distance: 100,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: { enable: true, random: true, speed: 0.5 },
        number: {
          density: { enable: true },
          value: isMobile ? 800 : 850,
        },
        opacity: { value: 0.2 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [isMobile]
  );

  if (!init) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      
      <Particles id={id} options={options} className="w-full h-full" />
    </div>
  );
};

export default ParticlesBg;
