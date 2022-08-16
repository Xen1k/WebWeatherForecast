import { Container, Row, Col } from 'react-bootstrap';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';
import { IWeatherData } from '../../weatherData';
import InfoBoxController from '../../WeatherInfoCards/InfoBox/InfoBoxController';
import './SearchPage.css'
import WeatherBoxController from '../../WeatherInfoCards/WeatherBox/WeatherBoxController';
import SearchFormController from '../SearchForm/SearchFormController';


interface IForecastSearchProps {
    weatherData: IWeatherData | undefined;
    isLoading: boolean;
}


const SearchPageView: React.FC<IForecastSearchProps> = ({ weatherData, isLoading }) => (
    <div className='search-page-container'>
        <div className='d-lg-none' style={{ margin: 30 }}>
            <SearchFormController />
        </div>
        {isLoading && <LoadingIndicator />}
        {!isLoading && weatherData &&
            <Container>
                <Row>
                    <Col />
                    <Col md={4} >
                        <WeatherBoxController weatherData={weatherData} style={{ height: '100%' }} />
                    </Col>
                    <Col md={4} className='info-column'>
                        <div style={{ display: 'flex' }}>
                            <InfoBoxController style={{ marginTop: 0 }} header='Атмосферное давление' value={`${weatherData.pressure} мм`} />
                            <InfoBoxController style={{ marginTop: 0 }} header='Скорость ветра' value={`${weatherData.windSpeed} м/c`} />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <InfoBoxController style={{ marginBottom: 0 }} header='Влажность воздуха' value={`${weatherData.humidity}%`} />
                            <InfoBoxController style={{ marginBottom: 0 }} header='Облачность' value={`${weatherData.clouds}%`} />
                        </div>
                    </Col>
                    <Col />
                </Row>
            </Container>
        }
    </div >
)


export default SearchPageView;