import React from 'react';
import Slider from 'react-slick';
import logo from '../assets/logo.png'; // Ensure you have the correct path to the logo

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const settings = {
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='flex flex-col justify-center items-center overflow-hidden '>
      <div className='flex flex-col items-center mb-4'>
        <p className='text-2xl font-semi-bold'>
          Trusted by over <span className='text-[#1053D4]'>100+</span> companies worldwide
        </p>
      </div>
      <div className='w-full max-w-[1000px]'>
        <Slider {...settings}>
          <div className='flex justify-center items-center h-full'>
            <img src={logo} alt="logo" className='w-10 h-10' />
          </div>
          <div className='flex justify-center items-center h-full'>
            <img src={logo} alt="logo" className='w-10 h-10' />
          </div>
          <div className='flex justify-center items-center h-full'>
            <img src={logo} alt="logo" className='w-10 h-10' />
          </div>
          <div className='flex justify-center items-center h-full'>
            <img src={logo} alt="logo" className='w-10 h-10' />
          </div>
          <div className='flex justify-center items-center h-full'>
            <img src={logo} alt="logo" className='w-10 h-10' />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
