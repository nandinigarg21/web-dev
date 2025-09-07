import { combineReducers } from "@reduxjs/toolkit"; 
import authReducer from "../store/slices/authSlice"
import userReducer from "../store/slices/userSlice"
import cartReducer from "../store/slices/cartSlice"
import stepReducer from "../store/slices/stepSlice"
import courseReducer from "../store/slices/courseSlice"
import categoryReducer from "../store/slices/categorySlice"
import loadingReducer from "../store/slices/loadingSlice"
import additionalDetailsReducer from "../store/slices/additionalDetailsSlice"

const reducers = combineReducers({
    auth:authReducer,
    user:userReducer,
    cart:cartReducer,
    step:stepReducer,
    course:courseReducer,
    category:categoryReducer,
    loading:loadingReducer,
    additionalDetails:additionalDetailsReducer

})

export default reducers