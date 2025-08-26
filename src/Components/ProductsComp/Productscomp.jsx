import Ourproducts from "../HomeComp/Ourproducts";
import Header from "../../Pages/Navigation/Header";
import { Link } from "react-router-dom";

const Produtcscomp = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Header Section */}
      <div>
        <Header />
      </div>

      {/* Products Section */}
      <div className="py-20">
        <Ourproducts />
      </div>

      {/* Why Choose Us Section (Product-Focused CTA) */}
      <div className="bg-[#F5F4F2] w-full px-6 md:px-19 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Heading + Subtitle */}
          <div className="flex items-start flex-wrap md:flex-nowrap mb-10">
            <div className="relative w-full md:w-3/5 mb-6 md:mb-0 text-center md:text-left">
              <h1 className="relative z-10 text-[#002C8B] text-[32px] sm:text-[42px] font-RobotB font-black">
                Bring Your Idea to Life with Us
              </h1>
              <span className="absolute md:left-0 md:top-10 top-7 left-14 md:h-[13px] md:w-[120px] h-[13px] w-[90px] bg-[#f15922] z-0"></span>
            </div>
            <div className="w-full md:w-2/5 text-[#3a3a3a] text-center md:text-left">
              <p className="font-Robot text-lg">
                Have a product idea but don’t know where to start? Our expert team specializes in turning concepts into fully functional, custom-built products that meet your exact needs. We guide you from idea to launch with precision and creativity.
              </p>
            </div>
          </div>

          {/* Content + CTA */}
          <div className="text-center space-y-6">
            <p className="text-gray-600 font-Robot text-lg leading-relaxed max-w-3xl mx-auto">
              Every project we take on is treated with care, focus, and attention to detail.  
              We combine innovation, usability, and quality to ensure your product not only works perfectly but also makes a lasting impression.  
              Ready to see your idea become reality? Partner with us and let's create something amazing together.
            </p>
            <Link
              onClick={scrollToTop}
              to="/contactus">
              <button className="border-2 border-[#f15922] text-[#f15922] font-Robot px-10 py-3 mt-9 hover:text-white hover:bg-[#f15922] cursor-pointer transition-all rounded-3xl">
                Contact Us & Start Your Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produtcscomp;
