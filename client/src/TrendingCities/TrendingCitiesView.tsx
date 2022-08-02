import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import WeatherBoxController from '../WeatherBox/WeatherBoxController';
import './TrendingCities.css';


interface ITrendingCitiesProps {
    isLoading: boolean;
    citiesWeather: object[];
}

const TrendingCitiesView = ({ citiesWeather, isLoading }: ITrendingCitiesProps): JSX.Element => (
    <div className='trending-cites-container'>
        {isLoading && <LoadingIndicator />}
        {!isLoading && citiesWeather.map((weatherData: object) => <WeatherBoxController weatherData={weatherData} />)}
    </div>
)


export default TrendingCitiesView;