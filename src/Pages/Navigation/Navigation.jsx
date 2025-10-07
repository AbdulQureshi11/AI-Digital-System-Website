import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'

const Navigation = () => {
    const location = useLocation();

    
    const hideFooter = location.pathname.startsWith("/dashboard");

    
    const hideHeader = location.pathname === "/" || location.pathname.startsWith("/dashboard");

    return (
        <div>
            {!hideHeader && <Header />}
            <Outlet />
            {!hideFooter && <Footer />}
        </div>
    )
}

export default Navigation
