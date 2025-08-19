import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

//Import images for services section:
import webhostingimg from '../Assets/Pictures/web_hosting.svg'
import cyberimg from '../Assets/Pictures/cyber_security.svg'
import wevdevimg from '../Assets/Pictures/web_dev.svg'
import uiimg from '../Assets/Pictures/ui.svg'
import dataanalyticsimg from '../Assets/Pictures/data_analytics.svg'
import lotimg from '../Assets/Pictures/internet.svg'
import aimlimg from '../Assets/Pictures/artificial_intelligence.svg'

//import images for our products section:
import product1 from '../Assets/Pictures/product1.png'
import product2 from '../Assets/Pictures/product2.png'
import product3 from '../Assets/Pictures/product3.png'
import product4 from '../Assets/Pictures/product4.png'
import product5 from '../Assets/Pictures/product5.png'

import { FaBrain, FaMicrochip, FaChartLine, FaRobot } from "react-icons/fa"

export const webmenu = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Products', path: '/products' },
    { id: 5, name: 'Contact us', path: '/contactus' }
]

//Side bar Pages Links
export const sidebar_pages = [
    { id: 1, name: 'Web Hosting', path: '/webhosting' },
    { id: 2, name: 'Graphic Desiging', path: '/grahpicdesiging' },
    { id: 3, name: 'AI & ML', path: '/artificial' },
    { id: 4, name: 'Web Development', path: '/webdevelopment' },
    { id: 5, name: 'Data Analytics', path: '/dataanalytics' }
]

//Social Account Link for Drop Down
export const social_links = [
    { id: 1, path: "https://www.facebook.com/aidigisys/", icon: <FaFacebookF /> },
    { id: 2, path: "https://twitter.com", icon: <FaTwitter /> },
    { id: 3, path: "https://instagram.com", icon: <FaInstagram /> },
    { id: 4, path: "https://www.linkedin.com/company/aidsys/", icon: <FaLinkedinIn /> },
    { id: 5, path: "https://youtube.com", icon: <FaYoutube /> },
];

//Services Section
export const servicesitems = [
    { id: 1, name: 'Web Hosting Domain', image: webhostingimg, path: '/webhosting', icon: <FaArrowRight /> },
    { id: 2, name: 'Cyber Security', image: cyberimg, path: '/cybersecurity', icon: <FaArrowRight /> },
    { id: 3, name: 'Development (Software, Website & App)', image: wevdevimg, path: '/webdevelopment', icon: <FaArrowRight /> },
    { id: 4, name: 'Creative (UI/UX & Graphic)', image: uiimg, path: '/grahpicdesiging', icon: <FaArrowRight /> },
    { id: 5, name: 'Data Analytics', image: dataanalyticsimg, path: '/dataanalytics', icon: <FaArrowRight /> },
    { id: 6, name: 'IoT (Internet of Things)', image: lotimg, path: '/lot', icon: <FaArrowRight /> },
    { id: 7, name: 'AI & ML (Artificial Intelligence and Machine Learning)', image: aimlimg, path: '/artificial', icon: <FaArrowRight /> },
];

//Counter
export const counterstext = [
    { target: 100, label: "DOMAIN REGISTERED" },
    { target: 55, label: "COMPLETED PROJECTS" },
    { target: 100, label: "DESIGN MADE" },
    { target: 500, label: "SOFTWARE DEVELOP" },
];

//Our Products Page Data
export const ourproducts = [
    { id: 1, name: 'Travel Portal', dis: 'Travel Portal for travel agencies for want to migrate their traditional business to become OTAs', image: product1, path: '/travelportal' },
    { id: 2, name: 'Digital Campus', dis: 'student Management System with comprehensive list of features', image: product2, path: '/digitalcampus' },
    { id: 3, name: 'AI Pay', dis: 'Payment solutions with a taste of AI', image: product3, path: '/aipay' },
    { id: 4, name: 'Digital Communicate', dis: 'APIs and Tools for communication via SMS, Email & Whatsapp', image: product4, path: '/digitalcommunicate' },
    { id: 5, name: 'Bot Agent', dis: 'Chat bots on whatsapp, facebook etc', image: product5, path: '/botagent' },
];



//Footer Data
//Quick Links
//1: Our Services
export const fourservices = [
    { id: 1, name: 'Web Hosting & Domain', path: '/webhosting' },
    { id: 2, name: 'Cyber Security', path: '/cybersecurity' },
    { id: 3, name: 'Development (Software, Website & App)', path: '/webdevelopment' },
    { id: 4, name: 'Creative (UI/UX & Graphic)', path: '/grahpicdesiging' },
    { id: 5, name: 'Data Analytics', path: '/dataanalytics' },
    { id: 6, name: 'IoT ', path: '/lot' },
    { id: 7, name: 'AI & ML', path: '/artificial' },
]
//2: Quick Links
//Pickup from webmenu top of the file
//3: Our Office
export const ourOfficeMenu = [
    { id: 1, icon: <FaMapLocationDot />, name: 'Suit # TF24 Deans Trade Center Peshawar, Pakistan' },
    { id: 2, icon: <FaMapLocationDot />, name: 'AI Systems Dynamics, 124 City Road, London, U.K, EC1V 2NX' },
    { id: 3, icon: <FaPhone />, name: '+92 313 997 4444' },
    { id: 4, icon: <MdEmail />, name: 'info@aisys.pk' }
]



//Services Section Pages Items:
//AI & Machine Learning Data
export const services = [
    {
        icon: <FaBrain className="w-10 h-10 text-indigo-400" />,
        title: "Machine Learning",
        desc: "Custom ML solutions to help you predict, classify, and automate tasks effectively."
    },
    {
        icon: <FaMicrochip className="w-10 h-10 text-indigo-400" />,
        title: "Deep Learning",
        desc: "Neural networks for image recognition, NLP, and complex problem solving."
    },
    {
        icon: <FaChartLine className="w-10 h-10 text-indigo-400" />,
        title: "Data Analytics",
        desc: "Turn raw data into insights with our advanced analytics & visualization tools."
    },
    {
        icon: <FaRobot className="w-10 h-10 text-indigo-400" />,
        title: "AI Chatbots",
        desc: "Smart conversational agents that engage your users 24/7 with accuracy."
    },
]