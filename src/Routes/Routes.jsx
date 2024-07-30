import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage'; 
import Product from '../Product';
import Services from '../components/Services';
import Footer from '../components/Footer';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Footer />} />
    </Routes>
  );
};

export default App;