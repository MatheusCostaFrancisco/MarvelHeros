import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, Hero } from '../pages/index';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Hero" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
