import { capitalize } from '@material-ui/core';
import { IWeatherData } from '../weatherData';
import './WeatherBox.css'


interface IWeatherBoxProps {
    weatherData: IWeatherData;
    getWeatherImage: () => string;
    getTimeString: () => string;
    getDateString: () => string;
    getThemeColor: () => string;
}

const WeatherBoxView: React.FC<IWeatherBoxProps> = ({ weatherData, getWeatherImage, getTimeString, getDateString, getThemeColor }) => (
    <div className='weather-data-container' style={{ backgroundColor: getThemeColor() }}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', width: '80%', justifyContent: 'space-between' }}>
            <p style={{ fontWeight: 'bold', fontSize: 25, alignSelf: 'center' }}> {capitalize(weatherData.city)} </p>
            <p style={{ alignSelf: 'center' }}> {getTimeString()}  </p>
        </div>
        <div style={{ display: 'flex', flex: 1.5 }}>
            <img src={getWeatherImage()} style={{ height: 80, alignSelf: 'center', justifySelf: 'center' }} />
        </div>
        <div className='weather-inner-container'>
            <p style={{ fontWeight: 'bold', fontSize: 27 }}> {parseInt(weatherData.temp)}° </p>
            <p style={{ fontSize: 20 }}> {getDateString()} </p>
            <div>
                <p style={{ fontSize: 15 }}> Min: {parseInt(weatherData.temp_min)}° </p>
                <p style={{ fontSize: 15 }}> Max: {parseInt(weatherData.temp_max)}° </p>
            </div>
        </div>
    </div>
)

export default WeatherBoxView;