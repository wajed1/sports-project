import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {BiLogoVimeo} from 'react-icons/bi'
import SubscribeButton from './SubscribeButton';
import './Footer.css'

export const Footer = () => {
  return (

    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to receive our best and latest offers
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form className='input-area'>
              <SubscribeButton className='subbtn'/>

          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <a href='/signup'>Get Started</a>
            <a href='/about'>Our Story</a>
            <a href='/about'>Our Vision</a>
            <a href='/about'>Our Mission</a>
            <a href='/'>Terms of Service</a>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <a href='/contact'>Contact Us</a>
            <a href='/'>Support</a>
            <a href='/'>Sponsorships</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Shop</h2>
            <a href='/card'>Visit our shop</a>
            <a href='/cart'>Cart</a>
            <a href='/'>New deals</a>
            <a href='/'>Feedback</a>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.youtube.com/">Youtube</a>
            <a href="https://twitter.com/">Twitter</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a href='/' className='social-logo'>
              VShop
              <BiLogoVimeo />
            </a>
          </div>
          <small class='website-rights'>VShop ©️ 2023</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}