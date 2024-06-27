import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav className="bg-[#1053D4] pb-6 px-10 pt-10 overflow-x-hidden " >
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-white text-xl font-bold flex items-center gap-2" >
            <img src={logo} alt="logo" className='w-10 h-10' />
            MyBrand
        </div>
        <div className="space-x-4">
          <a href="#" className="text-gray-300  hover:text-white">Home</a>
          <a href="#" className="text-gray-300  hover:text-white">About-Us</a>
          <a href="#" className="text-gray-300  hover:text-white">Services</a>
          <a href="#" className="text-gray-300  hover:text-white">Contact</a>
          <a href="#" className="text-gray-300  hover:text-white">Page</a>
          <button className="bg-[#CAEE5A] px-4 py-2 font-semibold rounded-full text-black hover:bg-[#B8D54A]">Get Started</button>
        
        </div>
      </div>
    </nav>
  )
}

export default Navbar
