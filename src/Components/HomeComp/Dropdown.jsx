import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import logo from "../../Assets/Pictures/logo.svg";
import { social_links, webmenu } from "../../Utlis/Menubar";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive);

  return (
    <div>
      {/* Hamburger icon */}
      <div
        className={`menu_toggler z-10 cursor-pointer relative flex flex-col w-9 h-8 justify-between ${isActive ? "active" : ""}`}
        onClick={toggleActive}
      >
        <span className="block bg-black h-1 rounded-md transition-all duration-300 ease-in-out"></span>
        <span className="block bg-black h-1 rounded-md transition-all duration-300 ease-in-out"></span>
        <span className="block bg-black h-1 rounded-md transition-all duration-300 ease-in-out"></span>
      </div>

      {/* Full screen dropdown */}
      <div
        className={`
          fixed inset-0 shadow-lg z-40 home-banner 
          transform transition-transform duration-300 ease-in-out
          ${isActive ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Drop Down Container */}
        <div className="p-6 w-full h-full flex flex-col justify-between overflow-y-auto">

          {/* Close Button */}
          <div className="w-full flex justify-end">
            <button
              className="text-white cursor-pointer text-[20px] flex flex-col items-center"
              onClick={toggleActive}
            >
              <span className="mt-1">Close</span>
              <IoClose size={26} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex justify-center mt-4">
            <img src={logo} alt="logo" className="w-[220px] md:w-[380px]" />
          </div>

          {/* Menu Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-center text-[18px] md:text-[24px] mt-10">
            {webmenu?.map((items, index) => (
              <div key={index} className="font-Robot">
                <NavLink
                  className="hover:text-[#00CAFF]"
                  to={items?.path}
                  onClick={toggleActive}
                >
                  {items?.name}
                </NavLink>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 md:gap-12 text-[20px] md:text-[25px] mt-10 mb-6">
            {social_links?.map((items, index) => (
              <div key={index} className="font-Robot hover:text-[#00CAFF]">
                <NavLink to={items?.path} onClick={toggleActive}>
                  {items?.icon}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
