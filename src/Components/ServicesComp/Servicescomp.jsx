import Dropdown from "../HomeComp/Dropdown"
import Searchbtn from "../HomeComp/Searchbtn"
import ParticlesComponent from "../ParticalsComp/ParticalsBg"
import logo from "../../Assets/Pictures/logo.svg";
import ServicesSection from "../HomeComp/ServicesSection";
import { Link } from 'react-router-dom'
import Header from "../../Pages/Navigation/Header";
const Servicescomp = () => {
  return (
    <div>
      {/* Header Background with Particles */}
      <div>
        <Header />
      </div>

      <div>
        <ServicesSection />
      </div>




    </div>

  )
}

export default Servicescomp
