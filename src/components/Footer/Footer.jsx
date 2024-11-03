import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="about">
                <div className="about__box">
                    <h4>Digital Agency</h4>
                    <p>Building digital products, 
                    brands & experience</p>

                </div>

                <div className="about__box1">
                    <h4>Resources</h4>
                    <p>Guides</p>
                    <p>Blog</p>
                    <p>Cuistomer Stories</p>
                    <p>Glossery</p>
                </div>

                <div className="about__box2">
                    <h4>Company</h4>
                    <p>About Us</p>
                    <p>Partners</p>
                    <p>Contact Us</p>
                    <p>Careers</p>
                </div>

                <div className="about__box3">
                    <h4>Social Media</h4>
                    <p>LinkedIn</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>

            </div>
            <p className="about__text">© Matheus. Todos os direitos reservados</p>
        </div>
    </footer>
  )
}

export default Footer