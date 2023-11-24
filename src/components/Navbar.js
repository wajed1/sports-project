import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import './navbar.css'

function Navbar() {
  return (
    <nav className="fixed top-0 absolute w-full h-[4rem] py-4 " >
      <ul className="flex items-center justify-center space-x-10 w-full px-6">
        <li className="text-[#98EC65] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse "><Link to="/card">Shop Now</Link></li>
        <li className="text-[#fff] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse "><Link className='a' to="/about">About</Link></li>
        <li className="text-[#fff] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse "><Link className='a' to="/contact">Contact</Link></li>
        <li className="text-[#fff] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse "><Link className='a' to="/">Log In</Link></li>
        <li className="text-[#fff] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse "><Link className='a' to="/cart"><ShoppingCart size={32} /></Link></li>
        <li className="text-[#000] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse "><Link className='a' to="/about">About</Link></li>
        <li className="text-[#000] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse "><Link className='a' to="/contact">Contact</Link></li>
        <li className="text-[#000] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse "><Link className='a' to="/">Log In</Link></li>
        <li className="text-[#000] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse "><Link className='a' to="/cart"><ShoppingCart size={32} /></Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;