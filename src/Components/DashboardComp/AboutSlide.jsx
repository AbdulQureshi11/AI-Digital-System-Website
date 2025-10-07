import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Inputfield from "../Common/Inputfield";
import Primarybtn from "../Common/Primarybtn";
import {
  getAllAbouts,
  createAbout,
  updateAbout,
  deleteAbout,
} from "../../features/counter/AboutSlice";

const AboutSlide = () => {
  const dispatch = useDispatch();
  const { abouts, loading } = useSelector((state) => state.about);

  const [preview, setPreview] = useState({});
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(getAllAbouts());
  }, [dispatch]);

  const initialValues = {
    topImage1: null,
    topImage2: null,
    movingImage: null,
    title: "",
    description: "",
    bottomImage1: null,
    bottomText1: "",
    bottomImage2: null,
    bottomText2: "",
    buttonText: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required*"),
    description: Yup.string().required("This field is required*"),
    buttonText: Yup.string().required("This field is required*"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const form = new FormData();
    if (values.topImage1) form.append("topImage1", values.topImage1);
    if (values.topImage2) form.append("topImage2", values.topImage2);
    if (values.movingImage) form.append("movingImage", values.movingImage);

    form.append("title", values.title);
    form.append("description", values.description);

    if (values.bottomImage1) form.append("bottomImage1", values.bottomImage1);
    if (values.bottomText1) form.append("bottomText1", values.bottomText1);
    if (values.bottomImage2) form.append("bottomImage2", values.bottomImage2);
    if (values.bottomText2) form.append("bottomText2", values.bottomText2);
    if (values.buttonText) form.append("buttonText", values.buttonText);

    if (editId) {
      dispatch(updateAbout({ id: editId, formData: form }));
      setEditId(null);
    } else {
      dispatch(createAbout(form));
    }

    resetForm();
    setPreview({});
  };

  const handleEdit = (slide, setValues) => {
    setValues({
      topImage1: null,
      topImage2: null,
      movingImage: null,
      title: slide.title,
      description: slide.description,
      bottomImage1: null,
      bottomText1: slide.bottomText1,
      bottomImage2: null,
      bottomText2: slide.bottomText2,
      buttonText: slide.buttonText,
    });
    setPreview({
      topImage1: slide.topImage1,
      topImage2: slide.topImage2,
      movingImage: slide.movingImage,
      bottomImage1: slide.bottomImage1,
      bottomImage2: slide.bottomImage2,
    });
    setEditId(slide.id);
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-gray-50 rounded-2xl p-8 md:p-12 font-Robot">
      {/* Header */}
      <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0041cc]">
          About Us Section Management
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
        <h3 className="text-xl md:text-2xl font-bold text-[#002C8B] mb-6">
          Add / Update About Section
        </h3>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ values, setFieldValue, setValues }) => (
            <Form className="space-y-6">
              {/* Top Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["topImage1", "topImage2", "movingImage"].map((field, idx) => (
                  <div key={idx} className="flex flex-col">
                    <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">
                      {field === "topImage1"
                        ? "Top Image 1"
                        : field === "topImage2"
                          ? "Top Image 2"
                          : "Moving Image"}
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.currentTarget.files[0];
                        setFieldValue(field, file);
                        setPreview((prev) => ({
                          ...prev,
                          [field]: file ? URL.createObjectURL(file) : null,
                        }));
                      }}
                      className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-white focus:ring-2 focus:ring-[#0041cc] shadow-sm transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#0041cc] file:text-white hover:file:bg-[#003399]"
                    />
                    {preview[field] && (
                      <div className="mt-2 h-28 w-28 rounded-xl overflow-hidden border border-gray-200 shadow-md">
                        <img
                          src={preview[field] || undefined}
                          alt={field}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Title & Description */}
              <Inputfield
                label="Title"
                type="text"
                id="title"
                name="title"
                value={values.title}
                onChange={(e) => setFieldValue("title", e.target.value)}
                placeholder="Enter About Us title"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm w-full transition"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-xs sm:text-sm font-medium text-red-600 mt-1"
              />

              <div>
                <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">
                  Description
                </label>
                <textarea
                  rows={4}
                  id="description"
                  name="description"
                  value={values.description}
                  placeholder="Enter About Us description"
                  onChange={(e) => setFieldValue("description", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm transition"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-xs sm:text-sm font-medium text-red-600 mt-1"
                />
              </div>

              {/* Bottom Images + Text */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["bottomImage1", "bottomImage2"].map((field, idx) => (
                  <div key={idx} className="flex flex-col">
                    <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">
                      {field === "bottomImage1" ? "Bottom Image 1" : "Bottom Image 2"}
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.currentTarget.files[0];
                        setFieldValue(field, file);
                        setPreview((prev) => ({
                          ...prev,
                          [field]: file ? URL.createObjectURL(file) : null,
                        }));
                      }}
                      className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-white focus:ring-2 focus:ring-[#0041cc] shadow-sm transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#0041cc] file:text-white hover:file:bg-[#003399]"
                    />
                    {preview[field] && (
                      <div className="mt-2 h-28 w-28 rounded-xl overflow-hidden border border-gray-200 shadow-md">
                        <img
                          src={preview[field] || undefined}
                          alt={field}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <Inputfield
                      type="text"
                      id={field === "bottomImage1" ? "bottomText1" : "bottomText2"}
                      name={field === "bottomImage1" ? "bottomText1" : "bottomText2"}
                      label={
                        field === "bottomImage1"
                          ? "Short Description 1"
                          : "Short Description 2"
                      }
                      placeholder="Enter short text"
                      value={
                        field === "bottomImage1" ? values.bottomText1 : values.bottomText2
                      }
                      onChange={(e) =>
                        setFieldValue(
                          field === "bottomImage1" ? "bottomText1" : "bottomText2",
                          e.target.value
                        )
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Button Text */}
              <Inputfield
                label="Button Text"
                type="text"
                id="buttonText"
                name="buttonText"
                value={values.buttonText}
                onChange={(e) => setFieldValue("buttonText", e.target.value)}
                placeholder="Enter button text"
              />
              <ErrorMessage
                name="buttonText"
                component="div"
                className="text-xs sm:text-sm font-medium text-red-600 mt-1"
              />

              {/* Submit Button */}
              <div className="text-center mt-4">
                <Primarybtn
                  type="submit"
                  className="rounded-lg px-6 py-3 cursor-pointer text-lg text-white bg-gradient-to-r from-[#002C8B] to-[#0041cc] hover:opacity-90 transition-all shadow-md"
                >
                  {editId ? "Update Section" : "Save About Section"}
                </Primarybtn>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Saved About Data */}
      {abouts?.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-bold text-[#002C8B] mb-6">
            Saved About Us Sections
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {abouts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 flex flex-col items-start hover:shadow-xl transition"
              >
                <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                <span className="text-sm font-medium text-[#0041cc] mt-2 inline-block">
                  Button: {item.buttonText}
                </span>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  {["topImage1", "topImage2", "movingImage", "bottomImage1", "bottomImage2"].map(
                    (imgKey) =>
                      item[imgKey] && (
                        <div key={imgKey} className="flex flex-col items-center">
                          <div className="h-28 w-28 rounded-xl overflow-hidden border border-gray-200 shadow-md">
                            <img
                              src={item[imgKey]}
                              alt={imgKey}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          {(imgKey === "bottomImage1" && item.bottomText1) ||
                            (imgKey === "bottomImage2" && item.bottomText2) ? (
                            <p className="text-xs text-gray-700 mt-1 text-center">
                              {imgKey === "bottomImage1" ? item.bottomText1 : item.bottomText2}
                            </p>
                          ) : null}
                        </div>
                      )
                  )}
                </div>

                <div className="mt-3 w-full flex justify-between items-center">
                  <button
                    onClick={() => handleEdit(item, (val) => val)}
                    className="px-3 py-1 text-sm bg-[#002C8B] text-white rounded-md hover:bg-[#0041cc] transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteAbout(item.id))}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSlide;
