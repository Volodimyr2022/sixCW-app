import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./fetchPosts";

const initialState = {
    posts: [],
    fetchedPosts: [],
    isLoading: false,
    error: null,
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        createPost: (state, action) => {
            state.posts.push(action.payload)
        }               
    },
    extraReducers: (builder) => {
       builder
       .addCase(fetchPosts.pending, (state, action) => {
        state.isLoading = true
       })
       .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.fetchedPosts = action.payload
        state.error = null
       })
       .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
       })
    }

//     extraReducers: {
//         [fetchPosts.pending.type]: (state) => {
//                 state.isLoading = true
//             },
//         [fetchPosts.fulfilled.type]: (state, action) => {
//                 state.isLoading = false
//                 state.fetchedPosts = action.payload
//                 state.error = null             
//             },
//         [fetchPosts.rejected.type]: (state, action) => {
//                 state.isLoading = false
//                 state.error = action.payload
//                }
// }
})
export const { createPost } = postSlice.actions

export default postSlice.reducer