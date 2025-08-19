import Dropdown from "../HomeComp/Dropdown"
import Searchbtn from "../HomeComp/Searchbtn"
import ParticlesComponent from "../ParticalsComp/ParticalsBg"
import logo from "../../Assets/Pictures/logo.svg";
import Ourproducts from "../HomeComp/Ourproducts";
import { Link } from "react-router-dom";

const Produtcscomp = () => {
  return (
    <div>
      {/* Header Background with Particles */}
      <div className="relative h-[100px] overflow-hidden">
        <ParticlesComponent id="particles" />

        {/* Header Section */}
        <div className="absolute top-0 left-0 w-full h-[100px] z-[9999] px-19">
          <div className="flex w-full h-full">
            <div className="flex items-center w-[50%] h-[100%]">
              <Link
                to='/'>
                <img src={logo} alt="Logo" className="w-[250px]" />
              </Link>
            </div>
            {/* Search Button and Drop Down Section */}
            <div className="flex justify-end gap-5 text-[45px] text-white items-center w-[50%] h-[100%]">
              <Searchbtn />
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <Ourproducts />
      </div>
    </div>

  )
}

export default Produtcscomp
