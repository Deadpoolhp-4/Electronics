import React from 'react'
import hero1 from '../assets/Hero-1.png'
import hero2 from '../assets/Hero-2.png'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen px-10  gap-10 px-40 py-20'>
      <div className='flex-column  w-1/2'>
        <div>
            <h3 className='font-semibold text-xl text-[#1053D4] mb-6'>
            Best Home Electrician Service
            </h3>
        </div>
        <div>
            <h1 className='text-6xl font-800 text-black mb-5'>
            MARUTI ELECTRONIC SERVICES
            </h1>
        </div>
        <div>
            <p className='text-lg text-gray-500 mb-8'>
            Repairing of all types of Industrial Electronics like Card’s, PLC, HMI and VFD’s. Trading in  Industrial Automation Products
            </p>
        </div>
        <div>
            <img src={hero1} alt="hero"/>
        </div>
      </div>

      <div className='flex-column items-center justify-center'>
        <img src={hero2} alt="hero" />
      </div>
    </div>
  )
}

export default Hero