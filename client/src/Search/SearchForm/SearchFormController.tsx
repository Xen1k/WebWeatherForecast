import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavigateFunction, useNavigate, useLocation, Location } from 'react-router-dom';
import { getWeatherData, IWeatherData } from '../../weatherData';
import SearchFormView from './SearchFormView';
import { setWeatherData, setLoading } from '../SearchPage/searchPageSlice';

interface ISearchFormControllerProps {
    style?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
}

const SearchFormController: React.FC<ISearchFormControllerProps> = ({ style, inputStyle }) => {


    const [city, setCity] = useState<string>('');

    const dispatch = useDispatch()

    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();

    // Change any
    const onCityInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setCity(e.target.value);

    const search = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (location.pathname !== '/search')
            navigate('search');
        dispatch(setLoading(true));
        if (city.length === 0)
            alert('Вы не ввели город')
        else {
            const resData: IWeatherData | undefined = await getWeatherData(city);
            resData ? dispatch(setWeatherData(resData)) : alert('Такого города нет');
        }
        dispatch(setLoading(false));
    }


    return (
        <SearchFormView
            onCityInput={onCityInput}
            search={search}
            style={style}
            inputStyle={inputStyle}
        />
    )
}



export default SearchFormController;


