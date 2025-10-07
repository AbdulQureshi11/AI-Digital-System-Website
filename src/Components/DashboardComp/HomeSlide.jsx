import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createHomeSlide,
  getAllHomeSlides,
  deleteHomeSlide,
} from "../../features/counter/HomeSlice";
import { baseURL } from "../../Utlis/baseUrl";
import Inputfield from "../Common/Inputfield";
import Primarybtn from "../Common/Primarybtn";

const HomeSlide = () => {
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();
  const { slides, loading } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getAllHomeSlides());
  }, [dispatch]);

  const initialValues = {
    image: null,
    title: "",
    heading: "",
    description: "",
    buttonText: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required*"),
    heading: Yup.string().required("This field is required*"),
    description: Yup.string().required("This field is required*"),
    buttonText: Yup.string().required("This field is required*"),
    image: Yup.mixed().required("Image is required*"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const form = new FormData();
    form.append("image", values?.image);
    form.append("title", values?.title);
    form.append("heading", values?.heading);
    form.append("description", values?.description);
    form.append("buttonText", values?.buttonText);

    dispatch(createHomeSlide(form));
    resetForm();
    setPreview(null);
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-gray-50 rounded-2xl p-8 md:p-12">
      {/* Admin Header */}
      <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0041cc] font-RobotB">
          Home Section Management
        </h2>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-semibold text-lg">
            A
          </div>
          <span className="text-gray-700 font-medium">Admin</span>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 border border-gray-200">
        <h3 className="text-xl md:text-2xl font-bold font-Robot text-[#002C8B] mb-6">
          Add / Update Home Slide
        </h3>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-6 font-Robot">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image Upload */}
                <div className="flex flex-col">
                  <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      setFieldValue("image", file);
                      setPreview(file ? URL.createObjectURL(file) : null);
                    }}
                    className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-white focus:ring-2 focus:ring-[#0041cc] shadow-sm transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#0041cc] file:text-white hover:file:bg-[#003399]"
                  />
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="text-xs sm:text-sm font-medium text-red-600 mt-1"
                  />
                  {preview && (
                    <div className="mt-4 w-full flex justify-center">
                      <div className="h-32 w-32 rounded-xl overflow-hidden border border-gray-200 shadow-md">
                        <img
                          src={preview}
                          alt="preview"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Title */}
                <div>
                  <Inputfield
                    label="Title"
                    type="text"
                    id="title"
                    name="title"
                    value={values.title}
                    onChange={(e) => setFieldValue("title", e.target.value)}
                    placeholder="Enter title"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm w-full transition"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-xs sm:text-sm font-medium text-red-600 mt-1"
                  />
                </div>

                {/* Heading */}
                <div>
                  <Inputfield
                    label="Heading"
                    type="text"
                    id="heading"
                    name="heading"
                    value={values.heading}
                    onChange={(e) =>
                      setFieldValue("heading", e.target.value)
                    }
                    placeholder="Enter heading"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm w-full transition"
                  />
                  <ErrorMessage
                    name="heading"
                    component="div"
                    className="text-xs sm:text-sm font-medium text-red-600 mt-1"
                  />
                </div>

                {/* Button Text */}
                <div>
                  <Inputfield
                    label="Button Text"
                    type="text"
                    id="buttonText"
                    name="buttonText"
                    value={values.buttonText}
                    onChange={(e) =>
                      setFieldValue("buttonText", e.target.value)
                    }
                    placeholder="Enter button text"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm w-full transition"
                  />
                  <ErrorMessage
                    name="buttonText"
                    component="div"
                    className="text-xs sm:text-sm font-medium text-red-600 mt-1"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">
                  Description
                </label>
                <textarea
                  rows={4}
                  id="description"
                  name="description"
                  value={values.description}
                  placeholder="Enter description"
                  onChange={(e) => setFieldValue("description", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm text-sm md:text-base placeholder:text-gray-400 transition"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-xs sm:text-sm font-medium text-red-600 mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center mt-4">
                <Primarybtn
                  type="submit"
                  className="rounded-lg px-6 py-3 cursor-pointer text-lg text-white bg-gradient-to-r from-[#002C8B] to-[#0041cc] hover:opacity-90 transition-all shadow-md"
                >
                  {loading ? "Saving..." : "Save Home Slide"}
                </Primarybtn>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Saved Slides Preview */}
      {slides?.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-bold font-Robot text-[#002C8B] mb-6">
            Saved Home Slides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 flex flex-col items-start hover:shadow-xl transition"
              >
                <div className="w-full h-40 rounded-lg overflow-hidden mb-3">
                  <img
                    src={`${baseURL}/uploads/${slide.image}`}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-800">{slide.title}</h4>
                <p className="text-gray-600 text-sm">{slide.heading}</p>
                <p className="text-gray-500 text-sm mt-1">{slide.description}</p>
                <span className="text-sm font-medium text-[#0041cc] mt-2 inline-block">
                  Button: {slide.buttonText}
                </span>
                <button
                  onClick={() => dispatch(deleteHomeSlide(slide.id))}
                  className="mt-3 px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeSlide;
