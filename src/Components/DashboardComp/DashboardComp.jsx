import { useState } from "react";
import { dashboardmenu } from "../../Utlis/Dashboard";
import logo from "../../Assets/Pictures/logo.svg";
import HomeSlide from "./HomeSlide";
import AboutSlide from "./AboutSlide";
import ServicesSlide from "./ServicesSlide";
import ProductSlide from "./ProductSlide";

import { Link, useNavigate } from "react-router-dom";
import Background from "../Background/Background";
import ParticlesBg from "../ParticalsComp/ParticalsBg";
import { motion, AnimatePresence } from "framer-motion";

const DashboardComp = () => {
  const [selected, setSelected] = useState("Home");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // redirect to home
  };

  const content = {
    "Home": <HomeSlide />,
    "About Us": <AboutSlide />,
    "Services": <ServicesSlide />,
    "Product": <ProductSlide />,
  };

  // Sidebar animation
  const sidebarVariants = {
    hidden: { x: -250, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Menu item animation
  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  // Main content animation
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Sidebar */}
      <motion.aside
        className="w-[22%] h-screen text-white flex flex-col shadow-2xl z-20 relative"
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
      >
        <Background>
          <ParticlesBg id="particles" />
        </Background>

        {/* Logo / Title */}
        <motion.div
          className="flex flex-col items-center justify-center p-6 border-b border-gray-700"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
        >
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-40 mb-3 drop-shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </Link>
          <h1 className="text-2xl font-bold tracking-wide uppercase font-RobotB text-[#00CAFF] animate-pulse">
            Dashboard
          </h1>
        </motion.div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-3 overflow-y-auto">
          {dashboardmenu?.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(item?.name)}
              className={`flex items-center gap-3 px-5 py-3 rounded-lg font-Robot cursor-pointer transition-all duration-300
                ${selected === item?.name
                  ? "bg-gradient-to-r from-[#00CAFF] to-[#38bdf8] text-blue-900 font-semibold shadow-md scale-105"
                  : "hover:bg-blue-800/50 hover:scale-105"
                }`}
              variants={itemVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              whileTap={{ scale: 0.95 }}
            >
              <h2 className="text-xl">{item?.icon}</h2>
              <p className="text-base">{item?.name}</p>
            </motion.div>
          ))}
        </nav>

        {/* Footer inside sidebar */}
        <div className="p-4 border-t border-gray-700 mt-auto flex flex-col gap-3">
          <motion.button
            onClick={handleLogout}
            className="w-full py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition text-white rounded-lg shadow-lg font-Robot"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
          <p className="text-[12px] text-gray-400 text-center">
            © 2023 AI Digital Systems, All Rights Reserved
          </p>
        </div>
      </motion.aside>

      {/* Main Content */}
      <motion.main
        className="flex-1 bg-gray-50/95 p-8 m-4 rounded-2xl shadow-xl overflow-y-auto relative"
        key={selected}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="h-full"
          >
            {content[selected]}
          </motion.div>
        </AnimatePresence>
      </motion.main>
    </div>
  );
};

export default DashboardComp;
