import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

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


//Counter
export const counterstext = [
    { target: 100, label: "DOMAIN REGISTERED" },
    { target: 55, label: "COMPLETED PROJECTS" },
    { target: 100, label: "DESIGN MADE" },
    { target: 500, label: "SOFTWARE DEVELOP" },
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



