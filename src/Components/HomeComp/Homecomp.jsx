import ParticlesComponent from "../ParticalsComp/ParticalsBg";
import logo from "../../Assets/Pictures/logo.svg";
import Searchbtn from "./Searchbtn";
import Dropdown from "./Dropdown";
import brainimg from "../../Assets/Pictures/brain_img.svg";
import "../../index.css";
import Aboutsection from "./Aboutsection";
import ServicesSection from "./ServicesSection";
import Counter from "./Counter";
import Ourproducts from "./Ourproducts";
import Ourclients from "./Ourclients";

const brainDotClasses = [
  "brain-dot-1", "brain-dot-2", "brain-dot-3", "brain-dot-4",
  "brain-dot-5", "brain-dot-6", "brain-dot-7", "brain-dot-8",
];

const Homecomp = () => {
  return (
    <div>
      <div className="relative h-[60xvh] md:h-screen overflow-hidden">
        <ParticlesComponent id="particles" />

        {/* Header Section */}
        <div className="absolute top-0 left-0 w-full h-[80px] md:h-[100px] z-[9999] px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center h-full">
            {/* Logo */}
            <img src={logo} alt="Logo" className="w-[150px] md:w-[250px]" />

            {/* Search Button and Dropdown */}
            <div className="flex gap-4 md:gap-5 text-[30px] md:text-[45px] text-white items-center">
              <Searchbtn />
              <Dropdown />
            </div>
          </div>
        </div>

        {/* Landing Page Main Content */}
        <div className="absolute flex flex-col md:flex-row items-center justify-between left-0 w-full h-screen z-30 top-0 px-4 md:px-12">

          {/* Left text */}
          <div className="w-full md:w-1/2 pt-24 md:pt-40 space-y-2 text-center md:text-left">
            <h1 className="text-white font-Robot text-lg md:text-2xl">Helping Business</h1>
            <h1 className="text-[#00CAFF] font-Robot font-bold text-2xl md:text-5xl">
              Through Technology
            </h1>
            <p className="text-white font-Robot text-sm md:text-base max-w-md mx-auto md:mx-0">
              High-performing software solutions that drive your business forward.
              Accelerate your software development roadmap through custom engineering solutions.
            </p>
            <button className="bg-[#00CAFF] text-white font-Robot px-6 py-2 md:px-12 md:py-3 mt-3 hover:bg-[#f15922] cursor-pointer transition-all rounded-3xl">
              Read More
            </button>
          </div>

          {/* Brain Image + Dots (hidden on mobile) */}
          <div className="relative w-[300px] md:w-[540px] mt-8 md:mt-24 hidden md:block">
            <img src={brainimg} alt="Brain" className="w-full" />
            {brainDotClasses.map((dotClass, index) => (
              <div key={index}>
                <span className={`absolute w-3.5 h-3.5 bg-cyan-500 rounded-full ${dotClass}`}></span>
                <span className={`absolute w-3.5 h-3.5 bg-cyan-500 rounded-full animate-ping-slow ${dotClass}`}></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <Aboutsection />

      {/* Services Section */}
      <ServicesSection />

      {/* Counter Values Section */}
      <Counter />

      {/*Our Products*/}
      <Ourproducts />

      {/*Our Clients Section*/}
      <Ourclients />
    </div>
  );
};

export default Homecomp;
