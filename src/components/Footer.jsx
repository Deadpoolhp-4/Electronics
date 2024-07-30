import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#1053D4] text-white py-10 px-5 md:px-10 lg:px-40' id="footer">
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
            <li className='text-gray-300 hover:text-white'>
              <Link to="/">Home</Link>
            </li>
            <li className='text-gray-300 hover:text-white'>
              <Link to="/about">About Us</Link>
            </li>
            <li className='text-gray-300 hover:text-white'>
              <Link to="/services">Services</Link>
            </li>
            <li className='text-gray-300 hover:text-white'>
              <Link to="/contact">Contact</Link>
            </li>
            <li className='text-gray-300 hover:text-white'>
              <Link to="/product">Products</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center mb-8 md:mr-10 text-center w-full md:w-1/4 gap-4'>
          <h2 className='text-2xl font-bold mb-2'>Contact Us</h2>
          <div className='flex flex-col mt-4 gap-2'>
            <div className='flex justify-center items-center text-gray-300'>
              <FaPhone className='mr-2' />
              <span>+91 9974122681</span>
            </div>
            <div className='flex justify-center items-center text-gray-300'>
              <FaEnvelope className='mr-2' />
              <span>Satish_kashyap1974@Rediffmail.com</span>
            </div>
            <div className='flex flex-col justify-center items-center text-gray-300'>
              <div className='flex justify-center items-center'>
                <FaMapMarkerAlt className='mr-2 ' />
               
              <div className='flex flex-col'>
              <span className='text-center'>
                  601, Alpine, Garden City, Samarvarni</span>
                  </div>
                  
              </div>
              <span>Silvassa-396230 </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center mb-8 md:mr-10 text-center w-full md:w-1/4 gap-4'>
          <h2 className='text-2xl font-bold mb-4'>Get in Touch</h2>
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSdQareGt5xx1ZMP2TSHkB--qpku5qL34V_g2j2HrBtdVr57IA/formResponse"
            method="POST"
            target="_blank"
            className='flex flex-col'
          >
            <input
              type='text'
              name="entry.415067251"
              placeholder='Your Name'
              className='p-4 mb-2 rounded-full text-black w-full md:w-[300px] h-[50px]'
            />
            <input
              type='email'
              name="entry.343892843"
              placeholder='Your Email'
              className='p-4 mb-2 rounded-full text-black w-full md:w-[300px] h-[50px]'
            />
            <textarea
              name="entry.815593122"
              placeholder='Your Message'
              className='p-4 mb-4 rounded-lg text-black w-full md:w-[300px] h-[100px]'
            />
            <button
              type='submit'
              className='bg-[#CAEE5A] text-black text-xl font-semibold rounded-full p-2 hover:bg-[#B8E34A] transition-colors duration-300 w-full md:w-[200px]'
            >
              Send Message
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