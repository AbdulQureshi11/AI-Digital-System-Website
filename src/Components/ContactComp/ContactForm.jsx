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
        email: Yup.string()
            .email("Invalid email format")
            .required("This Field Required*"),
        phone: Yup.string().required("This Field Required*"),
        subject: Yup.string().required("This Field Required*"),
    })

    const handleSubmit = async (values, { resetForm }) => {
        try {
            // Formspree API call (replace with your Formspree endpoint)
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
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-3xl p-10 border border-gray-100">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-RobotB font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#002C8B] to-[#0041cc]">
                    Get in Touch
                </h2>
                <p className="text-gray-600 font-Robot mt-2 text-lg">
                    We'd love to hear from you! Fill out the form below.
                </p>
            </div>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ values, setFieldValue }) => {
                    return (
                        <Form className="space-y-6">
                            {/* Grid Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <Inputfield
                                        label="Name"
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={values.name}
                                        onChange={(e) => setFieldValue("name", e.target.value)}
                                        className="w-full border font-Robot border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-[#0041cc] shadow-sm transition placeholder:text-opacity-50"
                                        placeholder="Enter your Name"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-sm font-medium text-red-600 mt-1"
                                    />
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
                                        className="w-full border font-Robot border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-[#0041cc] shadow-sm transition placeholder:text-opacity-50"
                                        placeholder="Enter your Email"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-sm font-medium text-red-600 mt-1"
                                    />
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
                                        className="w-full border font-Robot border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-[#0041cc] shadow-sm transition placeholder:text-opacity-50"
                                        placeholder="Enter your Contact Number"
                                    />
                                    <ErrorMessage
                                        name="phone"
                                        component="div"
                                        className="text-sm font-medium text-red-600 mt-1"
                                    />
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
                                        className="w-full border font-Robot border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-[#0041cc] shadow-sm transition placeholder:text-opacity-50"
                                        placeholder="Enter your Subject"
                                    />
                                    <ErrorMessage
                                        name="subject"
                                        component="div"
                                        className="text-sm font-medium text-red-600 mt-1"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <label
                                    htmlFor="description"
                                    className="flex mb-1 text-gray-800 ml-2 text-[18px] font-Robot"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows={6}
                                    id="description"
                                    name="description"
                                    value={values.description}
                                    onChange={(e) => setFieldValue("description", e.target.value)}
                                    className="w-full border font-Robot border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-[#0041cc] shadow-sm transition placeholder:text-opacity-50"
                                    placeholder="Write your message here..."
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <Primarybtn
                                    type="submit"
                                    className="rounded-xl px-8 py-3 font-Robot cursor-pointer text-lg text-white bg-gradient-to-r from-[#002C8B] to-[#0041cc] hover:opacity-90 transition-all shadow-lg"
                                >
                                    Send Message
                                </Primarybtn>
                            </div>

                            {/* Status Messages */}
                            {status === "success" && (
                                <p className="text-green-600 text-center font-medium mt-4">
                                    Your message has been sent successfully!
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-red-600  text-center font-medium mt-4">
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
