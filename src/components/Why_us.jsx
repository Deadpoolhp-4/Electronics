import React from 'react'
import CountUp from 'react-countup'

const Why_us = () => {
  return (
    <div className="container mx-auto p-40  bg-[#1053D4]">
      <div className="flex justify-between items-center">
        <div className="w-1/2 pr-6">
          <h1 className="text-l font-bold mb-4 text-[#A8C64B]">
            Why Choose Us
          </h1>
          <p className="text-white text-5xl mb-4">
            Trusted services with <br />    
            affordable prices.
          </p>
        </div>
        <div className=" h-full pl-6 w-1/4 flex-col ml-auto">
          <div className="flex items-right gap-4 ">
            <div className="text-center px-4 border-r-2 ">
              <p className="text-8xl font-semibold text-white">
                <CountUp end={15 } duration={2.5} /> +
              </p>
              <p className="text-white text-xl">
                Years of Experience
              </p>
            </div>
            <div className="text-left">
              <p className="text-8xl font-semibold text-white">
                <CountUp end={2649} duration={2.5} />+
              </p>
              <p className="text-white text-xl">
                Satisfied Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why_us
