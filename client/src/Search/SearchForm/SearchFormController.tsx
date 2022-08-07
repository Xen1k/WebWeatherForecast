import React, { useState } from 'react';
import { getWeatherData, IWeatherData } from '../../weatherData';
import SearchFormView from './SearchFormView';

export interface ISearchFormControllerProps {
    setForecastData: (weatherData: IWeatherData | undefined) => void;
}

const SearchFormController: React.FC<ISearchFormControllerProps> = ({ setForecastData }): JSX.Element => {

    const [city, setCity] = useState<string>('')

    const onCityInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setCity(e.target.value);

    const getForecastData = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const resData: IWeatherData | undefined = await getWeatherData(city);
    }

    return (
        <SearchFormView
            onCityInput={onCityInput}
            getForecastData={getForecastData}
        />
    )
}



export default SearchFormController;


