import { Link } from "react-router-dom";

// Assets
import jazzmosafirimg from "../../Assets/Pictures/jazz_mosafir.svg";
import htsimg from "../../Assets/Pictures/hts.svg";
import travelserviceimg from "../../Assets/Pictures/qiblatain.svg";
import travsolimg from "../../Assets/Pictures/travsol.svg";
import travelnationimg from "../../Assets/Pictures/travelnation.svg";
import skykonnectimg from "../../Assets/Pictures/skykonnect.svg";

// Client Data
const clients = [
    { img: jazzmosafirimg, alt: "Jazz Mosafir" },
    { img: htsimg, alt: "HTS" },
    { img: travelserviceimg, alt: "Qiblatain" },
    { img: travsolimg, alt: "Travsol" },
    { img: travelnationimg, alt: "Travel Nation" },
    { img: skykonnectimg, alt: "Skykonnect" },
];

const OurClients = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="flex flex-col md:flex-row w-full px-4 md:px-19 py-12 md:py-20">
            {/* Left Section */}
            <div className="w-full md:w-[31%] flex items-start justify-start mb-8 md:mb-0">
                <div className="flex flex-col items-start text-left space-y-4 pl-0 md:pl-4">
                    {/* Heading with highlight */}
                    <div className="relative inline-block">
                        <h1 className="relative z-10 font-RobotB text-[#002C8B] text-[32px] md:text-[45px] font-black leading-none">
                            Our Clients
                        </h1>
                        <span className="absolute left-0 bottom-0 md:bottom-0 h-[8px] md:h-[13px] w-[70px] md:w-[150px] bg-[#f15922] z-0"></span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 font-Robot leading-relaxed text-[15px] md:text-base">
                        Some of our satisfied customers
                    </p>

                    {/* Button */}
                    <Link
                        to="/about"
                        onClick={scrollToTop}
                        className="mt-2 md:mt-4 inline-block cursor-pointer px-6 md:px-15 py-2 border border-[#f15922] text-[#f15922] font-Robot rounded-3xl hover:text-white hover:bg-[#f15922] transition-all"
                    >
                        About Us
                    </Link>
                </div>
            </div>

            {/* Right Section - Client Logos */}
            <div className="w-full md:w-[69%] pl-0 md:pl-5 grid grid-cols-2 md:grid-cols-3">
                {clients.map((client, index) => {
                    // --- Mobile (2 cols)
                    const isLastRowMobile = index >= clients.length - 2;
                    const isLastColMobile = (index + 1) % 2 === 0;

                    // --- Desktop (3 cols)
                    const isLastRowDesktop = index >= clients.length - 3;
                    const isLastColDesktop = (index + 1) % 3 === 0;

                    return (
                        <div
                            key={index}
                            className={`flex justify-center items-center h-[140px] md:h-[180px]
                
                ${!isLastRowMobile ? "border-b border-gray-200" : ""}
                ${!isLastColMobile ? "border-r border-gray-200" : ""}

                
                ${!isLastRowDesktop ? "md:border-b md:border-gray-200" : "md:border-b-0"}
                ${!isLastColDesktop ? "md:border-r md:border-gray-200" : "md:border-r-0"}
              `}
                        >
                            <img
                                src={client.img}
                                alt={client.alt}
                                className="w-[120px] md:w-[180px] object-contain"
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default OurClients;
