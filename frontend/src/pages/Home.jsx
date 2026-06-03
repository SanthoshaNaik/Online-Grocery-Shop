import React from 'react'
import './pagesCSS/Home.css'
import groceryHero from '../components/Assets/grocery_hero.png'

function Home() {
    return (
        <div className="home-page">

            <div className="section1">
                <span className="welcome-tag">WELCOME TO FRESH MART</span>
                <p className='homeText'>FUEL YOUR BODY<br />NOURISH YOUR SOUL..!</p>
                <p className="homeSubText">Discover the freshest organic fruits, vegetables, and pantry essentials delivered straight to your doorstep.</p>
                <a href='/products'> <button className='hbtn'>Explore Here!..</button> </a>
            </div>
            
            <div className="section2">
                <img src={groceryHero} alt="Fresh Mart Groceries" className="home-hero-img" />
            </div>

        </div>
        
    )
}

export default Home
