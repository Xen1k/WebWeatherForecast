import axios from "axios";
import { useEffect, useState } from "react";
import { forecastFinderUrl } from "../settings";
import TrendingCitiesView from "./TrendingCitiesView";

const TrendingCitiesController = (): JSX.Element => {
    const trendingCities: string[] = ['Лондон', 'Нью-Йорк', 'Москва', 'Санкт Петербург', 'Париж', 'Берлин']

    const [citiesWeather, setCitiesWeather] = useState<object[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        getWeather();
    }, [])

    const getWeather = async () => {
        setIsLoading(true);
        let citiesWeather: object[] = [];

        for (const city of trendingCities) {
            const res = await axios.post(forecastFinderUrl, { city: city });
            if (res.data.name)
                citiesWeather.push({ ...res.data, city: city });
        }

        setCitiesWeather([...citiesWeather]);
        setIsLoading(false);
    }

    return (
        <TrendingCitiesView citiesWeather={citiesWeather} isLoading={isLoading} />
    )
}

export default TrendingCitiesController;
