import AIpay from '../../../Assets/Pictures/product3.png'
import Header from "../../../Pages/Navigation/Header";
import { Link } from "react-router-dom";

const ProductPage = () => {

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
                        src={AIpay}
                        alt="AI Product"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>

                {/* Product Content */}
                <div className="space-y-6">
                    <div className="relative mb-5 inline-block">
                        <h1 className="relative z-10 text-[#002C8B] text-[45px] font-black font-RobotB">
                            AI Payment System
                        </h1>
                        <span className="absolute left-0 bottom-2 h-[13px] w-[100px] bg-[#f15922] z-0"></span>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Transform your transactions with our AI-driven payment solution
                        designed to ensure security, speed, and scalability. Whether you’re
                        running an e-commerce store or managing enterprise-level payments,
                        this system adapts to your needs.
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Lightning-fast transactions</li>
                        <li>Advanced fraud detection</li>
                        <li>Scales with your business growth</li>
                        <li>Seamless integration with platforms</li>
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
                        Why Choose Our AI Payment System?
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Our product is trusted by businesses worldwide to enhance
                        efficiency, reduce risks, and provide a future-ready payment
                        ecosystem. Experience the next level of AI innovation in your
                        workflow.
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
    );
};

export default ProductPage;
