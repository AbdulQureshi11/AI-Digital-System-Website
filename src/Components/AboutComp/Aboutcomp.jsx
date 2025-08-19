import ParticlesComponent from "../ParticalsComp/ParticalsBg";
import logo from "../../Assets/Pictures/logo.svg";
import Searchbtn from "../HomeComp/Searchbtn";
import Dropdown from "../HomeComp/Dropdown";
import "../../index.css";
import Aboutsection from "../HomeComp/Aboutsection";
import { Link } from "react-router-dom";

const Aboutcomp = () => {
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
      <div className="bg-[#F5F4F2]">
        <Aboutsection />
      </div>
    </div>
  );
};

export default Aboutcomp;
