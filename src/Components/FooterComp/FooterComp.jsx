import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/Pictures/logo.svg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6"; // dropdown arrow
import { ourOfficeMenu, webmenu } from "../../Utlis/Menubar";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../../features/counter/ServiceSlice";

// Smooth scroll to top with easing
const smoothScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const FooterComp = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const dispatch = useDispatch();
    const { services, loading } = useSelector((s) => s.service);

    useEffect(() => {
        dispatch(getAllServices());
    }, [dispatch]);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    // Close dropdown after link click
    const handleLinkClick = () => {
        smoothScrollToTop();
        setOpenDropdown(null);
    };

    return (
        <div>
            <div className="bg-[#04102B] px-6 md:px-19 py-10 md:py-15 w-full flex flex-col md:flex-row md:justify-between md:space-x-10 space-y-10 md:space-y-0">
                {/* Logo Section with Button */}
                <div className="flex-1 text-left">
                    <img src={logo} alt="" className="w-[250px] mb-[-15px] md:w-[90%]" />
                    <p className="font-RobotL text-white text-[20px] md:text-[18px] mt-6 md:mt-12">
                        We provide Technological services
                    </p>

                    <button
                        className="mt-6 inline-block cursor-pointer px-10 py-2 border border-[#f15922] text-[#f15922] font-Robot rounded-3xl hover:text-white hover:bg-[#f15922] transition-all"
                        onClick={smoothScrollToTop}
                    >
                        Read More
                    </button>
                </div>

                {/* Our Services Section */}
                <div className="flex-1 text-left text-white space-y-3 font-RobotL">
                    {/* Mobile */}
                    <div
                        className={`md:hidden ${openDropdown !== "services" ? "border-b border-gray-600" : ""
                            }`}
                    >
                        <button
                            onClick={() => toggleDropdown("services")}
                            className="w-full flex justify-between items-center py-2"
                        >
                            <span className="text-[#00CAFF] font-Robot text-[22px]">
                                Our Services
                            </span>
                            <FaChevronDown
                                className={`transition-transform duration-300 ${openDropdown === "services" ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${openDropdown === "services"
                                ? "max-h-96 opacity-100 mt-3 pt-3 "
                                : "max-h-0 opacity-0"
                                }`}
                        >
                            {loading ? (
                                <p className="text-gray-400">Loading...</p>
                            ) : services?.length === 0 ? (
                                <p className="text-gray-400">No services available.</p>
                            ) : (
                                services.map((item) => (
                                    <NavLink
                                        key={item.id}
                                        className="block hover:text-[#00CAFF] mb-4 text-[17px]"
                                        to={`/services/${item.slug}`}
                                        onClick={handleLinkClick}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Desktop */}
                    <div className="hidden md:block">
                        <h1 className="text-[#00CAFF] font-Robot text-[22px] md:text-[25px]">
                            Our Services
                        </h1>
                        <div className="mt-3 space-y-4">
                            {loading ? (
                                <p className="text-gray-400">Loading...</p>
                            ) : services?.length === 0 ? (
                                <p className="text-gray-400">No services available.</p>
                            ) : (
                                services.map((item) => (
                                    <NavLink
                                        key={item.id}
                                        className="hover:text-[#00CAFF] block"
                                        to={`/services/${item.slug}`}
                                        onClick={smoothScrollToTop}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="flex-1 text-left text-white space-y-3 font-RobotL">
                    {/* Mobile */}
                    <div
                        className={`md:hidden ${openDropdown !== "quicklinks" ? "border-b border-gray-600" : ""
                            }`}
                    >
                        <button
                            onClick={() => toggleDropdown("quicklinks")}
                            className="w-full flex justify-between items-center py-2"
                        >
                            <span className="text-[#00CAFF] font-Robot text-[22px]">
                                Quick Links
                            </span>
                            <FaChevronDown
                                className={`transition-transform duration-300 ${openDropdown === "quicklinks" ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${openDropdown === "quicklinks"
                                ? "max-h-96 opacity-100 mt-3 pt-3"
                                : "max-h-0 opacity-0"
                                }`}
                        >
                            {webmenu?.map((items, index) => (
                                <NavLink
                                    key={index}
                                    className="hover:text-[#00CAFF] block mb-4 text-[17px]"
                                    to={items?.path}
                                    onClick={handleLinkClick}
                                >
                                    {items?.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Desktop */}
                    <div className="hidden md:block">
                        <h1 className="text-[#00CAFF] font-Robot text-[22px] md:text-[25px]">
                            Quick Links
                        </h1>
                        <div className="mt-3 space-y-4">
                            {webmenu?.map((items, index) => (
                                <NavLink
                                    key={index}
                                    className="hover:text-[#00CAFF] block"
                                    to={items?.path}
                                    onClick={smoothScrollToTop}
                                >
                                    {items?.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Our Office Section */}
                <div className="flex-1 text-left text-white space-y-4 font-RobotL">
                    {/* Mobile */}
                    <div
                        className={`md:hidden ${openDropdown !== "office" ? "border-b  border-gray-600" : ""
                            }`}
                    >
                        <button
                            onClick={() => toggleDropdown("office")}
                            className="w-full flex justify-between items-center py-2"
                        >
                            <span className="text-[#00CAFF] font-Robot text-[22px]">
                                Our Office
                            </span>
                            <FaChevronDown
                                className={`transition-transform duration-300 ${openDropdown === "office" ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${openDropdown === "office"
                                ? "max-h-96 opacity-100 mt-3 pt-3"
                                : "max-h-0 opacity-0"
                                }`}
                        >
                            {ourOfficeMenu?.map((items, index) => (
                                <div key={index} className="flex items-center gap-2 mb-4">
                                    <h1 className="text-[#00CAFF] text-[20px] md:text-[20px]">
                                        {items?.icon}
                                    </h1>
                                    <h1 className="text-[17px]">
                                        {items?.id === 4 ? (
                                            <NavLink
                                                to={items?.path}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-[#00CAFF]"
                                                onClick={handleLinkClick}
                                            >
                                                {items?.name}
                                            </NavLink>
                                        ) : (
                                            <h1>{items?.name}</h1>
                                        )}
                                    </h1>
                                </div>
                            ))}

                            {/* Social Icons */}
                            <div className="flex gap-4 text-[20px] mt-6">
                                <Link
                                    to="https://www.facebook.com/aidigisys/"
                                    target="_blank"
                                    onClick={handleLinkClick}
                                >
                                    <h1 className="hover:text-[#00CAFF] transition-all">
                                        <FaFacebookF />
                                    </h1>
                                </Link>
                                <Link
                                    to="https://www.linkedin.com/company/aidsys/"
                                    target="_blank"
                                    onClick={handleLinkClick}
                                >
                                    <h1 className="hover:text-[#00CAFF] transition-all">
                                        <FaLinkedinIn />
                                    </h1>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Desktop */}
                    <div className="hidden md:block">
                        <h1 className="text-[#00CAFF] font-Robot text-[22px] md:text-[25px]">
                            Our Office
                        </h1>
                        <div className="mt-3 space-y-4">
                            {ourOfficeMenu?.map((items, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <h1 className="text-[#00CAFF] text-[18px] md:text-[20px]">
                                        {items?.icon}
                                    </h1>
                                    {items?.id === 4 ? (
                                        <NavLink
                                            to={items?.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#00CAFF]"
                                            onClick={smoothScrollToTop}
                                        >
                                            {items?.name}
                                        </NavLink>
                                    ) : (
                                        <h1>{items?.name}</h1>
                                    )}
                                </div>
                            ))}

                            {/* Social Icons */}
                            <div className="flex gap-4 text-[20px] mt-6">
                                <Link to="https://www.facebook.com/aidigisys/" target="_blank">
                                    <h1 className="hover:text-[#00CAFF] transition-all">
                                        <FaFacebookF />
                                    </h1>
                                </Link>
                                <Link
                                    to="https://www.linkedin.com/company/aidsys/"
                                    target="_blank"
                                >
                                    <h1 className="hover:text-[#00CAFF] transition-all">
                                        <FaLinkedinIn />
                                    </h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-[#002C8B] font-Robot  text-white flex justify-center items-center w-full h-[40px] text-center px-2">
                <p>© 2023 AI Digital Systems, All Rights Reserved</p>
            </div>
        </div>
    );
};

export default FooterComp;
