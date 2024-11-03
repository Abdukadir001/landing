import React from 'react'
import './App.css'
import Companies from './components/Companies/Companies'
import Header from './components/Header/Header'
import Branding from './components/Branding/Branding'
import Custome from './components/Custome/Custome'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
 <>
 <Header/>
 <Companies/>
 <Branding/>
 <Custome/>
 <Testimonial/>
 <Contact/>
 <Footer/>
 </>  
  )
}

export default App