import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link to handle navigation
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
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
      </Routes>
    </Router>
    </main>
  );
}

export default App;
