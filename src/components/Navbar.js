import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  return (
    <nav>
      <h1 className='Nav-logo'>Sports Scroll</h1>
      <ul>
        <li><Link className='a' to="/home">Home</Link></li>
        <li><Link className='a' to="/about">About</Link></li>
        <li><Link className='a' to="/contact">Contact</Link></li>
        <li><Link className='a' to="/">Log In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
