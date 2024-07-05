import React from 'react';
import Slider from 'react-slick';
import logo from '../assets/logo.png'; // Ensure you have the correct path to the logo

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const settings = {
    centerMode: true, // Center the slides
    centerPadding: '40px', // Add horizontal padding
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Hide navigation arrows
    dots: false, // Hide dots
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true, // Ensure center mode is enabled for responsive
          centerPadding: '40px', // Ensure padding is applied for responsive
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Ensure center mode is enabled for responsive
          centerPadding: '40px', // Ensure padding is applied for responsive
        },
      },
    ],
  };

  return (
    <div className='flex flex-col justify-center items-center md:overflow-x-hidden'>
      <div className='flex flex-col items-center mb-4'>
        <p className='text-2xl font-semi-bold'>
          Trusted by over <span className='text-[#1053D4]'>100+</span> companies worldwide
        </p>
      </div>
      <div className='w-screen px-10 mt-10 md:px-40'>
        <Slider {...settings}>
          <div className='flex justify-center items-center'>
            <img src={logo} alt="logo" className='w-20 h-20' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={logo} alt="logo" className='w-20 h-20' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={logo} alt="logo" className='w-20 h-20' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={logo} alt="logo" className='w-20 h-20' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={logo} alt="logo" className='w-20 h-20' />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
