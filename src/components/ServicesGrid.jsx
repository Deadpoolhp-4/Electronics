import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './css/animation.css';
const services = [
  { id: 1, name: 'Repairing', image: 'assets/images/service_1.svg', info: 'All types of industrial electronics like PLC, HMI, and VFD.' },
  { id: 2, name: 'Trading', image: 'assets/images/service_2.svg', info: 'Industrial automation products.' },
  { id: 3, name: 'Design & Development', image: 'assets/images/service_3.svg', info: 'Machine spares.' },
  { id: 4, name: 'Panels Manufacturing', image: 'assets/images/service_4.svg', info: 'Panels Manufacturing' },
  { id: 5, name: 'Maintenance & Servicing', image: 'assets/images/service_5.svg', info: 'All types of winders' },
];

const ServicesGrid = () => {
  const [flipped, setFlipped] = useState(Array(services.length).fill(false));
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
        {services.map((service, index) => (
          <div key={service.id} className="relative">
            <div className={`card ${flipped[index] ? 'flipped' : ''} w-64 h-80 p-4 transition-transform transform hover:scale-105 shadow-custom-light rounded-2xl`}>
              <div className="card-front flex flex-col items-center justify-center p-4 border rounded-2xl bg-white h-full transition-colors">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h2>
                <img src={service.image} alt={service.name} className="w-40 h-40 object-cover mb-4 p-2 " />
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
                <p className="text-gray-700 text-center font-medium">{service.info}</p>
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

export default ServicesGrid;