import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Cart:[]
}

export const slices = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
            state.filter((item)=>item.id!==action.payload);
        }
    }
}) 

export const {add, remove} = slices.actions;
export default slices;