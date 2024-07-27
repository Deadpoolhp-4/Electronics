import React from 'react'
import CountUp from 'react-countup'
import { FaUsers } from 'react-icons/fa' // Importing Font Awesome Users icon
import img from '../assets/Why.png'

const Why_us = () => {
  return (
    <div className="px-4 py-10 md:px-40 md:py-20 bg-[#1053D4]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full md:w-1/2 h-full">
          <h1 className="text-l font-bold mb-4 text-[#A8C64B]">
            Why Choose Us
          </h1>
          <p className="text-white text-3xl md:text-6xl mb-4">
            Trusted services with <br />
            affordable prices.
          </p>
          <div className="flex items-center pt-10">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full md:h-screen">
          <div className="flex flex-row md:flex-row justify-center items-center gap-4 mb-20 md:pl-10">
            <div className="text-left px-4 border-r-0 md:border-r-2">
              <p className="text-4xl md:text-6xl font-semibold text-white m-0 p-0">
                <CountUp end={12} duration={5} /> +
              </p>
              <p className="text-white text-lg md:text-xl m-0 p-0">
                Years Experience
              </p>
            </div>
            <div className="text-left">
              <p className="text-4xl md:text-6xl font-semibold text-white m-0 p-0">
                <CountUp end={100} duration={10} />+
              </p>
              <p className="text-white text-lg md:text-xl m-0 p-0">
                Satisfied Clients
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 mt-10 md:mt-40">
            <div className="flex flex-col md:flex-row gap-10 border-b-2 border-gray pb-6">
              <div className="w-full md:w-1/2 text-left">
                <FaUsers className="text-4xl md:text-6xl text-lime-500 mb-4 " />
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Experienced</h2>
                <p className="text-white">We have a long history of experience in the field.</p>
              </div>
              <div className="w-full md:w-1/2 text-left">
                <FaUsers className="text-4xl md:text-6xl text-lime-500 mb-4" />
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Reliable</h2>
                <p className="text-white">We are reliable and trustworthy.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 border-b-2 border-gray pb-6">
              <div className="w-full md:w-1/2 text-left">
                <FaUsers className="text-4xl md:text-6xl text-lime-500 mb-4" />
                <h2 className="text-xl md:text-2xl font-bold text-white">Capable</h2>
                <p className="text-white">We are capable of handling all your needs.</p>
              </div>
              <div className="w-full md:w-1/2 text-left">
                <FaUsers className="text-4xl md:text-6xl text-lime-500 mb-4" />
                <h2 className="text-xl md:text-2xl font-bold text-white">Flexible</h2>
                <p className="text-white">We are flexible and adaptable to your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why_us
