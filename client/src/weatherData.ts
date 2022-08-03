import axios from "axios";
import { forecastFinderUrl } from "./settings";

export interface IWeatherData {
    temp_min: string;
    temp_max: string;
    temp: string;
    city: string;
    clouds: number;
    rain: boolean;
}

export const getWeatherData = async (city: string): Promise<IWeatherData | undefined> => {
    const resData = (await axios.post(forecastFinderUrl, { city: city })).data;
    if (resData.name)
        return {
            temp_min: resData.main.temp_min,
            temp_max: resData.main.temp_max,
            temp: resData.main.temp,
            city: city,
            clouds: resData.clouds.all,
            rain: resData.rain
        }
    else return undefined;
}