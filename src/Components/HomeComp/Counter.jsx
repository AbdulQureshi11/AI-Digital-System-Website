import { counterstext } from "../../Utlis/Menubar";

const Counter = () => {
    return (
        <div className="w-full bg-white py-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:flex-wrap justify-evenly gap-12">
                {counterstext?.map((items, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center font-Robot text-gray-500 gap-2"
                        >
                            {/* Pehle text */}
                            <h1 className="text-[13px]">{items?.label}</h1>

                            {/* Fir number */}
                            <h1 className="font-RobotEB text-[#002C8B] text-[70px]">
                                {items?.target}
                            </h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Counter;
