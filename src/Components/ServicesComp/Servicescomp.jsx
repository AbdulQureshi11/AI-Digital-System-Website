import { Link } from 'react-router-dom';
import ServicesSection from "../HomeComp/ServicesSection";
import Header from "../../Pages/Navigation/Header";

const Servicescomp = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-Robot">
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Services Section */}
      <div>
        <ServicesSection />
      </div>

      {/* Why Choose Us Section (matching ServicesSection design) */}
      <div className="bg-[#F5F4F2] w-full px-6 md:px-19 py-20">
        <hr className="mb-10" />
        <div className="max-w-6xl mx-auto">
          {/* Heading + Subtitle */}
          <div className="flex items-start flex-wrap md:flex-nowrap mb-10">
            <div className="relative w-full md:w-3/5 mb-6 md:mb-0 text-center md:text-left">
              <h1 className="relative z-10 text-[#002C8B] text-[32px] sm:text-[42px] font-RobotB font-black">
                Why Choose Us?
              </h1>
              <span className="absolute md:left-0 md:top-10 top-7 left-14 md:h-[13px] md:w-[120px] h-[13px] w-[90px] bg-[#f15922] z-0"></span>
            </div>
            <div className="w-full md:w-2/5 text-[#3a3a3a] text-center md:text-left">
              <p>
                We go beyond providing services — we create impactful solutions that
                drive measurable growth. With expertise, innovation, and a client-first
                approach, we help businesses achieve sustainable success in a competitive world.
              </p>
            </div>
          </div>

          {/* Content + CTA */}
          <div className="text-center space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our dedicated team ensures every project is delivered with precision,
              creativity, and a focus on long-term impact. Partnering with us means
              choosing reliability, scalability, and a future-ready strategy.
            </p>
            <Link
              onClick={scrollToTop}
              to="/contactus">
              <button className='border-2 border-[#f15922] text-[#f15922] font-Robot px-15 py-3 mt-9 hover:text-white hover:bg-[#f15922] cursor-pointer transition-all rounded-3xl'>
                Let’s Work Together
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicescomp;
