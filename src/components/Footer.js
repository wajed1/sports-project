import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <section>
    <div class='footer'>
    <li class='quick'>
        <h1>Quick Links</h1>
        <a href="/card">Shop Now</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
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

