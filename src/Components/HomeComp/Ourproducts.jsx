import { NavLink } from "react-router-dom";
import { ourproducts } from "../../Utlis/Menubar";

const Ourproducts = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

  return (
    <div className="bg-white w-full px-19">
      <div className="max-w-7xl mx-auto">
        {/* First Row - Title + Paragraph + First Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Title with underline style */}
          <div>
            <div className="relative inline-block">
              <h1 className="relative z-10 text-[#002C8B] text-[45px] font-black font-RobotB">
                Our Products
              </h1>
              <span className="absolute left-0 bottom-3 h-[13px] w-[150px] bg-[#f15922] z-0"></span>
            </div>
            <p className="text-gray-600 font-Robot leading-relaxed mt-4">
              These are the products on our panel and adding more
            </p>
          </div>

          {/* First Two Product Cards */}
          {ourproducts.slice(0, 2).map((item, idx) => (
            <NavLink
              to={item.path}
              key={idx}
              onClick={scrollToTop}  
              className="relative group overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[370px] object-cover"
              />
              <div className="absolute left-0 right-0 font-Robot bottom-0 bg-[rgba(0,44,139,0.86)] w-[90%] mx-auto h-[20%] flex flex-col items-center justify-start text-center px-6 py-4 transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:justify-center">
                <h2 className="text-white text-xl mb-24 transition-all duration-300 group-hover:mb-4 group-hover:text-2xl">
                  {item.name}
                </h2>
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.dis}
                </p>
                <button className="mt-4 bg-white cursor-pointer text-orange-500 rounded-full px-6 py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-500 hover:text-white">
                  Read More
                </button>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Second Row - Remaining Three Cards */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourproducts.slice(2, 5).map((item, idx) => (
            <NavLink
              to={item.path}
              key={idx}
              onClick={scrollToTop}  
              className="relative group overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[370px] object-cover"
              />
              <div className="absolute left-0 font-Robot right-0 bottom-0 bg-[rgba(0,44,139,0.86)] w-[90%] mx-auto h-[20%] flex flex-col items-center justify-start text-center px-6 py-4 transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:justify-center">
                <h2 className="text-white text-xl mb-24 transition-all duration-300 group-hover:mb-4 group-hover:text-2xl">
                  {item.name}
                </h2>
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.dis}
                </p>
                <button className="mt-4 cursor-pointer bg-white text-orange-500 rounded-full px-6 py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-500 hover:text-white">
                  Read More
                </button>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourproducts;
