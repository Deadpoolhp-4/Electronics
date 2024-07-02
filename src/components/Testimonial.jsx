import React from 'react';

const Testimonial = () => {
  return (
    <div className='bg-[#F2F4F8] px-40 py-20 flex flex-col'>
      <div className='flex flex-col gap-4'>
        <p className='text-[#0B378D] text-xl font-semibold'>Testimonial</p>
        <p className='text-black text-5xl font-semibold'>What They Say About <br />Our Service</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-8'>
        <div className='bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105'>
          <div className='flex items-center mb-4'>
            <img src='https://via.placeholder.com/50' alt='User' className='w-12 h-12 rounded-full mr-4' />
            <div>
              <h2 className='text-xl font-semibold text-[#0B378D]'>John Doe</h2>
              <p className='text-gray-500'>CEO, Company</p>
            </div>
          </div>
          <p className='text-gray-600 mt-2'>Great service and very professional.</p>
          <p className='text-gray-600 mt-2'>Nunc enim tincidunt nec arcu et risus suspendisse eget id. Quis pellentesque sem proin sed sagittis orci nullam in.</p>
          <p className='text-gray-600 mt-2'>2024-01-01</p>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105'>
          <div className='flex items-center mb-4'>
            <img src='https://via.placeholder.com/50' alt='User' className='w-12 h-12 rounded-full mr-4' />
            <div>
              <h2 className='text-xl font-semibold text-[#0B378D]'>Jane Smith</h2>
              <p className='text-gray-500'>Manager, Company</p>
            </div>
          </div>
          <p className='text-gray-600 mt-2'>Highly recommend their services.</p>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105'>
          <div className='flex items-center mb-4'>
            <img src='https://via.placeholder.com/50' alt='User' className='w-12 h-12 rounded-full mr-4' />
            <div>
              <h2 className='text-xl font-semibold text-[#0B378D]'>Mike Johnson</h2>
              <p className='text-gray-500'>Developer, Company</p>
            </div>
          </div>
          <p className='text-gray-600 mt-2'>Quick and efficient work.</p>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105'>
          <div className='flex items-center mb-4'>
            <img src='https://via.placeholder.com/50' alt='User' className='w-12 h-12 rounded-full mr-4' />
            <div>
              <h2 className='text-xl font-semibold text-[#0B378D]'>Emily Davis</h2>
              <p className='text-gray-500'>Designer, Company</p>
            </div>
          </div>
          <p className='text-gray-600 mt-2'>Very satisfied with the results.</p>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105'>
          <div className='flex items-center mb-4'>
            <img src='https://via.placeholder.com/50' alt='User' className='w-12 h-12 rounded-full mr-4' />
            <div>
              <h2 className='text-xl font-semibold text-[#0B378D]'>Sarah Lee</h2>
              <p className='text-gray-500'>Marketing Manager, Company</p>
            </div>
          </div>
          <p className='text-gray-600 mt-2'>Professional and courteous staff.</p>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105'>
          <div className='flex items-center mb-4'>
            <img src='https://via.placeholder.com/50' alt='User' className='w-12 h-12 rounded-full mr-4' />
            <div>
              <h2 className='text-xl font-semibold text-[#0B378D]'>David Kim</h2>
              <p className='text-gray-500'>Customer, Company</p>
            </div>
          </div>
          <p className='text-gray-600 mt-2'>Excellent customer service.</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
