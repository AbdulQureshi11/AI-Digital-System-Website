import { NavLink } from "react-router-dom";
import { servicesitems } from "../../../Utlis/Serviceslist";

const ServicesSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F5F4F2] w-full px-6 md:px-19 py-12 md:py-20 font-Robot">
   
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
