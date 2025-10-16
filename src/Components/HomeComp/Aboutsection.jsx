import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAbouts } from "../../features/counter/AboutSlice";
import { getImageUrl } from "../../Utlis/getImageUrl";

const Aboutsection = () => {
    const dispatch = useDispatch();
    const { abouts, loading } = useSelector((state) => state.about);

    useEffect(() => {
        dispatch(getAllAbouts());
    }, [dispatch]);

    if (loading) return <p className="text-center py-10">Loading...</p>;
    if (!abouts || abouts.length === 0)
        return <p className="text-center py-10">No About data available</p>;

    const about = abouts[0];

    return (
        <div className="w-full flex flex-col md:flex-row px-4 md:px-19">
            {/* Images Section */}
            <div className="relative flex md:w-1/2 items-center justify-center gap-3 md:gap-3 mt-[-60px] md:mt-[-200px]">
                {about.topImage1 && (
                    <img
                        src={getImageUrl(about.topImage1)}
                        alt="topImage1"
                        className="w-[46%] md:max-w-[46%] h-auto object-contain"
                    />
                )}
                <div className="relative w-[46%] md:max-w-[46%] mt-50 md:mt-40">
                    {about.topImage2 && (
                        <img
                            src={getImageUrl(about.topImage2)}
                            alt="topImage2"
                            className="w-full h-auto object-contain"
                        />
                    )}
                    {about.movingImage && (
                        <img
                            src={getImageUrl(about.movingImage)}
                            alt="circle"
                            className="absolute -top-25 -right-0 md:top-[-70px] md:right-[-40px] w-35 h-35 sm:w-26 sm:h-26 md:w-50 md:h-50 animate-spin-slow"
                        />
                    )}
                </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 md:p-5 h-full pt-6 md:pt-20 md:ml-12 flex flex-col items-start">
                <div className="relative mb-5 inline-block text-left">
                    <h1 className="relative z-10 text-[#002C8B] text-[32px] md:text-[45px] font-black font-RobotB">
                        {about.title || "About Us"}
                    </h1>
                    <span className="absolute left-0 bottom-1 md:bottom-3 h-[8px] md:h-[13px] w-[80px] md:w-[100px] bg-[#f15922] z-0"></span>
                </div>

                <p className="font-Robot text-[#6F6F6F] text-[15px] md:text-[16px] leading-7 md:leading-8 text-left">
                    {about.description}
                </p>

                {/* Bottom Images & Texts */}
                <div className="flex w-full h-auto mt-5 gap-4 md:gap-0">
                    <div className="w-1/2 h-full flex items-center gap-3 md:gap-7 p-2">
                        {about.bottomImage1 && (
                            <img
                                src={getImageUrl(about.bottomImage1)}
                                alt="bottomImage1"
                                className="w-[28%] md:w-[30%]"
                            />
                        )}
                        <h1 className="font-Robot text-[15px] md:text-[18px] text-[#6F6F6F] text-left">
                            {about.bottomText1}
                        </h1>
                    </div>

                    <div className="w-1/2 h-full flex items-center gap-3 md:gap-7 p-2">
                        {about.bottomImage2 && (
                            <img
                                src={getImageUrl(about.bottomImage2)}
                                alt="bottomImage2"
                                className="w-[28%] md:w-[30%]"
                            />
                        )}
                        <h1 className="font-Robot text-[15px] md:text-[18px] text-[#6F6F6F] text-left">
                            {about.bottomText2}
                        </h1>
                    </div>
                </div>

                {/* Button */}
                <div className="flex items-center h-[50px] w-full mb-10 md:mb-20">
                    <button className="border-2 border-[#f15922] text-[#f15922] font-Robot px-6 md:px-15 py-2 mt-6 md:mt-9 hover:text-white hover:bg-[#f15922] cursor-pointer transition-all rounded-3xl">
                        {about.buttonText || "Read More"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Aboutsection;
