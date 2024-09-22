import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
    isAuthenticated: boolean;
    user: any; 
    roles:any
}

const initialState: LoginState = {
    isAuthenticated: false,
    user: null,
    roles:[]
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
        setRoles:(state,action)=>{
            state.roles=action.payload;
            state.isAuthenticated=true
        }

        
    },
});

export const { login, logout,setRoles} = loginSlice.actions;
export default loginSlice.reducer;
