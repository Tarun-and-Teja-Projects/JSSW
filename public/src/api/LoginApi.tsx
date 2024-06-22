import { SecuredApi } from '../securedApi';
export const LoginApi = SecuredApi.injectEndpoints({
    endpoints: (builder) => ({
      getPokemonByName: builder.query({
        query: (name) => `pokemon/${name}`,
      }),
    }),
  })
  
  export const { useGetPokemonByNameQuery } = LoginApi;
