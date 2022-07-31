import React, { useState } from 'react';
import ForecastView from './ForecastView'
import axios from 'axios';

const ForecastController = () => {

    const [city, setCity] = useState('')
    const [weatherData, setWatherData] = useState()

    const onCityInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setCity(e.target.value);

    const getForecastData = async () => {
        if (city.length === 0)
            alert('Input city first')
        const resData = await axios.post("https://weather-forecast-xenik-server.herokuapp.com/forecast", { city: city });
        if (!resData.data.name)
            alert('Invalid city')
        else
            setWatherData(resData.data);
        console.log(resData.data);
    }

    return (
        <ForecastView
            onCityInput={onCityInput}
            getForecastData={getForecastData}
            city={city}
            weatherData={weatherData}
        />
    )
}

export default ForecastController;


