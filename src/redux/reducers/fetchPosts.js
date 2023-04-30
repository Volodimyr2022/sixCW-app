import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
     'posts/fetchPosts',
     async (arg, thunkApi) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await response.json()
        return json
    } catch (err) {
        return thunkApi.rejectWithValue(err.message)
    }
        
     }
)