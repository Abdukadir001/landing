import React from 'react'
import './Testimonial.css'
const Testimonial = () => {
  return (
    <section className="testimonial">
        <div className="container">
            <div className="testimonial__box">
            <div className="testimonial__title">
                <p>TESTIMONIALS</p>
                <h1>Read What Other have to Say</h1>
            </div>
            <div className="cards">
                <div className="card">
                    <img src="/man1.png" alt="" />
                    <h3>Andrew Rathore</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                </div>

                <div className="card">
                    <img src="/man2.png" alt="" />
                    <h3>Vera Duncan</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>

                </div><div className="card">
                    <img src="/man3.png" alt="" />
                    <h3>Mark Smith</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                </div>

            </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial