import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WeatherBoxController from '../WeatherBox/WeatherBoxController';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { IWeatherData } from '../weatherData';
import InfoBoxController from '../InfoBox/InfoBoxController';
import './ForecastSearch.css'

const ForecastSearchView = ({ weatherData, isLoading, getForecastData, onCityInput, city }: IForecastSearchProps): JSX.Element => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
        <CitySelector
            getForecastData={getForecastData}
            onCityInput={onCityInput}
            city={city}
        />
        {isLoading && <LoadingIndicator />}
        {!isLoading && weatherData &&
            <div style={{ display: 'flex' }}>
                <WeatherBoxController weatherData={weatherData} height={350} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}>
                        <InfoBoxController header='Атмосферное давление' value={`${weatherData.pressure} мм`} />
                        <InfoBoxController header='Скорость ветра' value={`${weatherData.windSpeed} м/c`} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <InfoBoxController header='Влажность воздуха' value={`${weatherData.humidity}%`} />
                        <InfoBoxController header='Облачность' value={`${weatherData.clouds}%`} />
                    </div>
                </div>
            </div>
        }
    </div>
)

const CitySelector = ({ getForecastData, onCityInput, city }: ICitySelectorProps): JSX.Element => (
    <div style={{ display: 'flex', width: '50%', padding: 20, margin: 10, justifyContent: 'center' }}>
        <TextField
            className='search-bar'
            name='city'
            inputProps={{ style: { height: 34 } }}
            onChange={e => onCityInput(e)}
            value={city}
            label='Город'
        />
        <Button className="search-button" variant="contained" onClick={getForecastData}>Искать</Button>
    </div >
)

interface ICitySelectorProps {
    getForecastData: () => void;
    onCityInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    city: string;
}

interface IForecastSearchProps {
    weatherData: IWeatherData | undefined;
    isLoading: boolean;
    getForecastData: () => void;
    onCityInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    city: string;
}

export default ForecastSearchView;