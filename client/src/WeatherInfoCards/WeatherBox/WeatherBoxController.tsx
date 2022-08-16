import React from 'react';
import { IWeatherData } from '../../weatherData';
import WeatherBoxView from './WeatherBoxView';

interface IWeatherBoxControllerProps {
    weatherData: IWeatherData;
    style?: React.CSSProperties;
}

const WeatherBoxController: React.FC<IWeatherBoxControllerProps> = ({ weatherData, style }) => {

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
            getWeatherImage={getWeatherImage}
            style={style}
        />
    )
}

export default WeatherBoxController;


