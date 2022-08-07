import { capitalize } from '@material-ui/core';
import { colors } from '../../settings';
import { IWeatherData } from '../../weatherData';
import './WeatherBox.css'

interface IWeatherBoxViewProps {
    weatherData: IWeatherData;
    getWeatherImage: () => string;
    style?: React.CSSProperties;
}

const WeatherBoxView: React.FC<IWeatherBoxViewProps> = ({ weatherData, getWeatherImage, style }) => (
    <div style={{ backgroundColor: colors.tile, color: colors.text, ...style }} className='weather-data-container'>
        <div className='data-upper-container'>
            <div style={{ flex: 1 }}>
                <p style={{ fontSize: 24, margin: 0, fontWeight: 'bold', whiteSpace: 'nowrap' }}>{weatherData.city}</p>
                <p className='small-info-text'>{weatherData.cloudsDescrition}</p>
                <p className='small-info-text'>{weatherData.rainDescription}</p>
            </div>
            <img src={getWeatherImage()} className="weather-image" />
        </div>
        <div className='data-bottom-container'>
            <p className='small-info-text' style={{ paddingTop: 30 }}>Ощущается как {weatherData.feelsLike}°</p>
            <p style={{ margin: 0, fontSize: 100, fontWeight: 'bold' }}>{weatherData.temp}°</p>
        </div>
    </div>
)

export default WeatherBoxView;