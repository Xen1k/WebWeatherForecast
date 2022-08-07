import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import WeatherBoxController from '../WeatherInfoCards/WeatherBox/WeatherBoxController';
import { IWeatherData } from '../weatherData';
import './TrendingCities.css';


interface ITrendingCitiesProps {
    isLoading: boolean;
    citiesWeather: IWeatherData[];
}

const TrendingCitiesView: React.FC<ITrendingCitiesProps> = ({ citiesWeather, isLoading }) => (
    <div className='trending-cites-container'>
        {isLoading && <LoadingIndicator />}
        {!isLoading && citiesWeather.map((weatherData: IWeatherData, index: number) => <WeatherBoxController key={index} weatherData={weatherData} style={{ height: 300 }} />)}
    </div>
)


export default TrendingCitiesView;