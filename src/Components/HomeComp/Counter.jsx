import { counterstext } from "../../Utlis/Menubar";  // Note: counters ko named import karna hoga

const CounterItem = ({ target, label }) => {
    return (
        <div className="flex flex-col items-center justify-center px-6">
            <span className="uppercase font-Robot text-sm font-medium text-gray-500 mb-2 tracking-wider">
                {label}
            </span>
            <span className="text-7xl font-extrabold font-Robot tracking-tight text-[#002C8B]">
                {target}
            </span>
        </div>
    );
};

const Counter = () => {
    return (
        <div className="w-full bg-white py-16">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12">
                {counterstext?.map((item, idx) => (
                    <CounterItem key={idx}
                        target={item.target}
                        label={item.label}
                    />
                ))}
            </div>
        </div>
    );
};

export default Counter;
