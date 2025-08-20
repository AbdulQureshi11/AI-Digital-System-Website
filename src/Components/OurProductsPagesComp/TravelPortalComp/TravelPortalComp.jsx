import Travel from '../../../Assets/Pictures/product1.png'
import Header from "../../../Pages/Navigation/Header";

const TravelPortalComp = () => {
  return (
    <div className="min-h-screen font-Robot">
      {/* Navbar */}
      <Header />

      {/* Product Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Product Image */}
        <div>
          <img
            src={Travel}
            alt="Travel Portal"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Product Content */}
        <div className="space-y-6">
          <div className="relative mb-5 inline-block">
            <h1 className="relative z-10 text-[#002C8B] text-[45px] font-black font-RobotB">
              Travel Portal
            </h1>
            <span className="absolute left-0 bottom-2 h-[13px] w-[100px] bg-[#f15922] z-0"></span>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Simplify and enhance your travel business with our advanced Travel
            Portal solution. From booking flights and hotels to managing holiday
            packages, our portal is designed to give customers a seamless
            experience while helping agencies grow faster.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Easy integration with flight & hotel APIs</li>
            <li>Customizable holiday packages</li>
            <li>Secure online booking & payment system</li>
            <li>Multi-language & multi-currency support</li>
            <li>User-friendly admin panel for quick management</li>
          </ul>

          <div className="flex gap-4 pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition">
              Get Started
            </button>
            <button className="border border-gray-400 text-gray-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-xl transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Extra Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto text-center space-y-6 px-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Why Choose Our Travel Portal?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our Travel Portal is trusted by agencies, startups, and enterprises
            to provide customers with a smooth booking journey. From flight
            reservations to holiday planning, our portal ensures efficiency,
            scalability, and a modern travel experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TravelPortalComp
