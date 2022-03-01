import {configureStore, ThunkAction} from '@reduxjs/toolkit';
import {Action} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import movieReducer from './slices/movieSlice';

const makeStore = () =>
    configureStore({
        reducer: {
            movie: movieReducer,
        },
        devTools: true,
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
