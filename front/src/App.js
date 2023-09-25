import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Estore from './pages/EStore';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import Sidebar from './components/Sidebar';


export default function App() {

  return (
    <div>
     <BrowserRouter>
      <Navbar />
        
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/estore' element={<Estore />}></Route>
        <Route path='/product/:id' element={<ProductDetails />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

      </Routes>
      <Sidebar />
      <Footer />
     </BrowserRouter>
    </div>
  );
}

