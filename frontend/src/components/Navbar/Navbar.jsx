import React, { useState } from 'react'
import "./Navbar.css";
//import "./App.css";

import logo from '../Assets/GLogo.png'
import cart_icon from '../Assets/cartLogo.png'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='navBarWrapper'>
            <div className='nav-logo'>
               <a href='/home'> <img src={logo} alt='' width={100} height={95} /> </a>
            </div>

            {/* Hamburger Menu Toggle Button */}
            <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            
            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <a href='/home' className='links' onClick={() => setMenuOpen(false)}>Home</a>
                <a href='/about-us' className='links' onClick={() => setMenuOpen(false)}>About Us</a>
                <a href="/contactus" className='links' onClick={() => setMenuOpen(false)}>Contact Us</a>
                <a href='/products' className='links' onClick={() => setMenuOpen(false)}>Our Products</a>
                <a href='/LoginSignup' className='links' onClick={() => setMenuOpen(false)}>Login</a>
            </div>

            <div className='nav-cart'>
             <a href='/Cart' >  <img src={cart_icon} alt='' width={90} height={90} /> </a>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar
