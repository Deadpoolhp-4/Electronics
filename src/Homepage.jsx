import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import How from './components/How'
import Why from './components/Why_us'
import Best from './components/Best'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <How />
      <Why />
      <Best />
    </div>
  )
}

export default Homepage
