import securedApi from '../securedApi';
const ADD_LOGIN='/addMission';
const GET_MISSION_DATA='/getMission'
export const MissionApihandler = securedApi.injectEndpoints({
    endpoints: (builder) => ({
        AddMission: builder.mutation({
            query: (addLogin) => ({
              url: ADD_LOGIN, 
              method: 'POST',
              body: addLogin,
            }),
          }),
          GetMission:builder.query({
            query:({pageNumber,pageSize})=>
                GET_MISSION_DATA+`?pageNumber=${pageNumber}&pageSize=${pageSize}`
          }),
    }),
  })
  
  export const { useAddMissionMutation,useGetMissionQuery } = MissionApihandler;
