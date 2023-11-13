import React from 'react';
import './About.css'

function About() {
    return (
        <section>
            <div class="container">
                <img class='image-container' src="https://w7.pngwing.com/pngs/497/719/png-transparent-football-1080p-display-resolution-high-definition-television-three-dimensional-football-field-lighted-ballpark-television-other-atmosphere.png" alt="Football grass" />
                <div class="image-text">Overview of Sports Scroll</div>
                <img class='photo' src='https://mlmbqcss2lv7.i.optimole.com/w:auto/h:auto/q:90/f:best/https://www.sispitches.com/wp-content/uploads/2016/11/3-Graves-Football-Hub-SISTurf-2016.jpg' alt='man shooting' />
                <div class='vision'>
                    <h1>  Our Vision</h1>
                    <p>   Our vision is to empower football talent worldwide. We're dedicated to connecting players with recruiters, creating opportunities, and changing the game. Together, we shape the future of football</p>
                </div>
                <div class="mission">
                    <h1> Our Mission</h1>
                    <p> We are driven by a mission to transform the landscape of football talent discovery. We are dedicated to providing a dynamic platform that not only empowers young players to showcase their skills but also streamlines the recruitment process for scouts and recruiters. Our vision is rooted in the belief that talent should be discovered without limitations, and every aspiring player deserves an equal opportunity to be seen and recognized.</p>
                </div>
                <img class='photo2' src='https://www.pngitem.com/pimgs/m/524-5242519_guy-playing-football-png-transparent-png.png' alt='a kid playing' />
            </div>
            <div class='footer'>
                <li class='quick'>
                    <h1>Quick Links</h1>
                    <a href="/home">Home Page</a>
                    <a href="/contact">Contact</a>
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

export default About