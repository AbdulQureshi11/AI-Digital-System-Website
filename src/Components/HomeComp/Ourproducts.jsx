import { NavLink } from "react-router-dom";
import { ourproducts } from "../../Utlis/Productlist";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Ourproducts = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white w-full px-6 sm:px-8 md:px-19">
      <div className="max-w-7xl mx-auto">
        {/* Heading for Mobile Only */}
        <div className="mb-6 block md:hidden">
          <div className="relative inline-block">
            <h1 className="relative z-10 text-[#002C8B] text-[40px] font-black font-RobotB ">
              Our Products
            </h1>
            <span className="absolute left-0 bottom-2 h-[12px] w-[120px] bg-[#f15922] z-0"></span>
          </div>
          <p className="text-gray-600 font-Robot leading-relaxed mt-3 text-base">
            These are the products on our panel and adding more
          </p>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          <Swiper spaceBetween={15} slidesPerView={1.15} loop={true} className="mySwiper">
            {ourproducts.map((item, idx) => (
              <SwiperSlide key={idx}>
                <ProductCard item={item} scrollToTop={scrollToTop} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 items-start">
          {/* Left Column: Heading + Paragraph */}
          <div>
            <div className="relative inline-block mb-6">
              <h1 className="relative z-10 text-[#002C8B] text-[45px] font-black font-RobotB mt-25">
                Our Products
              </h1>
              <span className="absolute left-0 bottom-3 h-[13px] w-[150px] bg-[#f15922] z-0"></span>
            </div>
            <p className="text-gray-600 font-Robot leading-relaxed mt-4">
              These are the products on our panel and adding more
            </p>
          </div>

          {/* First Two Products */}
          {ourproducts.slice(0, 2).map((item, idx) => (
            <ProductCard key={idx} item={item} scrollToTop={scrollToTop} />
          ))}
        </div>

        {/* Remaining Products in Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mt-8">
          {ourproducts.slice(2).map((item, idx) => (
            <ProductCard key={idx} item={item} scrollToTop={scrollToTop} />
          ))}
        </div>
      </div>
    </div>
  );
};


const ProductCard = ({ item, scrollToTop }) => {
  return (
    <div className="relative group overflow-hidden shadow-lg cursor-pointer w-full">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-[320px] md:h-[370px] object-cover"
      />
      {/* Overlay */}
      <div className="absolute left-0 right-0 font-Robot bottom-0 bg-[rgba(0,44,139,0.86)] w-[93%] md:w-[95%] mx-auto h-[24%] md:h-[20%] flex flex-col items-center justify-start text-center px-4 py-4 transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:justify-center">
        <h2 className="text-white text-xl md:text-xl mb-10 md:mb-24 transition-all duration-300 group-hover:mb-4 group-hover:text-2xl">
          {item.name}
        </h2>
        <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.dis}
        </p>
        <NavLink
          to={`/products/${item.slug}`}
          onClick={scrollToTop}
          className="mt-4 bg-white cursor-pointer text-orange-500 rounded-xl px-5 md:px-6 py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-500 hover:text-white"
        >
          Read More
        </NavLink>
      </div>
    </div>
  );
};

export default Ourproducts;
