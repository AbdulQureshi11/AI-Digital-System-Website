import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './Pages/About'
import Services from './Pages/Services'
import Products from './Pages/Products'
import Contactus from './Pages/Contactus'
import Home from './Pages/Home'

//Our Services Pages Link


import Navigation from './Pages/Navigation/Navigation'

//Our Products Pages Link
import ProductDetail from './Components/OurProductsPagesComp/ProductDetail'
import ServicesDetail from './Components/ServicesPageComp/ServicesDetail'


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
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicesDetail />} />

        {/*Our Products Pages Link */}
        <Route path="/products" element={<Products />} />
  <Route path="/products/:slug" element={<ProductDetail />} />
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
