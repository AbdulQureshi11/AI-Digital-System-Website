//import images for our products section:
import product1 from '../Assets/Pictures/product1.png'
import product2 from '../Assets/Pictures/product2.png'
import product3 from '../Assets/Pictures/product3.png'
import product4 from '../Assets/Pictures/product4.png'
import product5 from '../Assets/Pictures/product5.png'

export const ourproducts = [
    {
        id: 1,
        name: 'Travel Portal',
        slug: 'travel-portal',
        dis: 'Travel Portal for travel agencies for want to migrate their traditional business to become OTAs',
        image: product1,
        path: '/travelportal',
        detail: `Simplify and enhance your travel business with our advanced Travel Portal solution. From booking flights and hotels to managing holiday packages, our portal is designed to give customers a seamless experience while helping agencies grow faster.`,
        bullets: [
            'Easy integration with flight & hotel APIs',
            'Customizable holiday packages',
            'Secure online booking & payment system',
            'Multi-language & multi-currency support',
            'User-friendly admin panel for quick management'
        ],
        whyChoose: `Our Travel Portal is trusted by agencies, startups, and enterprises to provide customers with a smooth booking journey. From flight reservations to holiday planning, our portal ensures efficiency, scalability, and a modern travel experience.`
    },
    {
        id: 2,
        name: 'Digital Campus',
        slug: 'digital-campus',
        dis: 'student Management System with comprehensive list of features',
        image: product2,
        path: '/digitalcampus',
        detail: `Empower your institution with our AI-powered Digital Campus platform. From smart classrooms to student management, the system transforms education delivery, improves efficiency, and enhances student experiences.`,
        bullets: [
            'Smart student & faculty management',
            'AI-driven analytics for performance tracking',
            'Seamless online learning integration',
            'Secure & scalable digital infrastructure'
        ],
        whyChoose: `Our Digital Campus solution is trusted by leading institutions worldwide to simplify academic operations, enhance communication, and provide a modern, AI-enabled learning ecosystem. Shape the future of education with us.`
    },
    {
        id: 3,
        name: 'AI Pay',
        slug: 'ai-pay',
        dis: 'Payment solutions with a taste of AI',
        image: product3,
        path: '/aipay',
        detail: `Transform your transactions with our AI-driven payment solution designed to ensure security, speed, and scalability. Whether you’re running an e-commerce store or managing enterprise-level payments, this system adapts to your needs.`,
        bullets: [
            'Lightning-fast transactions',
            'Advanced fraud detection',
            'Scales with your business growth',
            'Seamless integration with platforms'
        ],
        whyChoose: `Our product is trusted by businesses worldwide to enhance efficiency, reduce risks, and provide a future-ready payment ecosystem. Experience the next level of AI innovation in your workflow.`
    },
    {
        id: 4,
        name: 'Digital Communicate',
        slug: 'digital-communicate',
        dis: 'APIs and Tools for communication via SMS, Email & Whatsapp',
        image: product4,
        path: '/digitalcommunicate',
        detail: `Revolutionize the way your organization connects with our AI-powered Digital Communication platform. From instant messaging and video conferencing to secure document sharing, this solution ensures seamless collaboration and enhanced productivity.`,
        bullets: [
            'Real-time messaging & video conferencing',
            'AI-assisted meeting scheduling',
            'Secure file sharing & cloud storage',
            'Cross-platform integration for teams'
        ],
        whyChoose: `Our Digital Communication platform is trusted by organizations worldwide to enhance collaboration, improve efficiency, and ensure secure, AI-driven connectivity. Empower your teams with the tools they need to succeed in a digital-first world.`
    },
    {
        id: 5,
        name: 'Bot Agent',
        slug: 'bot-agent',
        dis: 'Chat bots on whatsapp, facebook etc',
        image: product5,
        path: '/botagent',
        detail: `Transform your business communication with our intelligent AI Bot Agent. Designed to streamline collaboration, it provides secure, efficient, and automated digital communication tools that keep your teams connected anytime, anywhere.`,
        bullets: [
            'Smart, real-time chat and video meetings',
            'AI-driven scheduling and task reminders',
            'Encrypted file sharing with cloud backup',
            'Seamless integration across multiple platforms'
        ],
        whyChoose: `Trusted by enterprises worldwide, our AI Bot Agent empowers organizations to communicate smarter and faster. With advanced automation, intelligent collaboration tools, and enterprise-grade security, it enables your teams to work seamlessly in today’s digital-first world.`
    }
];
