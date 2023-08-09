import {createSlice} from '@reduxjs/toolkit'

export const alertSlice=createSlice({
    name:"alerts",
    initialState:{
        loading:false,
    },
    reducers:{
        showLoading:(state)=>{

        },
        hideLoading:(state)=>{
            state.loading=false;
        }
    }
   
})
 export const {showLoading,hideLoading}=alertSlice.actions