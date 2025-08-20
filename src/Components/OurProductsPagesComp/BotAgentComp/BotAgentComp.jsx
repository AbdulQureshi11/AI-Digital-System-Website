import { Link } from 'react-router-dom';
import BotAI from '../../../Assets/Pictures/product5.png'
import Header from "../../../Pages/Navigation/Header";

const BotAgentComp = () => {

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
            src={BotAI}
            alt="AI Bot Agent"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Product Content */}
        <div className="space-y-6">
          <div className="relative mb-5 inline-block">
            <h1 className="relative z-10 text-[#002C8B] text-[45px] font-black font-RobotB">
              Bot Agent
            </h1>
            <span className="absolute left-0 bottom-2 h-[13px] w-[120px] bg-[#f15922] z-0"></span>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Transform your business communication with our intelligent AI Bot Agent. 
            Designed to streamline collaboration, it provides secure, efficient, 
            and automated digital communication tools that keep your teams 
            connected anytime, anywhere.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Smart, real-time chat and video meetings</li>
            <li>AI-driven scheduling and task reminders</li>
            <li>Encrypted file sharing with cloud backup</li>
            <li>Seamless integration across multiple platforms</li>
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
            Why Choose Our AI Bot Agent?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Trusted by enterprises worldwide, our AI Bot Agent empowers organizations 
            to communicate smarter and faster. With advanced automation, intelligent 
            collaboration tools, and enterprise-grade security, it enables your teams 
            to work seamlessly in today’s digital-first world.
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

export default BotAgentComp
