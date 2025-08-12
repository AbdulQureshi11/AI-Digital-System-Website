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
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/*MenuBar */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='' element={<Home />} />

        {/*MenuBar */}
        <Route path='/webhosting' element={<Webhosting />} />
        <Route path='/grahpicdesiging' element={<Graphicdesiging />} />
        <Route path='/webdesiging' element={<Webdesiging />} />
        <Route path='/webdevelopment' element={<Webdevelopment />} />
        <Route path='/dataanalytics' element={<Dataanalytics />} />
      </>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
