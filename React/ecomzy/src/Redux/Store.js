import { configureStore } from "@reduxjs/toolkit";
import cartSlices from './Slices/CartSlices';



export const store = configureStore({
    reducer:{
        cart: cartSlices,
    }
})


