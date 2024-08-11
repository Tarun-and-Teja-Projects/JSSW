import securedApi from '../securedApi';
const ADD_LOGIN='/login';
const LOGOUT='/logout';
export const LoginApi = securedApi.injectEndpoints({
    endpoints: (builder) => ({
        AddLogin: builder.mutation({
            query: (addLogin) => ({
              url: ADD_LOGIN, 
              method: 'POST',
              body: addLogin,
            }),
          }),
          Logout: builder.mutation({
            query: (addLogin) => ({
              url: LOGOUT, 
              method: 'POST',
              body: addLogin,
            }),
          }),
    }),
  })
  
  export const { useAddLoginMutation,useLogoutMutation } = LoginApi;
