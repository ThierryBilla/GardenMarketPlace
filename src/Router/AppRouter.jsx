//AppRouter.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Mailbox from '../pages/Mailbox';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mailbox" element={<Mailbox />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
