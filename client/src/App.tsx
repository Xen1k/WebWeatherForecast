import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes
} from "react-router-dom";

import './App.css';

import CreatorInfoController from './CreatorInfo/CreatorInfoController';
import ForecastSearchController from './ForecastSearch/ForecastSearchController';
import NavbarController from './Navbar/NavbarController';
import TrendingCitiesController from './TrendingCities/TrendingCitiesController';



const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavbarController />
        <Routes>
          <Route path="/search" element={<ForecastSearchController />} />
          <Route path="/trending" element={<TrendingCitiesController />} />
          <Route path="/info" element={<CreatorInfoController />} />
          <Route path="*" element={<Navigate to="/search" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
