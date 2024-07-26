import React, { useState } from 'react';
import './css/animation.css';

const products = [
  { id: 1, name: 'Product 1', image: 'assets/images/Image_1.svg', info: 'Information about Product 1' },
  { id: 2, name: 'Product 2', image: 'assets/images/image_2.svg', info: 'Information about Product 2' },
  { id: 3, name: 'Product 3', image: 'assets/images/image_3.svg', info: 'Information about Product 3' },
  { id: 4, name: 'Product 4', image: 'path/to/image4.jpg', info: 'Information about Product 4' },
  { id: 5, name: 'Product 5', image: 'path/to/image5.jpg', info: 'Information about Product 5' },
  { id: 6, name: 'Product 6', image: 'path/to/image6.jpg', info: 'Information about Product 6' },
  { id: 7, name: 'Product 7', image: 'path/to/image7.jpg', info: 'Information about Product 7' },
  { id: 8, name: 'Product 8', image: 'path/to/image8.jpg', info: 'Information about Product 8' },
  { id: 9, name: 'Product 9', image: 'path/to/image9.jpg', info: 'Information about Product 9' },
  { id: 10, name: 'Product 10', image: 'path/to/image10.jpg', info: 'Information about Product 10' },
  { id: 11, name: 'Product 11', image: 'path/to/image11.jpg', info: 'Information about Product 11' },
  { id: 12, name: 'Product 12', image: 'path/to/image12.jpg', info: 'Information about Product 12' },
  { id: 13, name: 'Product 13', image: 'path/to/image13.jpg', info: 'Information about Product 13' },
  { id: 14, name: 'Product 14', image: 'path/to/image14.jpg', info: 'Information about Product 14' },
  { id: 15, name: 'Product 15', image: 'path/to/image15.jpg', info: 'Information about Product 15' }
];

const services = [
  { id: 1, name: 'Service 1', image: 'assets/images/service_1.svg', info: 'Information about Service 1' },
  { id: 2, name: 'Service 2', image: 'assets/images/service_2.svg', info: 'Information about Service 2' },
  // ... more services ...
];

const ProductGrid = () => {
  const [flipped, setFlipped] = useState(Array(products.length).fill(false));
  const [view, setView] = useState('products');

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const items = view === 'products' ? products : services;

  return (
    <div>
      <div className="flex justify-center mb-6 mt-10 px-32 p-6">
        <div className="flex bg-gray-200 rounded-full p-1">
          <button
            onClick={() => setView('products')}
            className={`px-4 py-2 rounded-full ${view === 'products' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Products
          </button>
          <button
            onClick={() => setView('services')}
            className={`px-4 py-2 rounded-full ${view === 'services' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Services
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 px-32">
        {items.map((item, index) => (
          <div key={item.id} className="relative">
            <div className={`card ${flipped[index] ? 'flipped' : ''} w-full h-64 p-4 transition-transform transform hover:scale-105 shadow-lg`}>
              <div className="card-front flex flex-col items-center justify-center p-4 border rounded-lg bg-white shadow-lg h-full">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h2>
                <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mb-4 rounded-full p-2" />
                <button
                  onClick={() => handleFlip(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  Additional Information
                </button>
              </div>
              <div className="card-back flex flex-col items-center justify-center p-4 border rounded-lg bg-white shadow-lg h-full">
                <p className="text-gray-700">{item.info}</p>
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