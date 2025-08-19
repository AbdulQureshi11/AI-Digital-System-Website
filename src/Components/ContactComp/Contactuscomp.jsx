import Dropdown from "../HomeComp/Dropdown";
import Searchbtn from "../HomeComp/Searchbtn";
import ParticlesComponent from "../ParticalsComp/ParticalsBg";
import logo from "../../Assets/Pictures/logo.svg";
import ContactForm from "./ContactForm";

const Contactuscomp = () => {
    return (
        <div>
            {/* Header Background with Particles */}
            <div className="relative h-[100px] overflow-hidden">
                <ParticlesComponent id="particles" />

                {/* Header Section */}
                <div className="absolute top-0 left-0 w-full h-[100px] z-[9999] px-19">
                    <div className="flex w-full h-full">
                        <div className="flex w-[50%] h-[100%]">
                            <img src={logo} alt="Logo" className="w-[250px]" />
                        </div>
                        {/* Search Button and Drop Down Section */}
                        <div className="flex justify-end gap-5 text-[45px] text-white items-center w-[50%] h-[100%]">
                            <Searchbtn />
                            <Dropdown />
                        </div>
                    </div>
                </div>
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
                            <span className="absolute left-0 bottom-3 h-[13px] w-[150px] bg-[#f15922] z-0"></span>
                        </div>

                        {/* Office Information */}
                        <div className="space-y-4 text-gray-700">
                            <div className="pb-3 border-b font-Robot border-gray-300">
                                <h3 className="text-lg font-semibold text-gray-900">Contact Number</h3>
                                <p>+92 313 9974444</p>
                            </div>
                            <div className="pb-3 border-b font-Robot border-gray-300">
                                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                                <p>info@aidigitalsystem.com</p>
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
