import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchPageReducer from '../Search/SearchPage/searchPageSlice';

const rootReducer = combineReducers({ searchPageReducer });


export type AppState = ReturnType<typeof store.getState>;

export const store = configureStore({ reducer: rootReducer });