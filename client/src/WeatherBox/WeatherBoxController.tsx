import React, { useState } from 'react';
import { IWeatherData } from '../weatherData';
import WeatherBoxView from './WeatherBoxView';

interface IWeatherBoxControllerProps {
    weatherData: IWeatherData;
    height?: number;
}

const WeatherBoxController: React.FC<IWeatherBoxControllerProps> = ({ weatherData, height }) => {

    const getWeatherImage = (): string => {
        if (weatherData.rain)
            return require('./images/rain.png');
        else if (weatherData.clouds > 50)
            return require('./images/clouds.png');
        return require('./images/sunny.png');
    }

    return (
        <WeatherBoxView
            weatherData={weatherData}
            height={height || 300}
            getWeatherImage={getWeatherImage}
        />
    )
}

export default WeatherBoxController;


