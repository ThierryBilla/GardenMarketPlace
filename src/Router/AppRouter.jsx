//AppRouter.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductCategory from '../pages/ProductCategory';
import ProductDetail from '../pages/ProductDetail';
import Mailbox from '../pages/Mailbox';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<ProductCategory />} /> 
            <Route path="/product/:productId" element={<ProductDetail />} />
          
            <Route path="/mailbox" element={<Mailbox />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
