import React, { useState } from 'react';
import WeatherBoxView from './WeatherBoxView';

const WeatherBoxController = ({ weatherData }: any) => {

    const GetTimeString = (): string => {
        let timeString: string = "";
        if ((new Date()).getHours() < 10) timeString += '0';
        timeString += (new Date()).getHours() + ":";
        if ((new Date()).getMinutes() < 10) timeString += '0';
        timeString += (new Date()).getMinutes();
        return timeString;
    }

    const GetWeatherImage = (): string => {
        if (weatherData.rain)
            return require('./images/rain.png');
        else if (weatherData.clouds.all > 70)
            return require('./images/clouds.png');
        return require('./images/sunny.png');
    }

    const GetThemeColor = (): string => {
        if (weatherData.rain)
            return '#7d02f0';
        else if (weatherData.clouds.all > 70)
            return '#02b0f0';
        return "#ddab05";
    }

    return (
        <WeatherBoxView
            weatherData={weatherData}
            GetWeatherImage={GetWeatherImage}
            GetTimeString={GetTimeString}
            GetThemeColor={GetThemeColor}
        />
    )
}

export default WeatherBoxController;


