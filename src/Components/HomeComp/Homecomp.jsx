import ParticlesComponent from "../ParticalsComp/ParticalsBg";
import logo from "../../Assets/Pictures/logo.svg";
import Searchbtn from "./Searchbtn";
import Dropdown from "./Dropdown";
import brainimg from "../../Assets/Pictures/brain_img.svg";
import "../../index.css"; // make sure styles are loaded
import Aboutsection from "./Aboutsection";
import ServicesSection from "./ServicesSection";
import Counter from "./Counter";
import Ourproducts from "./Ourproducts";
import Ourclients from "./Ourclients";

const brainDotClasses = [
  "brain-dot-1", "brain-dot-2", "brain-dot-3", "brain-dot-4", "brain-dot-5", "brain-dot-6", "brain-dot-7", "brain-dot-8",
];

const Homecomp = () => {
  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <ParticlesComponent id="particles" />

        {/* Header Section */}
        <div className="absolute top-0 left-0 w-full h-[100px] z-[9999] px-19">
          <div className="flex w-full h-full">
            <div className="flex w-[50%] h-[100%]">
              <img src={logo} alt="Logo" className="w-[250px]" />
            </div>
            {/*Search Button and Drop Down Section */}
            <div className="flex justify-end gap-5 text-[45px] text-white items-center w-[50%] h-[100%]">
              <Searchbtn />
              <Dropdown />
            </div>
          </div>
        </div>

        {/* Landing Page Main Content */}
        <div className="absolute flex left-0 w-full h-screen z-30 top-0 px-19">
          {/* Left text */}
          <div className="w-[50%] h-[100%] pt-70 space-y-1">
            <h1 className="text-white font-Robot text-[20px]">Helping Business</h1>
            <h1 className="text-[#00CAFF] font-Robot font-bold text-[40px]">
              Through Technology
            </h1>
            <p className="text-white font-Robot text-[16px]">
              High-performing software solutions that drive your business forward.
              Accelerate your software development roadmap through custom engineering solutions.
            </p>
            <button className="bg-[#00CAFF] text-white font-Robot px-12 py-3 mt-3 hover:bg-[#f15922] cursor-pointer transition-all rounded-3xl">
              Read More
            </button>
          </div>

          {/* Brain Image + Dots */}
          <div className="relative w-[540px] mt-25 overflow-hidden z-10">
            <img src={brainimg} alt="Brain" className="w-full" />

            {brainDotClasses.map((dotClass, index) => (
              <div key={index}>
                {/* Base dot */}
                <span
                  className={`absolute w-3.5 h-3.5 bg-cyan-500 rounded-full ${dotClass}`}
                ></span>

                {/* Blinking overlay */}
                <span
                  className={`absolute w-3.5 h-3.5 bg-cyan-500 rounded-full animate-ping-slow ${dotClass}`}
                ></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div>
        <Aboutsection />
      </div>
      {/* Services Section */}
      <div>
        <ServicesSection />
      </div>
      {/* Counter Values Section */}
      <div>
        <Counter />
      </div>
      {/*Our Products*/}
      <div>
        <Ourproducts />
      </div>
      {/*Our Clients Section*/}
      <div>
        <Ourclients />
      </div>
    </div>
  );
};

export default Homecomp;
