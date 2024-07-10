import { configureStore } from '@reduxjs/toolkit'
import securedApi from '../securedApi';

export const store = configureStore({
    reducer: {
        // Add your other reducers here
        [securedApi.reducerPath]: securedApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(securedApi.middleware),
    });
    

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch