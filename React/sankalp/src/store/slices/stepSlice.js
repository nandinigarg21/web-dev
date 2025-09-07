import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step : 1
}

const stepSlice = createSlice({
    name:"step",
    initialState:initialState,
    reducers:{
        setStep(state,value){
             state.step = value.payload
        }
    }

})

export const {setStep} = stepSlice.actions;
export default stepSlice.reducer 