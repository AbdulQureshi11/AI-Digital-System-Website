import { useParams, Link } from 'react-router-dom';
import { servicesitems } from '../../Utlis/Serviceslist';
import Header from '../../Pages/Navigation/Header';
import QuickLinks from './QuickLinks/QuickLinks';

const ServicesDetail = () => {
  const { slug } = useParams(); // dynamic slug
  const service = servicesitems.find(item => item.slug === slug);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!service) {
    return <div className="text-center py-20 text-gray-500">Service Not Found</div>;
  }

  return (
    <div className="min-h-screen font-Robot text-gray-900">
      <Header />

      {/* Top Border */}
      <div className="border-t border-gray-300"></div>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-10 md:items-start text-left">

          {/* Text Section */}
          <div className="flex-1 space-y-6 order-1">
            <div className="relative inline-block mb-5">
              <h1 className="relative z-10 text-[#002C8B] text-[28px] md:text-[45px] font-black font-RobotB">
                {service.name}
              </h1>
              <span className="absolute left-0 top-7 md:top-11 h-[6px] md:h-[13px] w-[80px] md:w-[120px] bg-[#f15922] z-0"></span>
            </div>

            {service.detail && (
              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
                {service.detail}
              </p>
            )}
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center order-2 md:order-2">
            <img
              src={service.image}
              alt={service.name}
              className="w-[340px] md:w-[550px] h-auto rounded-2xl md:rounded-4xl object-contain shadow-lg"
            />
          </div>
        </div>

        {/* Quick Links (Mobile) */}
        <div className="w-full order-3 mt-8 md:hidden">
          <QuickLinks />
        </div>

        {/* Quick Links (Desktop) */}
        <div className="w-full mt-16 hidden md:block">
          <QuickLinks />
        </div>

        <hr className="border-t border-gray-300" />

        {/* Why Choose Section (centered) */}
        <div className="bg-gray-100 py-16 px-6 md:px-19">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002C8B]">
              {service.head}
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              {service.whyChoose}
            </p>

            <Link to="/contactus" onClick={scrollToTop}>
              <button className="border-2 border-[#f15922] text-[#f15922] font-Robot px-8 md:px-15 py-2 mt-6 md:mt-9 hover:text-white hover:bg-[#f15922] cursor-pointer transition-all rounded-3xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetail;
