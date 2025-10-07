import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Inputfield from "../Common/Inputfield";
import Primarybtn from "../Common/Primarybtn";
import { getAllProducts, createProduct, deleteProduct } from "../../features/counter/ProductSlice";

const ProductSlide = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((s) => s.products);
  const [preview, setPreview] = useState(null);

  const initialValues = {
    name: "",
    slug: "",
    dis: "",
    detail: "",
    image: null,
    bullets: "",
    whyChoose: "",
    buttonText: "Read More",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Product name is required*"),
    slug: Yup.string().required("Slug is required*"),
    dis: Yup.string().required("Short description is required*"),
    detail: Yup.string().required("Detail is required*"),
    image: Yup.mixed().required("Image is required*"),
    bullets: Yup.string().required("Bullets are required*"),
    whyChoose: Yup.string().required("Why Choose Us is required*"),
    buttonText: Yup.string().required("Button text is required*"),
  });

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleAddProduct = (values, { resetForm }) => {
    const form = new FormData();
    form.append("name", values.name);
    form.append("slug", values.slug);
    form.append("dis", values.dis);
    form.append("detail", values.detail);
    if (values.image) form.append("image", values.image);
    form.append("bullets", values.bullets);
    form.append("whyChoose", values.whyChoose);
    form.append("buttonText", values.buttonText);

    dispatch(createProduct(form));
    resetForm();
    setPreview(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const orderedProducts = [...(products || [])].reverse();

  return (
    <div className="w-full h-full overflow-y-auto bg-gray-50 rounded-2xl p-8 md:p-12 font-Robot">

      <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0041cc]">Products Section Management</h2>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-semibold text-lg">A</div>
          <span className="text-gray-700 font-medium">Admin</span>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 border border-gray-200 max-w-5xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-[#002C8B] mb-6">Add New Product</h3>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleAddProduct}
        >
          {({ values, handleChange, setFieldValue }) => (
            <Form className="space-y-6">
              {/* Name & Slug */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Inputfield
                    label="Product Name"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Enter product name"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm w-full transition"
                  />
                  <ErrorMessage name="name" component="div" className="text-xs sm:text-sm font-medium text-red-600 mt-1" />
                </div>

                <div>
                  <Inputfield
                    label="Slug"
                    type="text"
                    name="slug"
                    value={values.slug}
                    onChange={handleChange}
                    placeholder="Enter product slug"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm w-full transition"
                  />
                  <ErrorMessage name="slug" component="div" className="text-xs sm:text-sm font-medium text-red-600 mt-1" />
                </div>
              </div>

              {/* Short Description */}
              <div>
                <Inputfield
                  label="Short Description"
                  type="text"
                  name="dis"
                  value={values.dis}
                  onChange={handleChange}
                  placeholder="Enter short description"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm w-full transition"
                />
                <ErrorMessage name="dis" component="div" className="text-xs sm:text-sm font-medium text-red-600 mt-1" />
              </div>

              {/* Detail */}
              <div>
                <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">Detail</label>
                <textarea
                  rows={3}
                  name="detail"
                  value={values.detail}
                  onChange={handleChange}
                  placeholder="Enter detailed info"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm transition"
                />
                <ErrorMessage name="detail" component="div" className="text-xs sm:text-sm font-medium text-red-600 mt-1" />
              </div>

              {/* Image Upload */}
              <div>
                <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">Upload Product Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.currentTarget.files?.[0];
                    setFieldValue("image", file || null);
                    setPreview(file ? URL.createObjectURL(file) : null);
                  }}
                  className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-white focus:ring-2 focus:ring-[#0041cc] shadow-sm transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#0041cc] file:text-white hover:file:bg-[#003399]"
                />
                <ErrorMessage name="image" component="div" className="text-xs sm:text-sm font-medium text-red-600 mt-1" />
                {preview && (
                  <div className="mt-2 h-28 w-28 rounded-xl overflow-hidden border border-gray-200 shadow-md">
                    <img src={preview} alt="preview" className="h-full w-full object-cover" />
                  </div>
                )}
              </div>

              {/* Bullets */}
              <div>
                <Inputfield
                  label="Bullet Points (comma separated)"
                  type="text"
                  name="bullets"
                  value={values.bullets}
                  onChange={handleChange}
                  placeholder="Point1, Point2, Point3"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm w-full transition"
                />
                <ErrorMessage name="bullets" component="div" className="text-xs sm:text-sm font-medium text-red-600 mt-1" />
              </div>

              {/* Why Choose */}
              <div>
                <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">Why Choose Us</label>
                <textarea
                  rows={3}
                  name="whyChoose"
                  value={values.whyChoose}
                  onChange={handleChange}
                  placeholder="Why choose this product?"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm transition"
                />
                <ErrorMessage name="whyChoose" component="div" className="text-xs sm:text-sm font-medium text-red-600 mt-1" />
              </div>

              {/* Button Text */}
              <div>
                <Inputfield
                  label="Button Text"
                  type="text"
                  name="buttonText"
                  value={values.buttonText}
                  onChange={handleChange}
                  placeholder="Enter button text (e.g., Read More)"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm w-full transition"
                />
                <ErrorMessage name="buttonText" component="div" className="text-xs sm:text-sm font-medium text-red-600 mt-1" />
              </div>

              {/* Submit Button */}
              <div className="text-center mt-4">
                <Primarybtn type="submit" className="rounded-lg px-6 py-3 cursor-pointer text-lg text-white bg-gradient-to-r from-[#002C8B] to-[#0041cc] hover:opacity-90 transition-all shadow-md">
                  Add Product
                </Primarybtn>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Products List - Horizontal Cards */}
      <div className="mt-12 max-w-7xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-[#002C8B] mb-6">All Products</h3>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : orderedProducts.length === 0 ? (
          <p className="text-gray-500">No products added yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {orderedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 md:p-6 hover:shadow-xl transition">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Left image column */}
                  <div className="w-full md:w-72">
                    {product.image && (
                      <div className="h-40 w-full rounded-xl overflow-hidden border border-gray-200 shadow-md">
                        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                      </div>
                    )}
                  </div>

                  {/* Right content column */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-gray-800">{product.name}</h4>
                        <p className="text-sm text-gray-500">/{product.slug}</p>
                        {product.dis && <p className="text-gray-600 text-sm mt-1">{product.dis}</p>}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button className="px-3 py-1.5 text-sm bg-[#002C8B] text-white rounded-md hover:bg-[#0041cc] transition">{product.buttonText || "Read More"}</button>
                        <button onClick={() => handleDelete(product.id)} className="px-3 py-1.5 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition">Delete</button>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="mt-3">
                      {product.detail && (
                        <p className="text-gray-700 text-sm mb-2">{product.detail}</p>
                      )}

                      {product.bullets && (
                        <ul className="list-disc list-inside text-sm text-gray-800 space-y-0.5">
                          {product.bullets.split(",").map((point, i) => (
                            <li key={i}>{point.trim()}</li>
                          ))}
                        </ul>
                      )}

                      {product.whyChoose && (
                        <p className="text-gray-700 text-sm mt-2"><span className="font-semibold">Why Choose Us:</span> {product.whyChoose}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSlide;
