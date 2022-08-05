import { capitalize } from '@material-ui/core';
import { colors } from '../settings';
import { IWeatherData } from '../weatherData';
import { AspectRatio } from 'react-aspect-ratio';
import './WeatherBox.css'

interface IWeatherBoxViewProps {
    weatherData: IWeatherData;
    height: number;
    getWeatherImage: () => string;
}

const WeatherBoxView: React.FC<IWeatherBoxViewProps> = ({ weatherData, getWeatherImage, height }) => (
    <div className='weather-data-container' style={{ backgroundColor: colors.tile, color: colors.text, height: height }}>
        <div className='data-upper-container'>
            <div style={{ flex: 1 }}>
                <p style={{ flex: 1, fontSize: 30, fontWeight: 'bold', whiteSpace: 'nowrap' }}>{weatherData.city}</p>
                <p>{weatherData.cloudsDescrition}</p>
                <p>{weatherData.rainDescription}</p>
            </div>
            <img src={getWeatherImage()} className="weather-image" />
        </div>
        <div style={{ flex: 0.7 }} />
        <div className='data-bottom-container'>
            <p style={{ flex: 1, paddingTop: 30 }}>Ощущается как {weatherData.feelsLike}°</p>
            <p style={{ flex: 1, fontSize: 100, fontWeight: 'bold' }}>{weatherData.temp}°</p>
        </div>
    </div>
)

export default WeatherBoxView;