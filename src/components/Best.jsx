import React from 'react'
import best from '../assets/Image Box (1).png'

const Best = () => {
  return (
    <div className='h-full p-6 md:p-20 md:px-40 '>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-64'>
        <div className='flex flex-col gap-6'>
          <div className='text-left'>
            <h1 className='text-xl md:text-2xl text-[#1053D4] font-semibold'>Hire Best Technician</h1>
          </div>
          <div className='text-left'>
            <p className='text-3xl md:text-5xl font-semibold'>Hire The Best Electrician <br />
              Services In Town</p>
          </div>
          <div className='text-left'>
            <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
        </div>
        <div className='flex justify-center items-center w-full md:w-1/3'>
          <img src={best} alt="" />
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-6 pt-12'>
        <div className='card border-2 rounded-lg border-gray-300 bg-gray-100 p-6'>
          <h2 className='text-lg md:text-xl font-semibold mb-3'>High Professionalism and <br />Expertise</h2>
          <p className='text-base md:text-lg'>Pretium phasellus erat condimentum arcu suspendisse nulla lorem. Velit id lobortis non faucibus neque.</p>
          <a href="#" className='text-blue-500'>Learn More</a>
        </div>
        <div className='card border-2 rounded-lg border-gray-300 bg-gray-100 p-6'>
          <h2 className='text-lg md:text-xl font-semibold mb-3'>Quick and Efficient <br />Problem Solving</h2>
          <p className='text-base md:text-lg'>Pretium phasellus erat condimentum arcu suspendisse nulla lorem. Velit id lobortis non faucibus neque.</p>
          <a href="#" className='text-blue-500'>Learn More</a>
        </div>
        <div className='card border-2 rounded-lg border-gray-300 bg-gray-100 p-6'>
          <h2 className='text-lg md:text-xl font-semibold mb-3'>Innovation and Up-to-Date <br />Technology</h2>
          <p className='text-base md:text-lg'>Pretium phasellus erat condimentum arcu suspendisse nulla lorem. Velit id lobortis non faucibus neque.</p>
          <a href="#" className='text-blue-500'>Learn More</a>
        </div>
      </div>
    </div>
  )
}

export default Best
