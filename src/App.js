import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link to handle navigation
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import bg from "./images/apple-splash.png"
import Hero from './pages/Hero'

function App() {
  const styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <section>
    <main className='h-screen w-screen' style={styles}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </Router>
    </main>
    <div class='footer'>
    <li class='quick'>
        <h1>Quick Links</h1>
        <a href="/home">Home Page</a>
        <a href="/about">About Us</a>
        <a href="/">Log In</a>
    </li>
    <li class='contact'>
        <h1>Contact Members</h1>
        <ul>
            <li>Hadi Ghandour +96170711506</li>
            <li>Wajed basbous +96176045923</li>
            <li>Ahmad Dia +96170054234</li>
            <li>Jad Abdallah +96171333931</li>
        </ul>
    </li>
    <div class='follow'>
        <h1>Follow us on</h1>
        <ul>
        <a href=''>Instagram</a>
        <a href=''>Facebook</a>
        </ul>
    </div>
</div>
</section>
  );
}

export default App;
