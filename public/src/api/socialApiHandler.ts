import securedApi from '../securedApi';
const ADD_LOGIN='/addSocialEvents';
const GET_SOCIAL_EVENTS='/getSocialEvents';
export const SocialApiHandler = securedApi.injectEndpoints({
    endpoints: (builder) => ({
        AddSocialEvents: builder.mutation({
            query: (addLogin) => ({
              url: ADD_LOGIN, 
              method: 'POST',
              body: addLogin,
            }),
          }),
          GetSocialEvents:builder.query({
            query:({id,pageNumber,pageSize})=>
                GET_SOCIAL_EVENTS+`?id=${id}&pageNumber=${pageNumber}&pageSize=${pageSize}`  
          })
        
    }),
  })
  
  export const { useAddSocialEventsMutation,useGetSocialEventsQuery } = SocialApiHandler;
