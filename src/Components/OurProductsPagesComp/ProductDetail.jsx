import { useParams, Link } from "react-router-dom";
import { ourproducts } from "../../Utlis/Productlist";
import Header from "../../Pages/Navigation/Header";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = ourproducts.find((item) => item.slug === slug);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen font-Robot">
      {/* Navbar */}
      <Header />

      {/* Product Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Product Content */}
        <div className="space-y-6">
          <div className="relative mb-5 inline-block">
            <h1 className="relative z-10 text-[#002C8B] text-[45px] font-black font-RobotB">
              {product.name}
            </h1>
            <span className="absolute left-0 top-12 h-[13px] w-[80px] bg-[#f15922] z-0"></span>
          </div>

          {/* Product Detail */}
          <p className="text-lg text-gray-600 leading-relaxed">{product.detail}</p>

          {/* Bullet Points */}
          {product.bullets && (
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {product.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto text-center space-y-6 px-6">
          <h2 className="text-3xl font-semibold text-[#002C8B]">
            Why Choose Our {product.name}?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {product.whyChoose}
          </p>

          {/* Explore More Products Button */}
          <Link onClick={scrollToTop} to="/products">
            <button className="border-2 border-[#f15922] text-[#f15922] font-Robot px-15 py-4 mt-9 hover:text-white hover:bg-[#f15922] cursor-pointer transition-all rounded-3xl">
              Explore More Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
