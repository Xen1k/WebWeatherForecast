import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { IWeatherData } from "../../weatherData";

type SearchPageSliceState = { isLoading: boolean; weatherData: IWeatherData | undefined };

const searchPageSlice: Slice = createSlice({
    name: 'searchPageSlice' as string,
    initialState: {
        isLoading: false,
        weatherData: undefined,
    } as SearchPageSliceState,
    reducers: {
        setLoading(state: SearchPageSliceState, action: PayloadAction<boolean>): void {
            state.isLoading = action.payload;
        },
        setWeatherData(state: SearchPageSliceState, action: PayloadAction<IWeatherData>): void {
            state.weatherData = action.payload;
        }
    }
})

export default searchPageSlice.reducer;
export const { setLoading, setWeatherData } = searchPageSlice.actions;
