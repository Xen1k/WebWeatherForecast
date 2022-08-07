import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';
import { IWeatherData } from '../../weatherData';
import InfoBoxController from '../../WeatherInfoCards/InfoBox/InfoBoxController';
import './ForecastSearch.css'
import WeatherBoxController from '../../WeatherInfoCards/WeatherBox/WeatherBoxController';

interface ISearchFormProps {
    getForecastData: (e: React.FormEvent<HTMLFormElement>) => void;
    onCityInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface IForecastSearchProps extends ISearchFormProps {
    weatherData: IWeatherData | undefined;
    isLoading: boolean;
}


const ForecastSearchView: React.FC<IForecastSearchProps> = ({ weatherData, isLoading, getForecastData, onCityInput }) => (
    <div className='search-page-container' style={{}}>
        <SearchForm
            getForecastData={getForecastData}
            onCityInput={onCityInput}
        />
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

const SearchForm: React.FC<ISearchFormProps> = ({ getForecastData, onCityInput }) => (
    <Form className='search-form' onSubmit={e => getForecastData(e)}>
        <Form.Control className='search-bar' onChange={e => onCityInput(e)} name='city' type='text' placeholder="Введите город" />
        <Button variant="primary" type="submit"> Искать </Button>
    </Form>
)


export default ForecastSearchView;