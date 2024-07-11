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
            query:()=>
                GET_MISSION_DATA
          })
    }),
  })
  
  export const { useAddMissionMutation,useGetMissionQuery } = MissionApihandler;
