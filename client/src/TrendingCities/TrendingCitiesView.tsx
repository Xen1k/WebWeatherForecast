import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import WeatherBoxController from '../WeatherBox/WeatherBoxController';
import { IWeatherData } from '../weatherData';
import './TrendingCities.css';


interface ITrendingCitiesProps {
    isLoading: boolean;
    citiesWeather: IWeatherData[];
}

const TrendingCitiesView: React.FC<ITrendingCitiesProps> = ({ citiesWeather, isLoading }) => (
    <div className='trending-cites-container'>
        {isLoading && <LoadingIndicator />}
        {!isLoading && citiesWeather.map((weatherData: IWeatherData) => <WeatherBoxController weatherData={weatherData} />)}
    </div>
)


export default TrendingCitiesView;