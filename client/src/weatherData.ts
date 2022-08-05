import axios from "axios";
import { forecastFinderUrl } from "./settings";

export interface IWeatherData {
    temp_min: number;
    temp_max: number;
    temp: number;
    feelsLike: number;
    city: string;
    clouds: number;
    cloudsDescrition: string;
    rainDescription: string;
    rain: boolean;
    pressure: number;
    humidity: number;
    windSpeed: number;
}

export const getWeatherData = async (city: string): Promise<IWeatherData | undefined> => {
    const resData = (await axios.post(forecastFinderUrl, { city: city })).data;
    if (resData.name)
        return {
            temp_min: parseInt(resData.main.temp_min),
            temp_max: parseInt(resData.main.temp_max),
            temp: parseInt(resData.main.temp),
            city: city,
            clouds: resData.clouds.all,
            rain: resData.rain,
            pressure: resData.main.pressure,
            humidity: resData.main.humidity,
            windSpeed: resData.wind.speed,
            feelsLike: parseInt(resData.main.feels_like),
            rainDescription: resData.rain ? "Дождь" : "Дождь не ожидается",
            cloudsDescrition: resData.clouds.all > 60 ? "Переменная облачность" : "Малая облачность",
        }
    else return undefined;
}