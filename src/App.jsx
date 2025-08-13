import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './Pages/About'
import Services from './Pages/Services'
import Products from './Pages/Products'
import Contactus from './Pages/Contactus'
import Home from './Pages/Home'
import Webhosting from './Pages/Sidebar-Pages/Webhosting'
import Graphicdesiging from './Pages/Sidebar-Pages/Graphicdesiging'
import Webdesiging from './Pages/Sidebar-Pages/Webdesiging'
import Webdevelopment from './Pages/Sidebar-Pages/Webdevelopment'
import Dataanalytics from './Pages/Sidebar-Pages/Dataanalytics'
import AIML from './Pages/ServicesSection_Pages/AIML'
import Cybersecurity from './Pages/ServicesSection_Pages/Cybersecurity'
import LOT from './Pages/ServicesSection_Pages/LOT'
import Travelportal from './Pages/Products_pages/Travelportal'
import Digitalcampus from './Pages/Products_pages/Digitalcampus'
import AIpay from './Pages/Products_pages/AIpay'
import Digitalcommunicate from './Pages/Products_pages/Digitalcommunicate'
import BotAgent from './Pages/Products_pages/BotAgent'
import Navigation from './Pages/Navigation/Navigation'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      //Navigation of Footer visible on every page      
      <Route path='/' element={<Navigation />}>

        {/*MenuBar */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='' element={<Home />} />

        {/*Page linked in Sidebar & Services */}
        <Route path='/webhosting' element={<Webhosting />} />
        <Route path='/grahpicdesiging' element={<Graphicdesiging />} />
        <Route path='/webdesiging' element={<Webdesiging />} />
        <Route path='/webdevelopment' element={<Webdevelopment />} />
        <Route path='/dataanalytics' element={<Dataanalytics />} />

        {/*Page linked in Services Only */}
        <Route path='/artificial' element={<AIML />} />
        <Route path='/cybersecurity' element={<Cybersecurity />} />
        <Route path='/lot' element={<LOT />} />

        {/*Our Products Pages Link */}
        <Route path='/travelportal' element={<Travelportal />} />
        <Route path='/digitalcampus' element={<Digitalcampus />} />
        <Route path='/aipay' element={<AIpay />} />
        <Route path='/digitalcommunicate' element={<Digitalcommunicate />} />
        <Route path='/botagent' element={<BotAgent />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
