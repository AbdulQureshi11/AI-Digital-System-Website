import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../../features/counter/ProductSlice";
import { getImageUrl } from "../../Utlis/getImageUrl";

const ProductDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, loading, error, products } = useSelector((s) => s.products);

  useEffect(() => {
    const found = products.find((p) => p.slug === slug);
    if (!found) {
      dispatch(getProductBySlug(slug));
    }
  }, [slug, products, dispatch]);

  const product = products.find((p) => p.slug === slug) || singleProduct;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <p className="text-center py-20">Loading product...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return <p className="text-center py-20 text-gray-500">Product Not Found</p>;

  return (
    <div className="min-h-screen font-Robot text-gray-900">
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

          {/* Short Desc */}
          {product.shortDesc && (
            <p className="text-md text-gray-500 italic">{product.shortDesc}</p>
          )}

          {/* Product Detail */}
          <p className="text-lg text-gray-600 leading-relaxed">{product.detail}</p>

          {/* Bullet Points */}
          {product.bullets && (
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {product.bullets.split(",").map((bullet, idx) => (
                <li key={idx}>{bullet.trim()}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Fixed Product Image */}
        <div className="flex justify-center">
          {product.image && (
            <img
              src={getImageUrl(product.image)}
              alt={product.name}
              className="rounded-2xl shadow-lg w-full object-contain max-w-[500px]"
            />
          )}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto text-center space-y-6 px-6">
          <h2 className="text-3xl font-semibold text-[#002C8B]">
            Why Choose Our {product.name}?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{product.whyChoose}</p>

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
