import securedApi from '../securedApi';
const ADD_LOGIN='/login';
export const LoginApi = securedApi.injectEndpoints({
    endpoints: (builder) => ({
        AddLogin: builder.mutation({
            query: (addLogin) => ({
              url: ADD_LOGIN, 
              method: 'POST',
              body: addLogin,
            }),
          }),
    }),
  })
  
  export const { useAddLoginMutation } = LoginApi;
