import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category:[]
}

const categorySlice = createSlice({
    name:"category",
    initialState:initialState,
    reducers:{
        setCategory(state,value){
             state.category = value.payload
        }
    }

})

export const {setCategory} = categorySlice.actions;
export default categorySlice.reducer 