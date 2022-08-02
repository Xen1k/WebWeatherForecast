import React, { useState } from 'react';
import ForecastSearchView from './ForecastSearchView'
import axios from 'axios';
import { forecastFinderUrl } from '../settings';

const ForecastSearchController = (): JSX.Element => {

    const [city, setCity] = useState<string>('')
    const [weatherData, setWatherData] = useState<object>()
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const onCityInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setCity(e.target.value);

    const getForecastData = async () => {
        setIsLoading(true);
        if (city.length === 0)
            alert('Вы не ввели город')
        const resData = await axios.post(forecastFinderUrl, { city: city });
        if (!resData.data.name)
            alert('Такого города нет')
        else
            setWatherData({ ...resData.data, city: city });
        setIsLoading(false);
    }

    return (
        <ForecastSearchView
            onCityInput={onCityInput}
            getForecastData={getForecastData}
            city={city}
            weatherData={weatherData}
            isLoading={isLoading}
        />
    )
}

export default ForecastSearchController;


