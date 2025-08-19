
import Dropdown from '../../Components/HomeComp/Dropdown'
import Searchbtn from '../../Components/HomeComp/Searchbtn'
import ParticlesComponent from '../../Components/ParticalsComp/ParticalsBg'
import logo from '../../Assets/Pictures/logo.svg'

const Header = () => {
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
        </div>
    )
}

export default Header
