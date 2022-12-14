import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes
} from "react-router-dom";

import './App.css';

import CreatorInfoController from './CreatorInfo/CreatorInfoController';
import SearchPageController from './Search/SearchPage/SearchPageController';
import NavbarController from './Navbar/NavbarController';
import TrendingCitiesController from './TrendingCities/TrendingCitiesController';



const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavbarController />
        <Routes>
          <Route path="/trending" element={<TrendingCitiesController />} />
          <Route path="/search" element={<SearchPageController />} />
          <Route path="/info" element={<CreatorInfoController />} />
          <Route path="*" element={<Navigate to="/trending" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
