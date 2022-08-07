import { useEffect, useState } from "react";
import { getWeatherData, IWeatherData } from "../weatherData";
import TrendingCitiesView from "./TrendingCitiesView";

const TrendingCitiesController = (): JSX.Element => {
    const trendingCities: string[] = ['Лондон', 'Нью-Йорк', 'Москва', 'Санкт-Петербург', 'Париж', 'Берлин', 'Токио', 'Чикаго', 'Рим', 'Хельсинки', 'Мадрид']

    const [citiesWeather, setCitiesWeather] = useState<IWeatherData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        getWeather();
    }, [])

    const getWeather = async () => {
        setIsLoading(true);
        let citiesWeather: IWeatherData[] = [];

        for (const city of trendingCities) {
            const weatherData = await getWeatherData(city);
            if (weatherData)
                citiesWeather.push(weatherData);
        }

        setCitiesWeather([...citiesWeather]);
        setIsLoading(false);
    }

    return (
        <TrendingCitiesView citiesWeather={citiesWeather} isLoading={isLoading} />
    )
}

export default TrendingCitiesController;
