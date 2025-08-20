import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose, IoSearch } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { servicesitems } from "../../Utlis/Serviceslist";

const Searchbtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Search Icon */}
      <div className="relative z-20">
        <CiSearch
          className="cursor-pointer"
          onClick={toggleSidebar}
          title="Toggle Search Panel"
        />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10 overlay-blur"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-screen bg-[#002C8B] w-[300px] transform transition-transform duration-300 ease-in-out z-30
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-4">
          {/* Close Button */}
          <div className="w-full flex justify-end">
            <button
              className="text-white font-Robot cursor-pointer text-[16px] flex flex-col items-center"
              onClick={toggleSidebar}
            >
              Close
              <IoClose className="mt-[-1]" />
            </button>
          </div>

          {/* Search Input */}
          <div className="flex items-center mt-6 w-full">
            <input
              type="text"
              className="w-[80%] border-b-2 font-Robot border-white text-[14px] px-2 placeholder:text-white bg-transparent focus:outline-none"
              placeholder="Search here ..."
              autoFocus={isOpen}
            />
            <div className="w-1/5 flex justify-center">
              <IoSearch className="text-white text-lg" />
            </div>
          </div>

          {/* Services Title */}
          <div className="text-[18px] mt-6 text-white mb-3">
            Popular Search
          </div>

          {/* Services List in 2-column grid */}
          <div className="grid grid-cols-2 gap-2">
            {servicesitems.map((item) => (
              <NavLink
                key={item.id}
                to={`/services/${item.slug}`}
                onClick={toggleSidebar}
                className="bg-white rounded-md hover:bg-[#00CAFF] hover:text-white transition-all text-black text-[10px] px-2 py-2 text-center"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbtn;
