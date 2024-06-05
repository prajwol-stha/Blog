import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userData: null
}


const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        //reducers actions
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },
        logout:(state)=>{//no need of actions
            state.status=false;
            state.userData=null;
        }
    }
});

export const {login,logout}=authSlice.actions

export default authSlice.reducer
