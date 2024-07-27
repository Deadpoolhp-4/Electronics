import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider'
import How from './components/How'
import Why from './components/Why_us'
// import Best from './components/Best'
import Faq from './components/Faq'
  // import Meet from './components/Meet'
  // import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Slider />  
      <How />
      <Why />
      {/* <Best /> */}
      <Faq />
      {/* <Meet />
      <Testimonial /> */}
      <Footer />
    </div>
  )
}

export default Homepage
