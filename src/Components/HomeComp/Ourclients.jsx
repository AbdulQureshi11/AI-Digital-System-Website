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
    }

    return (
        <section className="flex w-full px-19 py-20">
            {/* Left Section */}
            <div className="flex items-center justify-start w-[31%]">
                <div className="flex flex-col items-start text-left space-y-4 pl-4">
                    {/* Heading with highlight */}
                    <div className="relative inline-block">
                        <h1 className="relative z-10 font-RobotB text-[#002C8B] text-[45px] font-black leading-none">
                            Our Clients
                        </h1>
                        <span className="absolute left-0 bottom-0 h-[13px] w-[150px] bg-[#f15922] z-0"></span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 font-Robot leading-relaxed">
                        Some of our satisfied customers
                    </p>

                    {/* Button */}
                    <Link
                        to="/about"
                        onClick={scrollToTop}
                        className="mt-4 inline-block cursor-pointer px-15 py-2 border border-[#f15922] text-[#f15922] font-Robot rounded-3xl hover:text-white hover:bg-[#f15922] transition-all"
                    >
                        About Us
                    </Link>
                </div>
            </div>

            {/* Right Section - Client Logos */}
            <div className="w-[69%] pl-5 grid grid-cols-3">
                {clients.map((client, index) => {
                    const isLastRow = index >= clients.length - 3; // last row items
                    const isLastCol = (index + 1) % 3 === 0; // last column items

                    return (
                        <div
                            key={index}
                            className={`flex justify-center items-center h-[180px]
                ${!isLastRow ? "border-b border-gray-200" : ""} 
                ${!isLastCol ? "border-r border-gray-200" : ""}`}
                        >
                            <img src={client.img} alt={client.alt} className="w-[180px] object-contain" />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default OurClients;
