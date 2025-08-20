import Header from "../../../Pages/Navigation/Header"
import QuickLinks from "../QuickLinks/QuickLinks";
import WebDevelopment from '../../../Assets/Pictures/WebDevelopment.avif'
import { Link } from "react-router-dom";

const Webdevcomp = () => {

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
                            <h1 className="relative z-19 text-[#002C8B] text-[45px] font-black font-RobotB">
                                Development Websites & Mobile Applications
                            </h1>
                            <span className="absolute left-0 bottom-19 h-[13px] w-[100px] bg-[#f15922] z-0"></span>
                        </div>
                        <p className="mt-6 text-lg text-gray-700 max-w-xl">
                            Build modern, responsive, and high-performing web and mobile applications with our expert development team. We leverage the latest technologies such as React.js, Next.js, Node.js, and mobile frameworks to deliver scalable and secure solutions tailored to your business needs. From concept to deployment, our team ensures seamless user experiences, optimized performance, and maintainable code architecture to drive your digital growth.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src={WebDevelopment}
                            alt="Web & Mobile Development Illustration"
                            className="w-[550px] h-auto rounded-4xl object-contain shadow-lg"
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
                        Ready to Launch Your Digital Presence?
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                        Let’s collaborate to develop cutting-edge web and mobile applications using modern technologies. Deliver seamless user experiences, scalable performance, and innovative solutions for your business growth.
                    </p>
                    <Link to="/contactus" onClick={scrollToTop}>
                        <button className='border-2 border-[#f15922] text-[#f15922] font-Robot px-15 py-2 mt-9 hover:text-white hover:bg-[#f15922] cursor-pointer transition-all rounded-3xl'>
                            Contact Us
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Webdevcomp
