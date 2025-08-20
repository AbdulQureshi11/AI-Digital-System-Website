import { Link } from 'react-router-dom';
import DigitalCommunication from '../../../Assets/Pictures/product4.png'
import Header from "../../../Pages/Navigation/Header";

const DigitalCommunicateComp = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen font-Robot">
      {/* Navbar */}
      <Header />

      {/* Product Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Product Image */}
        <div>
          <img
            src={DigitalCommunication}
            alt="Digital Communication"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Product Content */}
        <div className="space-y-6">
          <div className="relative mb-5 inline-block">
            <h1 className="relative z-10 text-[#002C8B] text-[45px] font-black font-RobotB">
              Digital Communication
            </h1>
            <span className="absolute left-0 bottom-2 h-[13px] w-[120px] bg-[#f15922] z-0"></span>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Revolutionize the way your organization connects with our AI-powered 
            Digital Communication platform. From instant messaging and video 
            conferencing to secure document sharing, this solution ensures 
            seamless collaboration and enhanced productivity.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Real-time messaging & video conferencing</li>
            <li>AI-assisted meeting scheduling</li>
            <li>Secure file sharing & cloud storage</li>
            <li>Cross-platform integration for teams</li>
          </ul>

          <div className="flex gap-4 pt-4">
            <button className="bg-blue-600 hover:bg-[#f15922] cursor-pointer text-white font-medium px-6 py-3 rounded-xl transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Extra Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto text-center space-y-6 px-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Why Choose Our Digital Communication?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our Digital Communication platform is trusted by organizations worldwide 
            to enhance collaboration, improve efficiency, and ensure secure, 
            AI-driven connectivity. Empower your teams with the tools they need 
            to succeed in a digital-first world.
          </p>

          {/* Button to OurProducts */}
          <Link
            onClick={scrollToTop}
            to="/products">
            <button className='border-2 border-[#f15922] text-[#f15922] font-Robot px-15 py-4 mt-9 hover:text-white hover:bg-[#f15922] cursor-pointer transition-all rounded-3xl'>
              Explore More Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DigitalCommunicateComp
