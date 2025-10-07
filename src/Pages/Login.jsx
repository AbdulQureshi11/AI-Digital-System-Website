import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Background from "../Components/Background/Background";
import ParticlesBg from "../Components/ParticalsComp/ParticalsBg";
import Inputfield from "../Components/Common/Inputfield";
import Primarybtn from "../Components/Common/Primarybtn";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Assets/Pictures/logo.svg"; // ✅ Your logo here

export default function Login() {
    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required*"),
        password: Yup.string().required("Password is required*"),
    });

    const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
        try {
            const res = await axios.post(
                "http://localhost:9000/api/auth/login",
                {
                    username: values.username.trim(),
                    password: values.password.trim(),
                },
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            localStorage.setItem("token", res.data.token);
            window.location.href = "/dashboard"; // redirect
        } catch (err) {
            setFieldError("username", "Invalid username or password");
            setFieldError("password", "Invalid username or password");
        } finally {
            setSubmitting(false);
        }
    };

    // Animations
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.9, y: -40 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const inputVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.4 },
        }),
    };

    return (
        <div className="relative w-full h-screen flex items-center justify-center font-Robot">
            {/* ✅ Background */}
            <Background>
                <ParticlesBg id="particles" />
            </Background>

            {/* ✅ Login Box */}
            <motion.div
                className="absolute w-[90%] max-w-md rounded-3xl shadow-2xl p-8 border border-gray-700
        bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1e3a8a] text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* ✅ Logo on Top */}
                <motion.div
                    className="flex justify-center mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { duration: 0.6 } }}
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-28 drop-shadow-[0_0_15px_rgba(0,202,255,0.8)] hover:scale-110 transition-transform duration-300"
                    />
                </motion.div>

                {/* Heading */}
                <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                >
                    <h1 className="text-3xl font-extrabold text-[#00CAFF] drop-shadow-lg">
                        Admin Login
                    </h1>
                    <p className="text-gray-300 mt-2 text-sm">
                        Please enter your credentials to access the dashboard
                    </p>
                </motion.div>

                {/* Formik Form */}
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, handleChange, handleBlur, isSubmitting, errors }) => (
                        <Form className="space-y-6">
                            {/* Username */}
                            <motion.div
                                variants={inputVariants}
                                initial="hidden"
                                animate="visible"
                                custom={1}
                            >
                                <Inputfield
                                    label="Username"
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter your username"
                                    className="border border-gray-500 bg-white/10 text-white placeholder-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#00CAFF] focus:border-[#00CAFF] shadow-sm transition-all"
                                />
                                <ErrorMessage
                                    name="username"
                                    component="div"
                                    className="text-xs font-medium text-red-400 mt-1"
                                />
                            </motion.div>

                            {/* Password */}
                            <motion.div
                                variants={inputVariants}
                                initial="hidden"
                                animate="visible"
                                custom={2}
                            >
                                <Inputfield
                                    label="Password"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter your password"
                                    className="border border-gray-500 bg-white/10 text-white placeholder-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#00CAFF] focus:border-[#00CAFF] shadow-sm transition-all"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-xs font-medium text-red-400 mt-1"
                                />
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div
                                className="pt-2"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                            >
                                <Primarybtn
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full rounded-xl px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#002C8B] to-[#00CAFF] hover:opacity-90 hover:scale-105 transition-all shadow-lg"
                                >
                                    {isSubmitting ? "Logging in..." : "Login"}
                                </Primarybtn>
                            </motion.div>
                        </Form>
                    )}
                </Formik>

                {/* Footer */}
                <motion.div
                    className="text-center mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.6 } }}
                >
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} AI Digital Systems — All Rights
                        Reserved
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
