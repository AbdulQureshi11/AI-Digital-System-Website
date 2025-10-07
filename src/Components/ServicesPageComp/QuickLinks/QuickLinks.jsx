import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllServices } from "../../../features/counter/ServiceSlice";
import { FaArrowRight } from "react-icons/fa";

const QuickLinks = () => {
  const dispatch = useDispatch();
  const { services, loading, error } = useSelector((s) => s.service);

  useEffect(() => {
    if (!services || services.length === 0) {
      dispatch(getAllServices());
    }
  }, [dispatch, services]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (loading) {
    return (
      <p className="text-center py-6 text-gray-500">
        Loading quick links...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center py-6 text-red-500">
        Failed to load services: {error}
      </p>
    );
  }

  if (!services || services.length === 0) {
    return (
      <p className="text-center py-6 text-gray-500">No services available.</p>
    );
  }

  return (
    <div className="bg-[#F5F4F2] px-6 md:px-8 py-10 font-Robot rounded-lg">
      <h3 className="text-2xl font-bold text-[#002C8B] mb-8">Quick Links</h3>

      {/* ✅ Same design as ServicesSection (4 per row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((item) => (
          <NavLink
            key={item.id}
            to={`/services/${item.slug}`}
            onClick={scrollToTop}
            className="group relative flex items-center bg-white 
                       h-[100px] md:h-[110px] px-5 
                       overflow-hidden transition-all duration-300 
                       hover:bg-blue-800 hover:shadow-lg rounded-md"
          >
            <div className="flex items-center gap-4 relative overflow-visible w-full">
              {item.icon && (
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-9 h-9 md:w-10 md:h-10 absolute left-0 
                             -translate-x-5 opacity-0 transition-all duration-500 
                             ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                />
              )}
              <span
                className="text-base md:text-lg font-semibold text-blue-900 
                           transition-transform duration-500 ease-in-out 
                           group-hover:translate-x-12 group-hover:text-white 
                           flex-shrink-0 max-w-[calc(100%-48px)] 
                           whitespace-normal break-words"
              >
                {item.name}
              </span>
            </div>
            <span
              className="absolute top-3 right-3 text-blue-900 transform -rotate-45 
                         transition-all duration-500 group-hover:rotate-0 group-hover:text-white"
            >
              <FaArrowRight />
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
