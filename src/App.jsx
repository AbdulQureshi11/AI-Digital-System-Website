import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './Pages/About'
import Services from './Pages/Services'
import Products from './Pages/Products'
import Contactus from './Pages/Contactus'
import Home from './Pages/Home'

//Our Services Pages Link
import Webhosting from './Pages/ServicesSection_Pages/Webhosting'
import Cybersecurity from './Pages/ServicesSection_Pages/Cybersecurity'
import Webdevelopment from './Pages/ServicesSection_Pages/Webdevelopment'
import Graphicdesiging from './Pages/ServicesSection_Pages/Graphicdesiging'
import Dataanalytics from './Pages/ServicesSection_Pages/Dataanalytics'
import LOT from './Pages/ServicesSection_Pages/LOT'
import AIML from './Pages/ServicesSection_Pages/AIML'

//Our Products Pages Link
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


        {/*Page linked in Services Only */}
        <Route path='/webhosting' element={<Webhosting />} />
        <Route path='/cybersecurity' element={<Cybersecurity />} />
        <Route path='/webdevelopment' element={<Webdevelopment />} />
        <Route path='/grahpicdesiging' element={<Graphicdesiging />} />
        <Route path='/dataanalytics' element={<Dataanalytics />} />
        <Route path='/lot' element={<LOT />} />
        <Route path='/artificial' element={<AIML />} />

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
