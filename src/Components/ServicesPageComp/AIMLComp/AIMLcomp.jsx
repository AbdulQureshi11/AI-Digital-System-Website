import Header from "../../../Pages/Navigation/Header"
import { Link } from "react-router-dom"
import AIimg from "../../../Assets/Pictures/AI.png"
import QuickLinks from "../QuickLinks/QuickLinks"

const AIMLcomp = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="text-gray-900 font-Robot min-h-screen">
      <Header />

      {/* Top Border */}
      <div className="border-t border-gray-300"></div>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="relative py-16 w-full flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-10 px-19">

          {/* Text */}
          <div className="flex-1">
            <div className="relative mb-5 inline-block">
              <h1 className="relative z-10 text-[#002C8B] text-[45px] font-black font-RobotB">
                Artificial Intelligence & Machine Learning
              </h1>
              <span className="absolute left-0 bottom-19 h-[13px] w-[100px] bg-[#f15922] z-0"></span>
            </div>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Empower your business with the full potential of Artificial Intelligence and Machine Learning. Our advanced AI-driven solutions help you automate processes, analyze complex data, and uncover hidden opportunities that drive growth and innovation. From predictive analytics to intelligent automation and personalized customer experiences, we deliver cutting-edge technology tailored to your unique business needs. Step into the future with scalable, smart, and innovative AI solutions designed to keep your business ahead of the competition.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={AIimg}
              alt="AI Illustration"
              className="w-[450px] h-auto rounded-4xl object-contain shadow-lg"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="">
          <QuickLinks />
        </div>

        {/* Call to Action Section */}
        <div className="text-center px-6 py-16 bg-gray-100 border-t border-gray-300">
          <h2 className="text-3xl font-bold mb-4 text-[#002C8B]">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Let’s collaborate to create powerful AI-driven systems tailored to your needs.
            Whether it’s ML, NLP, or Computer Vision — we’re here to help you innovate.
          </p>
          <Link to="/contactus" onClick={scrollToTop}>
            <button className='border-2 border-[#f15922] text-[#f15922] font-Robot px-15 py-2 mt-9 hover:text-white hover:bg-[#f15922] cursor-pointer transition-all rounded-3xl'>Contact Us</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default AIMLcomp
