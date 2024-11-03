import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
    <header className="header">
        <div className="container">
            <nav className="nav">
            <img src="/logo.png" alt="" />
            <div className="menu">
                <a href="">home</a>
                <a href="">about</a>
                <a href="">testimonials</a>
                <a href="">contact</a>
            </div>
            </nav>
        </div>
        <div className="title">
            <div className="box1">
            <h1>Building digital products, brands & experience</h1>
                <p>Digital Agency is your online team mangement tool that easy and prompt
                </p>
                <button>Contact Us</button>

            </div>
            <img src="/img1.svg" alt="" />
        </div>
    </header>
    </>
  )
}

export default Header