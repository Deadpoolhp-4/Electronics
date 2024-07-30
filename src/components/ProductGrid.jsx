import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './css/animation.css';

// Import images
import image1 from '../assets/Image  (1).png';
import image2 from '../assets/Image  (2).png';
import image3 from '../assets/Image  (3).png';
import image4 from '../assets/Image  (4).png';
import image5 from '../assets/Image  (5).png';
import image6 from '../assets/Image  (6).png';
import image7 from '../assets/Image  (7).png';
import image8 from '../assets/Image  (8).png';
import image9 from '../assets/Image  (9).png';
import image10 from '../assets/Image  (10).png';
import image11 from '../assets/Image  (11).png';
import image12 from '../assets/Image  (12).png';
import image13 from '../assets/Image  (13).png';
import image14 from '../assets/Image  (14).png';
import image15 from '../assets/Image  (15).png';

const products = [
  { id: 1, name: 'SSR', image: image1, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, name: 'Automation Products', image: image2, info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 3, name: 'Relay Cards', image: image3, info: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  { id: 4, name: 'Limit Switches', image: image4, info: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.' },
  { id: 5, name: 'Process Controllers', image: image5, info: 'In voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { id: 6, name: 'Process Controllers', image: image6, info: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
  { id: 7, name: 'AC Drive', image: image7, info: 'Deserunt mollit anim id est laborum.' },
  { id: 8, name: 'PLC Controllers', image: image8, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 9, name: 'Servo Motors', image: image9, info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 10, name: 'Photoelectric Sensors', image: image10, info: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  { id: 11, name: 'Encoders', image: image11, info: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.' },
  { id: 12, name: 'S.M.P.S', image: image12, info: 'Information about Product 12' },
  { id: 13, name: 'PID Temperature Controllers', image: image13, info: 'Information about Product 13' },
  { id: 14, name: 'Inductive & Capacitive Switch', image: image14, info: 'Information about Product 14' },
  { id: 15, name: 'Speed Sensor', image: image15, info: 'Information about Product 15' }
];

const ProductGrid = () => {
  const [flipped, setFlipped] = useState(Array(products.length).fill(false));
  const navigate = useNavigate();
  const location = useLocation();

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div>
      <div className="flex justify-center mb-6 mt-10 px-32 p-6">
        <div className="flex bg-gray-200 rounded-full p-1">
          <button
            onClick={() => navigate('/services')}
            className={`px-4 py-2 rounded-full ${location.pathname === '/services' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Services
          </button>
          <button
            onClick={() => navigate('/product')}
            className={`px-4 py-2 rounded-full ${location.pathname === '/product' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Products
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 p-6 px-32 justify-items-center">
        {products.map((product, index) => (
          <div key={product.id} className="relative">
            <div className={`card ${flipped[index] ? 'flipped' : ''} w-72 h-80 p-4 transition-transform transform hover:scale-105 shadow-custom-light rounded-2xl`}>
              <div className="card-front flex flex-col items-center justify-center p-4 border rounded-2xl bg-white h-full transition-colors">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
                <img src={product.image} alt={product.name} className="w-40 h-40 object-cover mb-4 p-2 " />
                <div className="flex items-left justify-start w-full">
                  <button
                    onClick={() => handleFlip(index)}
                    className="bg-custom-bg text-black rounded-full ml-2 px-8 py-2 text-custom font-semibold shadow-custom-light hover:shadow-custom-hover transition-shadow flex items-center space-x-2"
                  >
                    <span>Read More</span>
                    <span className="arrow-icon bg-custom-arrow-bg text-white rounded-full w-8 h-8 flex items-center justify-center text-arrow" >
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>
              <div className="card-back flex flex-col items-center justify-center p-4 border rounded-2xl bg-white h-full">
                <p className="text-gray-700">{product.info}</p>
                <button
                  onClick={() => handleFlip(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600 transition-colors"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;