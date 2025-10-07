import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Services from './Pages/Services';
import Products from './Pages/Products';
import Contactus from './Pages/Contactus';
import Home from './Pages/Home';

// Our Services Pages Link
import Navigation from './Pages/Navigation/Navigation';

// Our Products Pages Link
import ProductDetail from './Components/OurProductsPagesComp/ProductDetail';
import ServicesDetail from './Components/ServicesPageComp/ServicesDetail';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';        // ✅ Login Page
import ProtectedRoute from './ProtectedRoute'; // ✅ ProtectedRoute wrapper

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public routes with navigation */}
        <Route path='/' element={<Navigation />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contactus' element={<Contactus />} />

          {/* Dynamic Services Page Routing */}
          <Route path="/services/:slug" element={<ServicesDetail />} />

          {/* Dynamic Products Page Routing */}
          <Route path="/products/:slug" element={<ProductDetail />} />
        </Route>

        {/* Login Route (no navigation bar) */}
        <Route path='/login' element={<Login />} />

        {/* Protected Dashboard Route */}
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
