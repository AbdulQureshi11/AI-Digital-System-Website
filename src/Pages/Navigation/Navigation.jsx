
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Navigation = () => {

    return (
        <div>

            <Outlet />

            <Footer />
        </div>
    )
}

export default Navigation
