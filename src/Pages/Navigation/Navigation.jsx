
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Navigation = () => {

    return (
        <div>

            <Outlet />

            <Footer />
        </div>
    )
}

export default Navigation
