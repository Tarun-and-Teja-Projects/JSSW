import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const securedApi = createApi({
  reducerPath: 'securedApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'test-txq9.onrender.com/api',
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
