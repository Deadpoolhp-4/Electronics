import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-50 p-4`}>
      <button onClick={toggleSidebar} className="absolute top-4 right-4 text-black hover:bg-black hover:text-white bg-[#CAEE5A] px-4 py-2 font-semibold rounded-full text-black hover:bg-[#B8D54A]">Close</button>
      <div className="mt-16 flex flex-col space-y-4">
        <Link to="/" className="text-gray-800 hover:text-black px-4 py-2">Home</Link>
        <Link to="/" className="text-gray-800 hover:text-black px-4 py-2">About-Us</Link>
        <Link to="/services" className="text-gray-800 hover:text-black px-4 py-2">Services</Link>
        <Link to="/product" className="text-gray-800 hover:text-black px-4 py-2">Product</Link>
        <a href="#footer" className="bg-[#CAEE5A] px-4 py-2 font-semibold rounded-full text-black hover:bg-[#B8D54A]">
            Contact Us
          </a>
      </div>
    </div>
  );
};

export default Sidebar;