import Aboutsection from "../HomeComp/Aboutsection";
import Header from "../../Pages/Navigation/Header";

const Aboutcomp = () => {
  return (
    <div>
      {/* Header Background with Particles */}
      <div>
        <Header />
      </div>

      {/*About Us Section */}
      <div className="bg-[#F5F4F2]">
        <Aboutsection />
      </div>
    </div>
  );
};

export default Aboutcomp;
