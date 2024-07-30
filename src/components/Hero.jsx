import React from 'react'
import hero1 from '../assets/Hero-1.png'
import hero2 from '../assets/Hero-2.png'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center h-full px-10 gap-10 md:px-40 py-20'>
      <div className='flex flex-col w-full md:w-1/2 items-start'>
        <div>
            <h3 className='font-semibold text-xl text-[#1053D4] mb-6'>
            Best Home Electrician Service
            </h3>
        </div>
        <div>
            <h1 className='text-4xl md:text-6xl font-800 text-black mb-5'>
            MARUTI ELECTRONIC SERVICES
            </h1>
        </div>
        <div>
            <p className='text-lg text-gray-500 mb-8'>
            Repairing of all types of Industrial Electronics like Card's, PLC, HMI and VFD's. Trading in Industrial Automation Products
            </p>
        </div>
        <div>
            <img src={hero1} alt="hero" className='w-full'/>
        </div>
      </div>

      <div className='flex flex-col items-center justify-between w-full md:w-auto flex-grow'>
        <img src={hero2} alt="hero" className='w-full md:w-auto h-auto max-h-[600px]'/>
      </div>
    </div>
  )
}

export default Hero