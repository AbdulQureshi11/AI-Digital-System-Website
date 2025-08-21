
const Inputfield = ({ id, type, name, value, label, onChange, className, placeholder }) => {
    return (
        <div>
            <label htmlFor="" className='flex mb-1 text-gray-800 text-[15px] md:font-normal font-semibold md:text-[18px] ml-2 font-Robot'>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                id={id}
                required
                value={value}
                onChange={onChange}
                className={`${className} outline-none md:placeholder:text-[14px] placeholder:text-[12px] w-[300px] text-sm rounded-md p-[8px]`}
            />
        </div>
    )
}

export default Inputfield
