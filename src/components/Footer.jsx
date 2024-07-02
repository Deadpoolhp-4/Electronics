import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#1053D4] text-white py-20 px-10 md:px-40'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex flex-col items-start mb-8 md:mb-0'>
          <div className='flex items-center gap-2 mb-4'>
            <img src={logo} alt="logo" className='w-10 h-10' />
            <span className='text-xl font-bold'>MyBrand</span>
          </div>
          <div className='w-full md:w-3/4 text-left mb-4'>
            <p className='text-gray-300'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec eros euismod, consectetur nunc ac, aliquam nunc.
            </p>
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
        <div className='flex flex-col items-start mb-8 md:mr-10 text-center w-full md:w-1/4 gap-4'>
          <h2 className='text-2xl font-bold mb-2'>Menu</h2>
          <ul className='text-left text-xl font-small'>
            <li className='text-gray-300 hover:text-white'>Home</li>
            <li className='text-gray-300 hover:text-white'>About Us</li>
            <li className='text-gray-300 hover:text-white'>Services</li>
            <li className='text-gray-300 hover:text-white'>Contact</li>
            <li className='text-gray-300 hover:text-white'>Page</li>
          </ul>
        </div>
        <div className='flex flex-col items-start mb-8 md:mr-10 text-center w-full md:w-1/4 gap-4'>
          <h2 className='text-2xl font-bold mb-2'>Resources</h2>
          <ul className='text-left text-xl font-small'>
            <li className='text-gray-300 hover:text-white'>Blog</li>
            <li className='text-gray-300 hover:text-white'>FAQs</li>
            <li className='text-gray-300 hover:text-white'>Support</li>
            <li className='text-gray-300 hover:text-white'>Privacy Policy</li>
            <li className='text-gray-300 hover:text-white'>Terms of Service</li>
          </ul>
        </div>
        <div className='flex flex-col items-start'>
          <h2 className='text-2xl font-bold mb-4'>Subscribe</h2>
          <form className='flex flex-col'>
            <input
              type='email'
              placeholder='Enter your email'
              className='p-4 mb-4 rounded-full text-black w-[300px] h-[50px]'
            />
            <button
              type='submit'
              className='bg-[#CAEE5A] text-black text-xl font-semibold rounded-full p-2 hover:bg-[#B8E34A] transition-colors duration-300 w-[200px]'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='border-t border-gray-300 mt-8 pt-4 text-center'>
        <p className='text-gray-300'>&copy; 2023 MyBrand. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
