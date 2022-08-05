import React, { useState } from 'react';
import ForecastSearchView from './ForecastSearchView'
import { getWeatherData, IWeatherData } from '../weatherData';

const ForecastSearchController = (): JSX.Element => {

    const [city, setCity] = useState<string>('')
    const [weatherData, setWatherData] = useState<IWeatherData | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const onCityInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setCity(e.target.value);

    const getForecastData = async () => {
        setIsLoading(true);
        if (city.length === 0)
            alert('Вы не ввели город')
        else {
            const resData: IWeatherData | undefined = await getWeatherData(city);
            resData ? setWatherData(resData) : alert('Такого города нет');
        }
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


