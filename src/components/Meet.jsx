import React from 'react'
import meet from '../assets/Image.png'

const Meet = () => {
  return (
    <div className='h-full md:h-screen px-10 md:px-40 py-20'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col md:flex-row gap-10 md:gap-20'>
          <div>
            <h1 className='text-xl text-[#0B378D]'>Electricians Experts</h1>
            <p className='text-2xl md:text-4xl mt-3 font-semibold'>Meet Some Of Our <br />Electricians Experts</p>
          </div>
          <div className='pl-4 mt-8'>
            <p className='border-l-4 border-[#0B378D] text-lg text-[#0B378D] pl-4 -ml-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Porro qui, vero molestiae cumque a totam ipsa. Dolor, ex temporibus. <br />Consequatur neque nesciunt nobis adipisci provident eum molestiae odio voluptates alias.
            </p>
          </div>
        </div>  
        <div className='flex flex-col md:flex-row gap-8 mt-10'>
          <div className='border p-4'>
            <img src={meet} alt="" className='h-80 w-full md:w-80 rounded-md' />
            <div className='mt-4'>      
              <h2 className='text-xl font-semibold'>John Doe</h2>
              <p>Senior Electrician with 10 years of experience.</p>
            </div>
          </div>
          <div className='border p-4'>
            <img src={meet} alt="" className='h-80 w-full md:w-80 rounded-md' />
            <div className='mt-4'>
              <h2 className='text-xl font-semibold'>Jane Smith</h2>
              <p>Expert in residential electrical systems.</p>
            </div>
          </div>
          <div className='border p-4'>
            <img src={meet} alt="" className='h-80 w-full md:w-80 rounded-md' />
            <div className='mt-4'>
              <h2 className='text-xl font-semibold'>Mike Johnson</h2>
              <p>Specialist in commercial electrical projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meet
