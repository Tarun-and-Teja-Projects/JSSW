import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const SecuredApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://pokeapi.co/api/v2/',
    // prepareHeaders: (headers, { getState }) => {
    //   // Use type assertion for getState
    //   const token = (getState()).auth?.token;
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`)
    //   }
    //   return headers
    // }
  }),
  endpoints: (builder) => ({
    // Define endpoints here if any, otherwise leave it empty
  }),
})

// No need to export hooks from here
export default SecuredApi.reducer;
