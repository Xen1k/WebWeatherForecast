import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchPageReducer from '../Search/SearchPage/searchPageSlice';

const rootReducer = combineReducers({ searchPageReducer });

export const store = configureStore({ reducer: rootReducer });