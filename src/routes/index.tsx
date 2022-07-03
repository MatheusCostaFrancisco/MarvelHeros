import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, Hero } from '../pages/index';
import NotFound from '../pages/NotFound/NotFound';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Hero/:id" element={<Hero />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
