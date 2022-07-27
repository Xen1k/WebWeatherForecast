import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WeatherBoxController from '../WeatherBox/WeatherBoxController';


const ForecastView = (props: any) => (
    <div>
        <CitySelector {...props} />
        {props.weatherData?.name && <WeatherBoxController weatherData={props.weatherData} />}
    </div>
)

const CitySelector = (props: any) => (
    <div style={{ display: 'flex', flexDirection: 'column', width: 350, margin: 20 }}>
        <TextField
            name='city'
            onChange={e => props.onCityInput(e)}
            value={props.city}
            label='City'
        />
        <Button variant="contained" onClick={props.getForecastData}>Get forecast</Button>
    </div >
)

export default ForecastView;