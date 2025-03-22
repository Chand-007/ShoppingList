import { createSlice } from "@reduxjs/toolkit";

export const TotalArray = createSlice({
    name:"totalArray",
    initialState:[],
    reducers:{
        addToArray:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addToArray} = TotalArray.actions
export default TotalArray.reducer