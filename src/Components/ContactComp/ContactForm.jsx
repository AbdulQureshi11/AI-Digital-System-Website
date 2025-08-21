import Inputfield from "../Common/Inputfield"
import { Formik, Form, ErrorMessage } from "formik"
import Primarybtn from "../Common/Primarybtn"
import * as Yup from "yup"
import { useState } from "react"

const ContactForm = () => {
    const [status, setStatus] = useState("")

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        description: "",
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("This Field Required*"),
        email: Yup.string().email("Invalid email format").required("This Field Required*"),
        phone: Yup.string().required("This Field Required*"),
        subject: Yup.string().required("This Field Required*"),
    })

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const response = await fetch("https://formspree.io/f/xpwlgalj", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            })
            if (response.ok) {
                setStatus("success")
                resetForm()
            } else {
                setStatus("error")
            }
        } catch (err) {
            setStatus("error")
        }
    }

    return (
        <div className="w-full bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-xl px-6 py-8 md:py-12 border border-gray-100">
            {/* Heading */}
            <div className="text-center mb-6 sm:mb-10">
                <h2 className="text-4xl sm:text-3xl md:text-4xl font-RobotB font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#002C8B] to-[#0041cc]">
                    Get in Touch
                </h2>
                <p className="text-gray-600 font-Robot mt-2 text-md sm:text-base md:text-lg">
                    We'd love to hear from you! Fill out the form below.
                </p>
            </div>

            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                {({ values, setFieldValue }) => {
                    return (
                        <Form className="space-y-9">
                            {/* Grid Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 space-y-3">
                                {/* Name */}
                                <div>
                                    <Inputfield
                                        label="Name"
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={values.name}
                                        onChange={(e) => setFieldValue("name", e.target.value)}
                                        className="w-full border font-Robot border-gray-300 rounded-lg px-4 py-2 sm:px-5 sm:py-3 focus:ring-2 focus:ring-[#0041cc] shadow-sm transition placeholder:text-opacity-50 text-sm md:text-base"
                                        placeholder="Enter your Name"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-xs sm:text-sm font-medium text-red-600 mt-1" />
                                </div>

                                {/* Email */}
                                <div>
                                    <Inputfield
                                        label="Email"
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={values.email}
                                        onChange={(e) => setFieldValue("email", e.target.value)}
                                        className="w-full border font-Robot border-gray-300 rounded-lg px-4 py-2 sm:px-5 sm:py-3 focus:ring-2 focus:ring-[#0041cc] shadow-sm transition placeholder:text-opacity-50 text-sm md:text-base"
                                        placeholder="Enter your Email"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-xs sm:text-sm font-medium text-red-600 mt-1" />
                                </div>

                                {/* Phone */}
                                <div>
                                    <Inputfield
                                        label="Contact Number"
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={values.phone}
                                        onChange={(e) => setFieldValue("phone", e.target.value)}
                                        className="w-full border font-Robot border-gray-300 rounded-lg px-4 py-2 sm:px-5 sm:py-3 focus:ring-2 focus:ring-[#0041cc] shadow-sm transition placeholder:text-opacity-50 text-sm md:text-base"
                                        placeholder="Enter your Contact Number"
                                    />
                                    <ErrorMessage name="phone" component="div" className="text-xs sm:text-sm font-medium text-red-600 mt-1" />
                                </div>

                                {/* Subject */}
                                <div>
                                    <Inputfield
                                        label="Subject"
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={values.subject}
                                        onChange={(e) => setFieldValue("subject", e.target.value)}
                                        className="w-full border font-Robot border-gray-300 rounded-lg px-4 py-2 sm:px-5 sm:py-3 focus:ring-2 focus:ring-[#0041cc] shadow-sm transition placeholder:text-opacity-50 text-sm md:text-base"
                                        placeholder="Enter your Subject"
                                    />
                                    <ErrorMessage name="subject" component="div" className="text-xs sm:text-sm font-medium text-red-600 mt-1" />
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <label
                                    htmlFor="description"
                                    className="flex mb-1 text-gray-800 md:font-normal font-semibold ml-2 sm:ml-2 text-[15px] sm:text-base md:text-lg font-Robot"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    id="description"
                                    name="description"
                                    value={values.description}
                                    placeholder="Write your message here"
                                    onChange={(e) => setFieldValue("description", e.target.value)}
                                    className="w-full border outline-none font-Robot border-gray-300 rounded-lg px-4 py-2 sm:px-5 sm:py-3 focus:ring-2 focus:ring-[#0041cc] md:placeholder:text-[14px] placeholder:text-[12px]  shadow-sm transition placeholder:text-opacity-50 text-sm md:text-base"

                                />
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <Primarybtn
                                    type="submit"
                                    className="rounded-lg px-5 sm:px-8 py-2.5 sm:py-3 font-Robot cursor-pointer text-sm sm:text-base md:text-lg text-white bg-gradient-to-r from-[#002C8B] to-[#0041cc] hover:opacity-90 transition-all shadow-md sm:shadow-lg"
                                >
                                    Send Message
                                </Primarybtn>
                            </div>

                            {/* Status Messages (same typography scale) */}
                            {status === "success" && (
                                <p className="font-Robot text-green-600 text-sm sm:text-base md:text-lg text-center font-medium mt-3 sm:mt-4">
                                    Your message has been sent successfully!
                                </p>
                            )}
                            {status === "error" && (
                                <p className="font-Robot text-red-600 text-sm sm:text-base md:text-lg text-center font-medium mt-3 sm:mt-4">
                                    Something went wrong. Please try again later.
                                </p>
                            )}
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default ContactForm
