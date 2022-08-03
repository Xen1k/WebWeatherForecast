import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WeatherBoxController from '../WeatherBox/WeatherBoxController';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { IWeatherData } from '../weatherData';

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

const ForecastSearchView = ({ weatherData, isLoading, getForecastData, onCityInput, city }: IForecastSearchProps): JSX.Element => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
        <CitySelector
            getForecastData={getForecastData}
            onCityInput={onCityInput}
            city={city}
        />
        {isLoading && <LoadingIndicator />}
        {!isLoading && weatherData && <WeatherBoxController weatherData={weatherData} />}
    </div>
)

const CitySelector = ({ getForecastData, onCityInput, city }: ICitySelectorProps): JSX.Element => (
    <div style={{ display: 'flex', width: '50%', padding: 20, margin: 10, justifyContent: 'center' }}>
        <TextField
            style={{ width: '100%' }}
            name='city'
            onChange={e => onCityInput(e)}
            value={city}
            label='Город'
        />
        <Button variant="contained" onClick={getForecastData}>Искать</Button>
    </div >
)

export default ForecastSearchView;