import React from 'react'
import best from '../assets/Image Box (1).png'

const Best = () => {
  return (
    <div className=' h-screen p-20 px-40' >
      <div className='flex justify-center items-center gap-64'>
        <div className='flex flex-col gap-6 '>
          <div className='text-left'>
            <h1 className='text-2xl text-[#1053D4] font-semibold'>Hire Best Technician</h1>
          </div>
          <div className='text-left'>
            <p className='text-5xl font-semibold'>Hire The Best Electrician <br />
              Services In Town</p>
          </div>
          <div className='text-left'>
            <p className='text-s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
        </div>
        <div className='flex justify-center items-center w-1/3'>
          <img src={best} alt="" />
        </div>
      </div>
      <div className='flex justify-center gap-6 pt-12'>
        <div className='card border-2 rounded-lg border-gray-300  bg-gray-100 p-6'>
          <h2 className='text-xl font-semibold mb-3'>High Professionalism and <br />Expertise</h2>
          <p className='text-lg'>Pretium phasellus erat condimentum arcu suspendisse nulla lorem. Velit id lobortis non faucibus neque.</p>
          <a href="#" className='text-blue-500'>Learn More</a>
        </div>
        <div className='card border-2 rounded-lg border-gray-300 bg-gray-100 p-6'>
          <h2 className='text-xl font-semibold mb-3'>Quick and Efficient <br />Problem Solving</h2>
          <p className='text-lg'>Pretium phasellus erat condimentum arcu suspendisse nulla lorem. Velit id lobortis non faucibus neque.</p>
          <a href="#" className='text-blue-500'>Learn More</a>
        </div>
        <div className='card border-2 rounded-lg border-gray-300 bg-gray-100 p-6'>
          <h2 className='text-xl font-semibold mb-3'>Innovation and Up-to-Date <br />Technology</h2>
          <p className='text-lg'>Pretium phasellus erat condimentum arcu suspendisse nulla lorem. Velit id lobortis non faucibus neque.</p>
          <a href="#" className='text-blue-500'>Learn More</a>
        </div>
      </div>
    </div>
  )
}

export default Best
