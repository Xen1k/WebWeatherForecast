import SearchPageView from './SearchPageView'
import { IWeatherData } from '../../weatherData';
import useAppSelector from '../../hooks/useAppSelector';
import { AppState } from '../../app/store';


const SearchPageController = (): JSX.Element => {

    const weatherData: IWeatherData | undefined = useAppSelector((state: AppState) => state.searchPageReducer.weatherData);
    const isLoading: boolean = useAppSelector((state: AppState) => state.searchPageReducer.isLoading);

    return (
        <SearchPageView
            weatherData={weatherData}
            isLoading={isLoading}
        />
    )
}



export default SearchPageController;


