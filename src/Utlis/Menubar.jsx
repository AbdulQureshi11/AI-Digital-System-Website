import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

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