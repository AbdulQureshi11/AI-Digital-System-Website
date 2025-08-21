import Dropdown from '../../Components/HomeComp/Dropdown'
import Searchbtn from '../../Components/HomeComp/Searchbtn'
import ParticlesComponent from '../../Components/ParticalsComp/ParticalsBg'
import logo from '../../Assets/Pictures/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      {/* Header Background with Particles */}
      <div className="relative h-[100px] bg-gradient-to-br from-[#171a88] to-[#0f1018] overflow-hidden">
        <ParticlesComponent id="particles" />

        {/* Header Section */}
        <div className="absolute top-0 left-0 w-full h-[100px] z-[9999] px-4 md:px-10">
          <div className="flex flex-row items-center justify-between w-full h-full">
            
            {/* Logo */}
            <div className="flex items-center">
              <Link to='/' onClick={scrollToTop}>
                <img src={logo} alt="Logo" className="w-[150px] md:w-[250px]" />
              </Link>
            </div>

            {/* Search Button and Drop Down Section */}
            <div className="flex items-center gap-4 md:gap-6 text-[24px] md:text-[40px] text-white">
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
