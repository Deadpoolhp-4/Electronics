import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage'; 
import Product from '../Product';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default App;