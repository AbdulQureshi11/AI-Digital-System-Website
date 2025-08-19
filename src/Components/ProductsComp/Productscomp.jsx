
import Ourproducts from "../HomeComp/Ourproducts";
import Header from "../../Pages/Navigation/Header";

const Produtcscomp = () => {
  return (
    <div>
      {/* Header Background with Particles */}
      <div>
        <Header />
      </div>
      
      <div className="py-20">
        <Ourproducts />
      </div>
    </div>

  )
}

export default Produtcscomp
