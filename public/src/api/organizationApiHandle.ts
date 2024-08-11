import securedApi from '../securedApi';
const ADD_LOGIN='/addorganization';
const GET_ORGANIZATION='/Organization';
const GET_ORGANIZATION_BY_ID='/organizations';
const ADD_FOUNDERS='/addFounders';
const GET_FOUNDERS='/getFounders'
export const OrganizationApiHandler = securedApi.injectEndpoints({
    endpoints: (builder) => ({
        AddOrganization: builder.mutation({
            query: (addLogin) => ({
              url: ADD_LOGIN, 
              method: 'POST',
              body: addLogin,
            }),
          }),
          GetOrganization:builder.query({
            query:()=>
                GET_ORGANIZATION
          }),
          GetOrganizationById:builder.query({
            query:({id})=>
              GET_ORGANIZATION_BY_ID+`?id=${id}`
          }),
          AddFounders:builder.mutation({
            query:(addfounders)=>({
              url:ADD_FOUNDERS,
              method:'POST',
              body:addfounders
            })
          }),
          GetFounderByOrgId:builder.query({
            query:({id})=>
              GET_FOUNDERS+`?id=${id}`
          })
         
    }),
  })
  
  export const { useAddOrganizationMutation,useGetOrganizationQuery,useGetOrganizationByIdQuery,useAddFoundersMutation,useGetFounderByOrgIdQuery } = OrganizationApiHandler;
