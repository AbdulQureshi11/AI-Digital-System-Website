
import { FaArrowRight } from "react-icons/fa"
//Icon Images SVG
import webhostingimg from '../Assets/Pictures/web_hosting.svg'
import cyberimg from '../Assets/Pictures/cyber_security.svg'
import wevdevimg from '../Assets/Pictures/web_dev.svg'
import uiimg from '../Assets/Pictures/ui.svg'
import dataanalyticsimg from '../Assets/Pictures/data_analytics.svg'
import lotimg from '../Assets/Pictures/internet.svg'
import aimlimg from '../Assets/Pictures/artificial_intelligence.svg'

//Services Images
import Hosting from '../Assets/Pictures/Webhosting.jpg'
import CyberSecurity from '../Assets/Pictures/CyberSecurity.png'
import WebDevelopment from '../Assets/Pictures/WebDevelopment.avif'
import GraphicDesigning from '../Assets/Pictures/GraphicDesigning.jpeg'
import DataAnalytics from '../Assets/Pictures/DataAnalytics.webp'
import LOT from '../Assets/Pictures/LOT.jpeg'
import AIimg from "../Assets/Pictures/AI.png"


export const servicesitems = [
    {
        id: 1,
        name: 'Web Hosting Domain',
        image: Hosting,
        icon: webhostingimg,
        slug: 'webhosting',
        arrow: <FaArrowRight />,
        detail: ` Elevate your online presence with our premium Web Hosting solutions. We provide fast, secure, and reliable hosting services tailored to meet the needs of businesses of all sizes. From shared hosting to dedicated servers, our scalable solutions ensure maximum uptime, robust security, and seamless performance. Host your website with confidence and leverage our expert support to keep your digital operations running smoothly. Experience the power of high-performance hosting designed to grow with your business. `,
        head: `  Ready to Launch Your Website? `,
        whyChoose: ` Let’s collaborate to set up a powerful web hosting environment for your business. Reliable, secure, and scalable solutions to ensure your website runs flawlessly. `
    },
    {
        id: 2,
        name: 'Cyber Security',
        image: CyberSecurity,
        icon: cyberimg,
        slug: 'cybersecurity',
        arrow: <FaArrowRight />,
        detail: `  Protect your digital assets and ensure business continuity with our comprehensive Cyber Security solutions. We provide advanced threat detection, vulnerability management, and real-time monitoring to safeguard your network, data, and applications. From firewall implementation to endpoint protection and cybersecurity audits, our expert team delivers robust and scalable security strategies. Stay ahead of cyber threats and secure your business with solutions designed for reliability, compliance, and peace of mind. `,
        head: `   Ready to Secure Your Business? `,
        whyChoose: `  Let’s collaborate to implement a robust cyber security framework for your organization. Protect your data, networks, and applications with our expert solutions. `
    },
    {
        id: 3,
        name: 'Development (Software, Website & App)',
        image: WebDevelopment,
        icon: wevdevimg,
        slug: 'webdevelopment',
        arrow: <FaArrowRight />,
        detail: `   Build modern, responsive, and high-performing web and mobile applications with our expert development team. We leverage the latest technologies such as React.js, Next.js, Node.js, and mobile frameworks to deliver scalable and secure solutions tailored to your business needs. From concept to deployment, our team ensures seamless user experiences, optimized performance, and maintainable code architecture to drive your digital growth. `,
        head: `  Ready to Launch Your Digital Presence? `,
        whyChoose: ` Let’s collaborate to develop cutting-edge web and mobile applications using modern technologies. Deliver seamless user experiences, scalable performance, and innovative solutions for your business growth. `
    },
    {
        id: 4,
        name: 'Creative (UI/UX & Graphic)',
        image: GraphicDesigning,
        icon: uiimg,
        slug: 'graphicdesign',
        arrow: <FaArrowRight />,
        detail: `   Transform your ideas into visually stunning and user-friendly digital experiences. Our expert team specializes in UI/UX design, graphic design, branding, and creative visuals that engage and delight your audience. Using modern tools like Figma, Adobe Photoshop, and Illustrator, we craft designs that are not only beautiful but also functional, ensuring intuitive navigation, responsive layouts, and a consistent brand identity across all platforms. `,
        head: ` Ready to Enhance Your Visual Identity?`,
        whyChoose: `   Let’s collaborate to create innovative and engaging designs for your brand. From UI/UX to graphic and branding solutions, we ensure your business stands out with visually compelling and intuitive experiences. `
    },
    {
        id: 5,
        name: 'Data Analytics',
        image: DataAnalytics,
        icon: dataanalyticsimg,
        slug: 'dataanalytics',
        arrow: <FaArrowRight />,
        detail: `  Unlock actionable insights from your data with our comprehensive Data Analytics services. We specialize in collecting, processing, and analyzing complex datasets to help you make informed business decisions. Leveraging tools like Python, SQL, Power BI, and advanced statistical models, we transform raw data into meaningful visualizations and predictive analytics that drive growth, efficiency, and innovation for your organization.`,
        head: `Ready to Harness Your Data?`,
        whyChoose: `   Collaborate with us to turn your business data into strategic insights. From dashboards to predictive analytics, we provide data-driven solutions that empower smarter decision-making and drive measurable results.`
    },
    {
        id: 6,
        name: 'IoT (Internet of Things)',
        image: LOT,
        icon: lotimg,
        slug: 'lot',
        arrow: <FaArrowRight />,
        detail: ` Transform your business operations with our Internet of Things (IoT) solutions. We design and implement connected systems that collect, analyze, and act on real-time data to improve efficiency, safety, and decision-making. From smart devices and sensors to IoT platforms and cloud integration, our solutions enable automation, monitoring, and intelligent insights for industries ranging from manufacturing to healthcare.`,
        head: ` Ready to Connect Your Devices?`,
        whyChoose: `  Let’s collaborate to implement innovative IoT solutions tailored to your business needs. Automate processes, gather real-time insights, and enhance operational efficiency with smart, connected systems.`
    },
    {
        id: 7,
        name: 'Artificial Intelligence & Machine Learning',
        image: AIimg,
        icon: aimlimg,
        slug: 'artificial',
        arrow: <FaArrowRight />,
        detail: `Empower your business with the full potential of Artificial Intelligence and Machine Learning. Our advanced AI-driven solutions help you automate processes, analyze complex data, and uncover hidden opportunities that drive growth and innovation. From predictive analytics to intelligent automation and personalized customer experiences, we deliver cutting-edge technology tailored to your unique business needs. Step into the future with scalable, smart, and innovative AI solutions designed to keep your business ahead of the competition.`,
        head: ` Ready to Start Your AI Journey? `,
        whyChoose: ` Let’s collaborate to create powerful AI-driven systems tailored to your needs.
            Whether it’s ML, NLP, or Computer Vision — we’re here to help you innovate.`
    },
];
