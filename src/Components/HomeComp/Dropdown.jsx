import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import logo from '../../Assets/Pictures/logo.svg'
import { social_links, webmenu } from "../../Utlis/Menubar";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive);

  return (
    <div>
      {/* Hamburger icon */}
      <li
        className={`menu_toggler z-10 cursor-pointer relative flex flex-col w-9 h-8 justify-between ${isActive ? "active" : ""}`}
        onClick={toggleActive}
      >
        <span className="block bg-black h-1 rounded-md transition-all duration-300 ease-in-out"></span>
        <span className="block bg-black h-1 rounded-md transition-all duration-300 ease-in-out"></span>
        <span className="block bg-black h-1 rounded-md transition-all duration-300 ease-in-out"></span>
      </li>

      {/* Full screen dropdown */}
      <div
        className={`
          fixed inset-x-0 top-0 h-screen bg-white shadow-lg z-40
          transform transition-transform duration-300 ease-in-out
          ${isActive ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/*Drop Down Container */}
        <div className="p-8 z-40 home-banner">

          <div className="w-full flex pr-5 justify-end">
            <button
              className="text-white cursor-pointer text-[20px] flex flex-col items-center"
              onClick={toggleActive}
            >
              Close
              <IoClose className="mt-[-1]" />
            </button>
          </div>

          {/*Logo */}
          <div className="flex z-0 justify-center mt-4">
            <img src={logo} alt="" className="w-[380px]" />
          </div>

          <div className="flex gap-15 justify-center text-[25px] mt-35">
            {
              webmenu?.map((items, index) => {
                return (
                  <div
                    key={index}
                    className="font-Robot"
                  >
                    <NavLink
                    className='hover:text-[#00CAFF]'
                      to={items?.path}>
                      {items?.name}
                    </NavLink>
                  </div>
                )
              })
            }
          </div>

          <div className="flex gap-15 justify-center text-[25px] mt-35">
            {
              social_links?.map((items, index) => {
                return (
                  <div
                    key={index}
                    className="font-Robot hover:text-[#00CAFF]"
                  >
                    <NavLink
                      to={items?.path}>
                      {items?.icon}
                    </NavLink>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dropdown;
