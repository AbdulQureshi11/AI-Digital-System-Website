import { NavLink } from "react-router-dom";
import { servicesitems } from "../../Utlis/Menubar";

const ServicesSection = () => {
    return (
        <div className="bg-[#F5F4F2] w-full px-19 py-20 font-Robot">
            {/* Heading Section */}
            <div className="flex items-start flex-wrap md:flex-nowrap">
                <div className="relative w-full md:w-3/5 mb-5">
                    <h1 className="relative z-10 text-[#002C8B] text-[45px] font-black">
                        Our Services
                    </h1>
                    <span className="absolute left-0 bottom-1 h-[13px] w-[100px] bg-[#f15922] z-0"></span>
                </div>
                <div className="w-full md:w-2/5 text-[#3a3a3a]">
                    <p>
                        We fuel the growth of purpose driven brands through <br />
                        strategy activation, design empowerment, and market <br />
                        adoption.
                    </p>
                </div>
            </div>

            <hr className="mt-5 mb-10" />

            {/* Services Page Links */}
            <div className="grid grid-cols-4 gap-6">
                {/* First 4 items */}
                {servicesitems.slice(0, 4).map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        className="group relative flex items-center bg-white h-[110px] px-5 overflow-hidden transition-all duration-300 hover:bg-blue-800 hover:shadow-lg rounded-md"
                    >
                        <div className="flex items-center gap-4 relative overflow-visible w-full">
                            {/* Image with smooth slide from left */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-10 h-10 absolute left-0 -translate-x-5 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                            />
                            {/* Text with smooth right shift and wrapping */}
                            <span
                                className="text-lg font-semibold text-blue-900 transition-transform duration-500 ease-in-out group-hover:translate-x-12 group-hover:text-white 
                                 flex-shrink-0 max-w-[calc(100%-48px)] whitespace-normal"
                                style={{ wordBreak: "break-word" }}
                            >
                                {item.name}
                            </span>
                        </div>

                        {/* Arrow top-right */}
                        <span className="absolute top-3 right-3 text-blue-900 transform -rotate-45 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:text-white">
                            {item.icon}
                        </span>
                    </NavLink>
                ))}

                {/* Last 3 items wrapped in flex container to center */}
                <div className="col-span-4 flex justify-center gap-6">
                    {servicesitems.slice(4).map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            className="group relative flex items-center bg-white h-[110px] px-5 w-[calc(25%-1.5rem)] max-w-[260px] overflow-hidden transition-all duration-300 hover:bg-blue-800 hover:shadow-lg rounded-md"
                        >
                            <div className="flex items-center gap-4 relative overflow-visible w-full">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-10 h-10 absolute left-0 -translate-x-5 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                                />
                                <span
                                    className="text-lg font-semibold text-blue-900 transition-transform duration-500 ease-in-out group-hover:translate-x-12 group-hover:text-white
                                     flex-shrink-0 max-w-[calc(100%-48px)] whitespace-normal"
                                    style={{ wordBreak: "break-word" }}
                                >
                                    {item.name}
                                </span>
                            </div>

                            <span className="absolute top-3 right-3 text-blue-900 transform -rotate-45 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:text-white">
                                {item.icon}
                            </span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
