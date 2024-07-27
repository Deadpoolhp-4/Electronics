import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#1053D4] text-white py-10 px-5 md:px-10 lg:px-40'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex flex-col items-center mb-8 md:mb-0'>
          <div className='flex items-center gap-2 mb-4'>
            <img src={logo} alt="logo" className='w-10 h-10' />
            <span className='text-xl font-bold'>MES Services</span>
          </div>
          
          <div className='flex gap-4'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className='w-6 h-6 hover:text-gray-300' />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='w-6 h-6 hover:text-gray-300' />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='w-6 h-6 hover:text-gray-300' />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='w-6 h-6 hover:text-gray-300' />
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center mb-8 md:mr-10 text-center w-full md:w-1/4 gap-4'>
          <h2 className='text-2xl font-bold mb-2'>Menu</h2>
          <ul className='text-left text-xl font-small'>
            <li className='text-gray-300 hover:text-white'>Home</li>
            <li className='text-gray-300 hover:text-white'>About Us</li>
            <li className='text-gray-300 hover:text-white'>Services</li>
            <li className='text-gray-300 hover:text-white'>Contact</li>
            <li className='text-gray-300 hover:text-white'>Page</li>
          </ul>
        </div>
        <div className='flex flex-col items-center mb-8 md:mr-10 text-center w-full md:w-1/4 gap-4'>
          <h2 className='text-2xl font-bold mb-2'>Contact Us</h2>
          <div className='flex flex-col mt-4 gap-2'>
            <div className='flex justify-start items-center text-gray-300'>
              <FaPhone className='mr-2' />
              <span>+91 9876543210</span>
            </div>
            <div className='flex justify-start items-center text-gray-300'>
              <FaEnvelope className='mr-2' />
              <span>mes@gmail.com</span>
            </div>
            <div className='flex justify-start items-center text-gray-300'>
              <FaMapMarkerAlt className='mr-2' />
              <span>MES Services, India</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-2xl font-bold mb-4'>Subscribe</h2>
          <form className='flex flex-col'>
            <input
              type='email'
              placeholder='Enter your email'
              className='p-4 mb-4 rounded-full text-black w-full md:w-[300px] h-[50px]'
            />
            <button
              type='submit'
              className='bg-[#CAEE5A] text-black text-xl font-semibold rounded-full p-2 hover:bg-[#B8E34A] transition-colors duration-300 w-full md:w-[200px]'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='border-t border-gray-300 mt-8 pt-4 text-center'>
        <p className='text-gray-300'>&copy; 2024 MES Services. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;