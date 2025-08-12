import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose, IoSearch } from "react-icons/io5";
import { sidebar_pages } from "../../Utlis/Menubar";
import { NavLink } from 'react-router-dom'

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
          fixed top-0 right-0 h-screen bg-[#002C8B] w-[380px] transform transition-transform duration-300 ease-in-out z-30
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-4">
          {/* Close Button */}
          <div className="w-full flex justify-end">
            <button
              className="text-white font-Robot cursor-pointer text-[20px] flex flex-col items-center"
              onClick={toggleSidebar}
            >
              Close
              <IoClose className="mt-[-1]" />
            </button>
          </div>

          {/* Search Input */}
          <div className="flex items-center mt-10 w-full">
            <input
              type="text"
              className="w-[95%] border-b-2 font-Robot border-white text-[20px] px-2 placeholder:text-white bg-transparent focus:outline-none"
              placeholder="Search here ..."
              autoFocus={isOpen}
            />
            <div className="w-1/5 flex justify-center">
              <IoSearch className="text-white text-xl" />
            </div>
          </div>

          {/*Popular Search */}
          <div className="text-[25px] mt-10">
            <h1>Popular Searches
            </h1>
          </div>

          {/*Pages */}
          <div className="mt-3 flex flex-wrap">
            {sidebar_pages?.map((items, index) => {
              return (
                <div
                  key={index}
                  className="flex-[0_0_48%] font-Robot text-[14px] p-2"
                >
                  <NavLink className='bg-white rounded-md hover:bg-[#00CAFF] hover:text-white transition-all text-black px-3 py-1 block text-center' to={items?.path}>
                    {items?.name}
                  </NavLink>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbtn;
