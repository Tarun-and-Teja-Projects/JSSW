import { configureStore } from '@reduxjs/toolkit'
import securedApi from '../securedApi';
import loginSlice from './loginSlice';

export const store = configureStore({
    reducer: {
        [securedApi.reducerPath]: securedApi.reducer,
        login: loginSlice,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(securedApi.middleware),
    });
    

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
