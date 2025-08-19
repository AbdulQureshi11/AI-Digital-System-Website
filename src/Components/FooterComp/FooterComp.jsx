import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/Pictures/logo.svg';
import { fourservices, ourOfficeMenu, webmenu } from '../../Utlis/Menubar';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

// Smooth scroll to top with easing
const smoothScrollToTop = () => {
    const startY = window.scrollY;
    const duration = 800; // Increase for slower scroll
    let startTime = null;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const scrollStep = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = easeOutCubic(progress);

        window.scrollTo(0, startY * (1 - easeProgress));

        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    };

    requestAnimationFrame(scrollStep);
};

const FooterComp = () => {
    return (
        <div>
            <div className='bg-[#04102B] px-19 py-15 w-full flex flex-wrap md:flex-nowrap'>
                {/* Logo Section with Button */}
                <div className="flex-1">
                    <img src={logo} alt="" className='w-[90%]' />
                    <p className='font-RobotL text-white mt-12'>We provide Technological services</p>

                    <button
                        className="mt-6 inline-block cursor-pointer px-12 py-1.5 border border-[#f15922] text-[#f15922] font-Robot rounded-3xl hover:text-white hover:bg-[#f15922] transition-all"
                        onClick={smoothScrollToTop}
                    >
                        Read More
                    </button>
                </div>

                {/* Our Services Section */}
                <div className="flex-1 text-white space-y-4 font-RobotL mt-8 md:mt-0">
                    <h1 className='text-[#00CAFF] font-Robot text-[25px]'>Our Services</h1>
                    {fourservices?.map((items, index) => (
                        <div key={index}>
                            <NavLink
                                className='hover:text-[#00CAFF]'
                                to={items?.path}
                                onClick={smoothScrollToTop}
                            >
                                {items?.name}
                            </NavLink>
                        </div>
                    ))}
                </div>

                {/* Quick Links Section */}
                <div className="flex-1 text-white space-y-4 font-RobotL mt-8 md:mt-0">
                    <h1 className='text-[#00CAFF] font-Robot text-[25px]'>Quick Links</h1>
                    {webmenu?.map((items, index) => (
                        <div key={index}>
                            <NavLink
                                className='hover:text-[#00CAFF]'
                                to={items?.path}
                                onClick={smoothScrollToTop}
                            >
                                {items?.name}
                            </NavLink>
                        </div>
                    ))}
                </div>

                {/* Our Office Section */}
                <div className="flex-1 text-white space-y-4 font-RobotL mt-8 md:mt-0">
                    <h1 className='text-[#00CAFF] font-Robot text-[25px]'>Our Office</h1>
                    {ourOfficeMenu?.map((items, index) => (
                        <div key={index} className='flex items-center gap-5'>
                            <h1 className='text-[#00CAFF] text-[20px]'>{items?.icon}</h1>
                            {items?.id === 4 ? (
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#00CAFF]"
                                    onClick={smoothScrollToTop}
                                >
                                    {items?.name}
                                </a>
                            ) : (
                                <h1>{items?.name}</h1>
                            )}
                        </div>
                    ))}

                    <div className='flex p-1 mt-8 gap-2 text-[20px]'>
                        <Link to='https://www.facebook.com/aidigisys/' target='_blank'>
                            <h1 className='hover:text-[#00CAFF] transition-all'>
                                <FaFacebookF />
                            </h1>
                        </Link>
                        <Link to='https://www.linkedin.com/company/aidsys/' target='_blank'>
                            <h1 className='hover:text-[#00CAFF] transition-all'>
                                <FaLinkedinIn />
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-[#002C8B] font-Robot text-white flex justify-center items-center w-[100%] h-[40px]">
                <p>© 2023 AI Digital Systems, All Rights Reserved</p>
            </div>
        </div>
    );
};

export default FooterComp;
