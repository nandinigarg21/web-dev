import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    additionalDetails : localStorage.getItem("additoinalDetails") ? JSON.parse(localStorage.getItem("additionalDetails") ) : null
}

const additionalDetailsSlice = createSlice({
    name:"additionalDetails",
    initialState:initialState,
    reducers:{
        setAdditionalDetails(state,value){
             state.user = value.payload
        }
    }

})

export const {setAdditionalDetails} = additionalDetailsSlice.actions;
export default additionalDetailsSlice.reducer 