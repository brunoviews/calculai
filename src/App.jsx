
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Producto from './pages/Producto/Producto'
import Soluciones from './pages/Soluciones/Soluciones'
import Contact from './pages/Contact/Contact'
import Precio from './pages/Precio/Precio'
import './App.css'

function App() {
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/producto" },
    { name: "Pricing", path: "/precio" },
    { name: "Contact", path: "/contact" },
    
    
  ];

  const footerLinks = [
    {name: "Facebook", path: "https://www.facebook.com"},
    {name: "Twitter", path: "https://www.twitter.com"},
    {name: "Youtube", path: "https://www.youtube.com"},

  ];
 
  return (
    <>
      <div>
    <Router>
      
      <Navbar links={navLinks}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/soluciones" element={<Soluciones />} />
        <Route path="/precio" element={<Precio />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer links={footerLinks}/>
    </Router>
    
    </div>
 
    </>
     );
  
}

export default App
