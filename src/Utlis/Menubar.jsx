import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";


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
    { id: 3, name: 'Web Desiging', path: '/webdesiging' },
    { id: 4, name: 'Web Development', path: '/webdevelopment' },
    { id: 5, name: 'Data Analytics', path: '/dataanalytics' }
]

export const social_links = [
    { id: 1, path: "https://www.facebook.com/aidigisys/", icon: <FaFacebookF /> },
    { id: 2, path: "https://twitter.com", icon: <FaTwitter /> },
    { id: 3, path: "https://instagram.com", icon: <FaInstagram /> },
    { id: 4, path: "https://www.linkedin.com/company/aidsys/", icon: <FaLinkedinIn /> },
    { id: 5, path: "https://youtube.com", icon: <FaYoutube /> },
];

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
    { target: 100, label: "Domain Registered" },
    { target: 100, label: "Completed Projects" },
    { target: 55, label: "Design Made" },
    { target: 500, label: "Software Develop" },
];


//Our Products Page Data
export const ourproducts = [
    { id: 1, name: 'Travel Portal', image: product1, path: '/travelportal' },
    { id: 2, name: 'Digital Campus', image: product2, path: '/digitalcampus' },
    { id: 3, name: 'AI Pay', image: product3, path: '/aipay' },
    { id: 4, name: 'Digital Communicate', image: product4, path: '/digitalcommunicate' },
    { id: 5, name: 'Bot Agent', image: product5, path: '/botagent' },
];