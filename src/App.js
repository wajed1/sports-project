import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link to handle navigation
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import Card from './pages/Card';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Hero from './pages/Hero'
import { ShopContextProvider } from './context/shop-context';

function App() {
  return ( 


    <section>
      <div className='App'>
      <ShopContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/card" element={<Card />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />
    </Router>
    </ShopContextProvider>
    </div>
</section>
  );
}

export default App;
