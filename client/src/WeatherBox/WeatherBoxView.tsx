import './WeatherBox.css'

const WeatherBoxView = (props: any) => (
    <div className='weather-data-container' style={{backgroundColor: props.GetThemeColor()}}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', width: '80%', justifyContent: 'space-between' }}>
            <p style={{ fontWeight: 'bold', fontSize: 25, alignSelf: 'center' }}> {props.weatherData.name} </p>
            <p style={{ alignSelf: 'center' }}> {props.GetTimeString()}  </p>
        </div>
        <div style={{ display: 'flex', flex: 1.5 }}>
            <img src={props.GetWeatherImage()} style={{ height: 80, alignSelf: 'center', justifySelf: 'center' }} />
        </div>
        <div className='weather-inner-container'>
            <p style={{ fontWeight: 'bold', fontSize: 27 }}> {parseInt(props.weatherData.main.temp)}° </p>
            <p style={{ fontSize: 20 }}> {((new Date())).toDateString()} </p>
            <div>
                <p style={{ fontSize: 15 }}> Min: {parseInt(props.weatherData.main.temp_min)}° </p>
                <p style={{ fontSize: 15 }}> Max: {parseInt(props.weatherData.main.temp_max)}° </p>
            </div>
        </div>
    </div>
)

export default WeatherBoxView;