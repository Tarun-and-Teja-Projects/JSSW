import securedApi from '../securedApi';
const ADD_LOGIN='/addorganization';
const GET_ORGANIZATION='/Organization';
const GET_ORGANIZATION_BY_ID='/organizations';
const ADD_FOUNDERS='/addFounders';
const GET_FOUNDERS='/getFounders';
const UPDATE_FOUNDERS='/updateFounders';
const DELETE_FOUNDERS='/deleteFounders';
const GETALL_ORGANIZATIONS='/getallOrganization';
const ADD_ORGUSERS='/addUsers'
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
            query:({id,pageNumber,pageSize})=>
              GET_FOUNDERS+`?id=${id}&page=${pageNumber}&pageSize=${pageSize}`
          }),
          UpdateFounders:builder.mutation({
            query: (addLogin) => ({
              url: UPDATE_FOUNDERS, 
              method: 'PUT',
              body: addLogin,
            }),
          }),
          DeleteFounders:builder.mutation({
            query:(id)=>({
              url:DELETE_FOUNDERS+`/${id}`,
              method:'DELETE',
            })
          }),
          GetAllOrganizations:builder.query({
            query:()=>
              GETALL_ORGANIZATIONS
          }),
          AddOrgUsers:builder.mutation({
            query:(addfounders)=>({
              url:ADD_ORGUSERS,
              method:'POST',
              body:addfounders
            })
          }),
         
    }),
  })
  
  export const { useAddOrganizationMutation,useGetOrganizationQuery,useGetOrganizationByIdQuery,useAddFoundersMutation,useGetFounderByOrgIdQuery,useUpdateFoundersMutation,useDeleteFoundersMutation,useGetAllOrganizationsQuery,useAddOrgUsersMutation} = OrganizationApiHandler;
