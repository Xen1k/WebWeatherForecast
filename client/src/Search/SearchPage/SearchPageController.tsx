import SearchPageView from './SearchPageView'
import { IWeatherData } from '../../weatherData';
import { useSelector } from 'react-redux';


const SearchPageController = (): JSX.Element => {

    // Change ANY!
    const weatherData: IWeatherData | undefined = useSelector((state: any) => state.searchPageReducer.weatherData);
    const isLoading: boolean = useSelector((state: any) => state.searchPageReducer.isLoading);

    return (
        <SearchPageView
            weatherData={weatherData}
            isLoading={isLoading}
        />
    )
}



export default SearchPageController;


