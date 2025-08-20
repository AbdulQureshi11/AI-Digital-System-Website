import { Link } from 'react-router-dom';
import DigitalCampus from '../../../Assets/Pictures/product2.png'
import Header from "../../../Pages/Navigation/Header";


const DigitalCampusComp = () => {

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
                        src={DigitalCampus}
                        alt="Digital Campus"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>

                {/* Product Content */}
                <div className="space-y-6">
                    <div className="relative mb-5 inline-block">
                        <h1 className="relative z-10 text-[#002C8B] text-[45px] font-black font-RobotB">
                            Digital Campus Solution
                        </h1>
                        <span className="absolute left-0 bottom-2 h-[13px] w-[160px] bg-[#f15922] z-0"></span>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Empower your institution with our AI-powered Digital Campus platform. 
                        From smart classrooms to student management, the system transforms 
                        education delivery, improves efficiency, and enhances student experiences.
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Smart student & faculty management</li>
                        <li>AI-driven analytics for performance tracking</li>
                        <li>Seamless online learning integration</li>
                        <li>Secure & scalable digital infrastructure</li>
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
                        Why Choose Our Digital Campus?
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Our Digital Campus solution is trusted by leading institutions 
                        worldwide to simplify academic operations, enhance communication, 
                        and provide a modern, AI-enabled learning ecosystem. 
                        Shape the future of education with us.
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

export default DigitalCampusComp
