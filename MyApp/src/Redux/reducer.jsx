import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchPosts=createAsyncThunk("todos/Fetchposts", async()=>{
    const response=await fetch("http://jsonplaceholder.typicode.com/posts");
    return response.json();
})
const todoSlice=createSlice({
    name:"posts",
    initialState:{
        posts:[],
        status:'idle', // idle,loading,suucceded,failed
        error:"null"
    },
    reducers:{
       
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPosts.pending,(state)=>{
            state.status="loading"
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.status="succeeded",
            state.posts=action.payload;
        })
        .addCase(fetchPosts.rejected,(state,action)=>{
            state.status="failed",
            state.error=action.error.message
        })
    }
});

export default todoSlice.reducer;