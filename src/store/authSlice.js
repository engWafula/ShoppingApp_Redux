import { createSlice } from "@reduxjs/toolkit";



const initialState={
    isLogedIn:false
}
const authSlice=createSlice({
    initialState,
    name:"auth",
    initialState,
    reducers:{
         login(state){
        state.isLogedIn=true
         },
         logout(state){
          state.isLogedIn=false
         }
    }
})

export  const{login,logout}=authSlice.actions

export default authSlice.reducer