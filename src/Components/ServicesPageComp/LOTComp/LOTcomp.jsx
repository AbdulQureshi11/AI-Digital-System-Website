import Header from "../../../Pages/Navigation/Header"
import QuickLinks from "../QuickLinks/QuickLinks";
import LOT from '../../../Assets/Pictures/LOT.jpeg'
import { Link } from "react-router-dom";

const LOTcomp = () => {

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
                                IoT (Internet of Things)
                            </h1>
                            <span className="absolute left-0 bottom-2 h-[13px] w-[80px] bg-[#f15922] z-0"></span>
                        </div>
                        <p className="mt-6 text-lg text-gray-700 max-w-xl">
                            Transform your business operations with our Internet of Things (IoT) solutions. We design and implement connected systems that collect, analyze, and act on real-time data to improve efficiency, safety, and decision-making. From smart devices and sensors to IoT platforms and cloud integration, our solutions enable automation, monitoring, and intelligent insights for industries ranging from manufacturing to healthcare.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src={LOT}
                            alt="IoT Illustration"
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
                        Ready to Connect Your Devices?
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                        Let’s collaborate to implement innovative IoT solutions tailored to your business needs. Automate processes, gather real-time insights, and enhance operational efficiency with smart, connected systems.
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

export default LOTcomp
