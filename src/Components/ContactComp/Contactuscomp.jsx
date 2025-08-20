import ContactForm from "./ContactForm";
import Header from "../../Pages/Navigation/Header";

const Contactuscomp = () => {
    return (
        <div>
            {/* Header Background with Particles */}
            <div>
                <Header />
            </div>

            {/* Contact Us Section */}
            <div className="max-w-6xl mx-auto px-4 py-12">

                {/* Flex container with 2 columns */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Section - Office Info */}
                    <div className="w-full md:w-1/2 space-y-6">
                        {/* Heading */}
                        <div className="relative inline-block mb-6">
                            <h1 className="relative z-10 text-[#002C8B] text-[45px] font-black font-RobotB">
                                Contact Us
                            </h1>
                            <span className="absolute left-0 bottom-2 h-[13px] w-[150px] bg-[#f15922] z-0"></span>
                        </div>

                        {/* Office Information */}
                        <div className="space-y-4 text-gray-700">
                            <div className="pb-3 border-b font-Robot border-gray-300">
                                <h3 className="text-lg font-semibold text-gray-900">Contact Number</h3>
                                <p>+92 313 9974444</p>
                            </div>
                            <div className="pb-3 border-b font-Robot border-gray-300">
                                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                                <p>info@aisys.pk</p>
                            </div>
                            <div className="pb-3 border-b font-Robot border-gray-300">
                                <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                                <p>TF 24, Deans Trade Center, Sadder Rd, Peshawar Cantonment, Peshawar, 25000</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Map */}
                    <div className="w-full md:w-1/2">
                        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-full border-0"
                                src="https://www.google.com/maps?q=34.001069,71.544421&hl=en&z=15&output=embed"
                                allowFullScreen
                                loading="lazy"
                                title="AI Digital System Office Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/*Contact Form */}
            <div className="px-19 py-5">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contactuscomp;
