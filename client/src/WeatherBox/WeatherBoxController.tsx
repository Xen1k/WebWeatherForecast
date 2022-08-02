import React, { useState } from 'react';
import WeatherBoxView from './WeatherBoxView';

const WeatherBoxController = ({ weatherData }: any): JSX.Element => {

    const toTwoDigit = (num: number): string => num < 10 ? '0' + num : num.toString(); 

    const getTimeString = (): string => {
        let curDate = new Date();
        let timeString: string = "";
        timeString += toTwoDigit(curDate.getHours()) + ":";
        timeString += toTwoDigit(curDate.getMinutes());
        return timeString;
    }

    const getDateString = (): string => {
        let curDate = new Date();
        return toTwoDigit(curDate.getDate()) + '.' + toTwoDigit(curDate.getMonth()) + '.' + curDate.getFullYear();
    }

    const getWeatherImage = (): string => {
        if (weatherData.rain)
            return require('./images/rain.png');
        else if (weatherData.clouds.all > 60)
            return require('./images/clouds.png');
        return require('./images/sunny.png');
    }

    const getThemeColor = (): string => {
        if (weatherData.rain)
            return '#7d02f0';
        else if (weatherData.clouds.all > 60)
            return '#02b0f0';
        return "#bc9c84";
    }

    return (
        <WeatherBoxView
            weatherData={weatherData}
            getWeatherImage={getWeatherImage}
            getTimeString={getTimeString}
            getDateString={getDateString}
            getThemeColor={getThemeColor}
        />
    )
}

export default WeatherBoxController;


