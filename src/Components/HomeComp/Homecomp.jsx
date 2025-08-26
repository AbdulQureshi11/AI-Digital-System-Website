import "../../index.css";
import Counter from "./Counter";
import Dropdown from "./Dropdown";
import Searchbtn from "./Searchbtn";
import Ourclients from "./Ourclients";
import Ourproducts from "./Ourproducts";
import Aboutsection from "./Aboutsection";
import { useState, useEffect } from "react";
import ServicesSection from "./ServicesSection";
import logo from "../../Assets/Pictures/logo.svg";
import Background from "../Background/Background";
import ParticlesBg from "../ParticalsComp/ParticalsBg";
import brainimg from "../../Assets/Pictures/brain_img.svg";

const brainDotClasses = [
  "brain-dot-1", "brain-dot-2", "brain-dot-3", "brain-dot-4",
  "brain-dot-5", "brain-dot-6", "brain-dot-7", "brain-dot-8",
];

const Homecomp = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isIpad, setIsIpad] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); // mobile <768
      setIsIpad(width >= 768 && width <= 1024); // iPad range (including iPad Mini, Surface Pro, etc.)
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="home-container w-full overflow-x-hidden">
      {/* Hero Section with Background + Particles */}
      <div
        className={`relative w-full ${isMobile ? "h-[50vh]" : isIpad ? "h-[60vh]" : "h-screen"}`}
      >
        <Background>
          <ParticlesBg id="particles" isMobile={isMobile} />
        </Background>

        {/* Header Section */}
        <header className="absolute top-0 left-0 w-full z-[9999] py-4 md:px-19">
          <div className="flex flex-row w-full items-center justify-between px-4 md:px-0">
            {/* Logo */}
            <div className="flex justify-start w-[50%]">
              <img src={logo} alt="Logo" className="w-[180px] md:w-[250px]" />
            </div>

            {/* Search Button + Dropdown */}
            <div className="flex text-white justify-end items-center gap-4 sm:gap-5 md:gap-5 text-2xl sm:text-3xl md:text-[45px] w-[50%]">
              <Searchbtn />
              <Dropdown />
            </div>
          </div>
        </header>

        {/* Landing Page Main Content */}
        <div className="absolute flex flex-col md:flex-row left-0 w-full h-full z-30 top-0 px-4 md:px-19 pt-20 md:pt-0">
          {/* Left text */}
          <div className="w-full md:w-[50%] h-full flex flex-col justify-center items-start text-left space-y-2 md:space-y-3">
            <h1 className="text-white font-Robot text-base md:text-[20px]">
              Helping Business
            </h1>
            <h1 className="text-[#00CAFF] font-Robot font-bold text-2xl md:text-[40px] leading-tight">
              Through Technology
            </h1>
            <p className="text-white font-Robot text-sm md:text-[16px] max-w-md md:max-w-full pr-2">
              High-performing software solutions that drive your business forward.
              Accelerate your software development roadmap through custom engineering solutions.
            </p>
            <button className="bg-[#00CAFF] text-white font-Robot px-6 md:px-12 py-2 md:py-3 mt-3 hover:bg-[#f15922] transition-all rounded-3xl text-sm md:text-base cursor-pointer">
              Read More
            </button>
          </div>

          {/* Brain Image + Dots (hide on mobile, show on iPad + Desktop) */}
          <div className="hidden md:flex relative w-full md:w-[540px] mt-16 overflow-hidden z-10 justify-center items-center">
            <img
              src={brainimg}
              alt="Brain"
              className={`w-72 ${isIpad ? "mt-6" : "mt-40"} md:w-full max-w-[320px] md:max-w-[480px] lg:max-w-[600px] object-contain`}
            />
            <div className="flex flex-wrap justify-center">
              {brainDotClasses.map((dotClass, index) => (
                <div key={index}>
                  {/* Base dot */}
                  <span
                    className={`absolute w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-cyan-500 rounded-full ${dotClass} ${isIpad ? "mt-25" : ""}`}
                  ></span>
                  {/* Blinking overlay */}
                  <span
                    className={`absolute w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-cyan-500 rounded-full animate-ping-slow ${dotClass} ${isIpad ? "mt-25" : ""}`}
                  ></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <Aboutsection />
      <ServicesSection />
      <Counter />
      <Ourproducts />
      <Ourclients />
    </div>
  );
};

export default Homecomp;
