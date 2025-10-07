import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Inputfield from "../Common/Inputfield";
import Primarybtn from "../Common/Primarybtn";
import {
  getAllServices,
  createService,
  updateService,
  deleteService,
} from "../../features/counter/ServiceSlice";

const ServiceSlide = () => {
  const dispatch = useDispatch();
  const { services, loading } = useSelector((state) => state.service);


  const [preview, setPreview] = useState({ icon: null, image: null });
  const [editId, setEditId] = useState(null);


  const formikRef = useRef(null);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  const initialValues = {
    name: "",
    slug: "",
    icon: null,
    image: null,
    detail: "",
    head: "",
    whyChoose: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Service name is required*"),
    slug: Yup.string().required("Slug is required*"),
    detail: Yup.string().required("Service detail is required*"),
    head: Yup.string().required("Heading is required*"),
    whyChoose: Yup.string().required("Why Choose Us is required*"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const form = new FormData();
    form.append("name", values.name);
    form.append("slug", values.slug);
    if (values.icon) form.append("icon", values.icon);
    if (values.image) form.append("image", values.image);
    form.append("detail", values.detail);
    form.append("head", values.head);
    form.append("whyChoose", values.whyChoose);

    if (editId) {
      dispatch(updateService({ id: editId, formData: form }));
      setEditId(null);
    } else {
      dispatch(createService(form));
    }

    resetForm();
    setPreview({ icon: null, image: null });
  };

  const handleEdit = (service) => {
    if (formikRef.current) {
      formikRef.current.setValues({
        name: service.name || "",
        slug: service.slug || "",
        icon: null,
        image: null,
        detail: service.detail || "",
        head: service.head || "",
        whyChoose: service.whyChoose || "",
      });
    }


    setPreview({
      icon: service.icon || null,
      image: service.image || null,
    });

    setEditId(service.id);

    try {
      window?.scrollTo({ top: 0, behavior: "smooth" });
    } catch { }
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-gray-50 rounded-2xl p-8 md:p-12 font-Robot">
      {/* Header (mirrors About sample) */}
      <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0041cc]">
          Services Section Management
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
          Add / Update Service
        </h3>

        <Formik
          innerRef={formikRef}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-6">
              {/* Name & Slug */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Inputfield
                    label="Service Name"
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={(e) => setFieldValue("name", e.target.value)}
                    placeholder="Enter service name"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm w-full transition"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-xs sm:text-sm font-medium text-red-600 mt-1"
                  />
                </div>

                <div>
                  <Inputfield
                    label="Slug"
                    type="text"
                    id="slug"
                    name="slug"
                    value={values.slug}
                    onChange={(e) => setFieldValue("slug", e.target.value)}
                    placeholder="Enter slug (e.g. web-design)"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm w-full transition"
                  />
                  <ErrorMessage
                    name="slug"
                    component="div"
                    className="text-xs sm:text-sm font-medium text-red-600 mt-1"
                  />
                </div>
              </div>

              {/* Icon & Image Uploads */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Icon */}
                <div className="flex flex-col">
                  <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">
                    Service Icon (SVG / PNG)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.currentTarget.files?.[0];
                      setFieldValue("icon", file || null);
                      setPreview((prev) => ({
                        ...prev,
                        icon: file ? URL.createObjectURL(file) : null,
                      }));
                    }}
                    className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-white focus:ring-2 focus:ring-[#0041cc] shadow-sm transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#0041cc] file:text-white hover:file:bg-[#003399]"
                  />
                  {preview.icon && (
                    <div className="mt-2 h-14 w-14 rounded-lg overflow-hidden border border-gray-200 shadow-md flex items-center justify-center bg-white">
                      <img
                        src={preview.icon || undefined}
                        alt="icon preview"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Image */}
                <div className="flex flex-col">
                  <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">
                    Service Image (JPG / PNG)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.currentTarget.files?.[0];
                      setFieldValue("image", file || null);
                      setPreview((prev) => ({
                        ...prev,
                        image: file ? URL.createObjectURL(file) : null,
                      }));
                    }}
                    className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-white focus:ring-2 focus:ring-[#0041cc] shadow-sm transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#0041cc] file:text-white hover:file:bg-[#003399]"
                  />
                  {preview.image && (
                    <div className="mt-2 h-28 w-40 rounded-xl overflow-hidden border border-gray-200 shadow-md">
                      <img
                        src={preview.image || undefined}
                        alt="service preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Text Areas */}
              <div>
                <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">
                  Service Detail
                </label>
                <textarea
                  rows={3}
                  id="detail"
                  name="detail"
                  value={values.detail}
                  onChange={(e) => setFieldValue("detail", e.target.value)}
                  placeholder="Write a concise description of the service"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm transition"
                />
                <ErrorMessage
                  name="detail"
                  component="div"
                  className="text-xs sm:text-sm font-medium text-red-600 mt-1"
                />
              </div>

              <Inputfield
                label="Heading"
                type="text"
                id="head"
                name="head"
                value={values.head}
                onChange={(e) => setFieldValue("head", e.target.value)}
                placeholder="Enter section heading (e.g., What We Offer)"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm w-full transition"
              />
              <ErrorMessage
                name="head"
                component="div"
                className="text-xs sm:text-sm font-medium text-red-600 mt-1"
              />

              <div>
                <label className="mb-2 font-semibold text-gray-800 text-sm md:text-base">
                  Why Choose Us
                </label>
                <textarea
                  rows={3}
                  id="whyChoose"
                  name="whyChoose"
                  value={values.whyChoose}
                  onChange={(e) => setFieldValue("whyChoose", e.target.value)}
                  placeholder="Key reasons to choose this service"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0041cc] shadow-sm transition"
                />
                <ErrorMessage
                  name="whyChoose"
                  component="div"
                  className="text-xs sm:text-sm font-medium text-red-600 mt-1"
                />
              </div>

              {/* Submit */}
              <div className="text-center mt-4">
                <Primarybtn
                  type="submit"
                  className="rounded-lg px-6 py-3 cursor-pointer text-lg text-white bg-gradient-to-r from-[#002C8B] to-[#0041cc] hover:opacity-90 transition-all shadow-md"
                >
                  {editId ? "Update Service" : "Save Service"}
                </Primarybtn>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Saved Services (Horizontal Cards) */}
      <div className="mt-12">
        <h3 className="text-xl md:text-2xl font-bold text-[#002C8B] mb-6">
          Saved Services
        </h3>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : services?.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 md:p-6 hover:shadow-xl transition"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Left media column */}
                  <div className="w-full md:w-64 flex md:block gap-4">
                    {service.icon && (
                      <div className="h-14 w-14 rounded-lg overflow-hidden border border-gray-200 shadow-md flex items-center justify-center bg-white">
                        <img
                          src={service.icon}
                          alt="icon"
                          className="h-full w-full bg-blue-800 p-1 object-contain"
                        />
                      </div>
                    )}
                    {service.image && (
                      <div className="h-32 w-full md:w-64 rounded-xl overflow-hidden border border-gray-200 shadow-md">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Right content column */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-gray-800">
                          {service.name}
                        </h4>
                        <p className="text-sm text-gray-500">/{service.slug}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(service)}
                          className="px-3 py-1.5 text-sm bg-[#002C8B] text-white rounded-md hover:bg-[#0041cc] transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => dispatch(deleteService(service.id))}
                          className="px-3 py-1.5 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    <div className="mt-3">
                      <h5 className="font-semibold text-[#002C8B] mb-1">
                        {service.head}
                      </h5>
                      <p className="text-gray-600 text-sm mb-2">{service.detail}</p>
                      {service.whyChoose && (
                        <p className="text-gray-700 text-sm"><span className="font-semibold">Why Choose Us:</span> {service.whyChoose}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No services available yet.</p>
        )}
      </div>
    </div>
  );
};

export default ServiceSlide;