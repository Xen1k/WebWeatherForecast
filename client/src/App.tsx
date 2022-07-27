import React, { useEffect } from 'react';
import './App.css';
import ForecastController from './Forecast/ForecastController';



const App = () => {
  return (
    <div className='app'>
      <ForecastController />
    </div>
  );
};

export default App;
