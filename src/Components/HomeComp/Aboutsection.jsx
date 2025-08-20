import welcome1 from '../../Assets/Pictures/welcome_img1.jpg'
import welcome2 from '../../Assets/Pictures/welcome_img2.jpg'
import circle from '../../Assets/Pictures/about_circle.svg'
import client from '../../Assets/Pictures/client.svg'
import time from '../../Assets/Pictures/quality.svg'

const Aboutsection = () => {
    return (
        <div>
            <div className='flex px-19 w-[100%]'>
                <div className=" flex justify-evenly items-center relative w-full h-full">
                    <img
                        src={welcome1}
                        alt=""
                        className="max-w-[46%] h-auto object-contain"
                    />
                    <img
                        src={welcome2}
                        alt=""
                        className="max-w-[46%] h-auto mt-50 object-contain"
                    />

                    <img
                        src={circle}
                        alt=""
                        className="absolute top-25 left-80 animate-spin-slow"
                    />
                </div>

                <div className="w-full h-full p-5 flex-col pt-30 ml-28 items-center ">
                    <div className="relative mb-5 inline-block">
                        <h1 className="relative z-10 text-[#002C8B] text-[45px] font-black font-RobotB">About Us</h1>
                        <span className="absolute left-0 bottom-3 h-[13px] w-[100px] bg-[#f15922] z-0"></span>
                    </div>

                    <p className="font-Robot text-[#6F6F6F] text-[16px] leading-8">
                        Welcome to AI Digital Systems, formerly known as FamzSolutions, a pioneering
                        technology services provider with a legacy dating back to 2012. Our
                        rebranding in 2023 reflects our commitment to staying ahead in the
                        ever-evolving tech landscape. Renowned for excellence in software
                        development, AI tools, systems integrations, and VAS technologies, we have
                        collaborated with both government departments in Pakistan, driving their
                        digitization, and private sectors, delivering bespoke solutions. Our
                        SAAS-based travel technologies and unique WhatsApp/Meta API showcase our
                        dedication to innovation. Behind AI Digital Systems is a seasoned team with
                        vast national and international experience in academia and industries. Join
                        us on a journey into the future of technology, where innovation meets
                        excellence.
                    </p>
                    {/*Reward Section */}
                    <div className='flex w-[100%] h-[100px] mt-5'>
                        <div className='w-[50%] h-full flex items-center gap-7 p-2'>
                            <img src={client}
                                alt=""
                                className='w-[30%]'
                            />
                            <h1 className='font-Robot text-[18px] text-[#6F6F6F]'>Client satisfaction is our reward</h1>

                        </div>
                        <div className='w-[50%] h-full flex items-center gap-7 p-2'>
                            <img src={time}
                                alt=""
                                className='w-[30%]'
                            />
                            <h1 className='font-Robot text-[18px] text-[#6F6F6F]'>We always complete tasks on time</h1>
                        </div>
                    </div>
                    <div className='flex items-center  h-[50px] w-[100%] mb-20'>
                        <button className='border-2 border-[#f15922] text-[#f15922] font-Robot px-15 py-2 mt-9 hover:text-white hover:bg-[#f15922] cursor-pointer transition-all rounded-3xl'>Read More</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Aboutsection
