import { NavLink } from "react-router-dom";
import { servicesitems } from "../../Utlis/Serviceslist";

const ServicesSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F5F4F2] w-full px-6 md:px-19 py-12 md:py-20 font-Robot">
      {/* Heading + Text */}
      <div className="flex flex-col md:flex-row md:items-start mb-10 gap-4">
        {/* Heading */}
        <div className="relative w-full md:w-3/5">
          <h1 className="relative z-10 text-[#002C8B] text-[32px] md:text-[45px] font-RobotB font-black mb-2 md:mb-0">
            Our Services
          </h1>
          <span className="absolute left-0 bottom-4 md:bottom-2 h-[8px] md:h-[13px] w-[80px] md:w-[100px] bg-[#f15922] z-0"></span>
        </div>

        {/* Text */}
        <div className="w-full md:w-2/5 text-[#3a3a3a] text-[15px] md:text-base leading-6 md:leading-7 break-words whitespace-normal">
          <p>
            We fuel the growth of purpose driven brands through strategy
            activation, design empowerment, and market adoption.
          </p>
        </div>
      </div>

      <hr className="mb-10" />

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {servicesitems.slice(0, 4).map((item) => (
          <NavLink
            key={item.id}
            to={`/services/${item.slug}`}
            onClick={scrollToTop}
            className="group relative flex items-center bg-white h-[100px] md:h-[110px] px-5 overflow-hidden transition-all duration-300 hover:bg-blue-800 hover:shadow-lg rounded-md"
          >
            <div className="flex items-center gap-4 relative overflow-visible w-full">
              <img
                src={item.icon}
                alt={item.name}
                className="w-9 h-9 md:w-10 md:h-10 absolute left-0 -translate-x-5 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
              />
              <span
                className="text-base md:text-lg font-semibold text-blue-900 transition-transform duration-500 ease-in-out group-hover:translate-x-12 group-hover:text-white 
                flex-shrink-0 max-w-[calc(100%-48px)] whitespace-normal break-words"
              >
                {item.name}
              </span>
            </div>
            <span className="absolute top-3 right-3 text-blue-900 transform -rotate-45 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:text-white">
              {item.arrow}
            </span>
          </NavLink>
        ))}

        {/* Next Row */}
        {servicesitems.slice(4, 8).map((item) => (
          <NavLink
            key={item.id}
            to={`/services/${item.slug}`}
            onClick={scrollToTop}
            className="group relative flex items-center bg-white h-[100px] md:h-[110px] px-5 overflow-hidden transition-all duration-300 hover:bg-blue-800 hover:shadow-lg rounded-md"
          >
            <div className="flex items-center gap-4 relative overflow-visible w-full">
              <img
                src={item.icon}
                alt={item.name}
                className="w-9 h-9 md:w-10 md:h-10 absolute left-0 -translate-x-5 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
              />
              <span
                className="text-base md:text-lg font-semibold text-blue-900 transition-transform duration-500 ease-in-out group-hover:translate-x-12 group-hover:text-white 
                flex-shrink-0 max-w-[calc(100%-48px)] whitespace-normal break-words"
              >
                {item.name}
              </span>
            </div>
            <span className="absolute top-3 right-3 text-blue-900 transform -rotate-45 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:text-white">
              {item.arrow}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
