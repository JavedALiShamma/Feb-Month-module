import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer"
const store=configureStore({
    reducer:{
        posts:todoReducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            thunk:true
        })
});
export default store;