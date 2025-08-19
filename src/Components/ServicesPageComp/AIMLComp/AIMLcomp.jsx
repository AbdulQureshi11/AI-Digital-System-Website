import Header from "../../../Pages/Navigation/Header"
import { Link } from "react-router-dom"
import AIimg from "../../../Assets/Pictures/AI.png"
import { services } from "../../../Utlis/Menubar"

const AIMLcomp = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="text-white font-Robot min-h-screen">
      <Header />

      {/* Top Border */}
      <div className="border-t border-indigo-900"></div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-black">
        <div className="relative py-16 w-full flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-10 px-19">

          {/* Text */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-5xl font-extrabold z-90 tracking-tight bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent leading-tight">
              Artificial Intelligence & Machine Learning
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
             "Empower your business with the full potential of Artificial Intelligence and Machine Learning. Our advanced AI-driven solutions help you automate processes, analyze complex data, and uncover hidden opportunities that drive growth and innovation. From predictive analytics to intelligent automation and personalized customer experiences, we deliver cutting-edge technology tailored to your unique business needs. Step into the future with scalable, smart, and innovative AI solutions designed to keep your business ahead of the competition
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={AIimg}
              alt="AI Illustration"
              className="w-[450px] h-auto rounded-4xl object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services?.map((srv, i) => (
            <div
              key={i}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center 
                         shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">{srv?.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-400">{srv?.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{srv?.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center px-6 py-16 bg-slate-900 border-t border-indigo-900">
          <h2 className="text-3xl font-bold mb-4 text-indigo-400">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Let’s collaborate to create powerful AI-driven systems tailored to your needs.
            Whether it’s ML, NLP, or Computer Vision — we’re here to help you innovate.
          </p>
          <Link to="/contactus" onClick={scrollToTop}>
            <button className="px-8 py-3 cursor-pointer bg-indigo-500 hover:bg-indigo-600 rounded-full text-white shadow-lg transition-all">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AIMLcomp
