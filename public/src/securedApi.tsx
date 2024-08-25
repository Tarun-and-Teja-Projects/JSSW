import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const securedApi = createApi({
  reducerPath: 'securedApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jssw-nodejs-api-zq35qrax5q-uc.a.run.app/api',
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem('accessToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: () => ({
    // Define your endpoints here
  }),
});

export default securedApi;
