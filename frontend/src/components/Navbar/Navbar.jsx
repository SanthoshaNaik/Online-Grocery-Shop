import React from 'react'
import "./Navbar.css";
//import "./App.css";

import logo from '../Assets/GLogo.png'
import cart_icon from '../Assets/cartLogo.png'

function Navbar() {
    return (
        <div className='navBarWrapper'>
            {/* <nav className='navBar'> */}
                <div className='nav-logo'>
                   <a href='/home'> <img src={logo} alt='' width={100} height={95} /> </a>
                </div>
                
                <a href='/home' className='links'>Home</a>
                
                <a href='/about-us' className='links'>About Us</a>
                <a href="/contactus" className='links'>Contact Us</a>
                
                <a href='/products' className='links'>Our Products</a>
                
                <a href='/LoginSignup' className='links'>Login</a>
                <div className='nav-cart'>
                 <a href='/Cart' >  <img src={cart_icon} alt='' width={90} height={90} /> </a>
                    <div className="nav-cart-count">0</div>
                </div>
            {/* </nav> */}
        </div>
    )
}

export default Navbar
