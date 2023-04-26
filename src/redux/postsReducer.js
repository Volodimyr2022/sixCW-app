import { CREATE_POST, FETCHED_POST } from "./type";

const initialState = {
    posts: [1,2,3],
    fetchedPosts: [],
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_POST:
            return { ...state, 
                    posts: [...state.posts, action.payload]};
        case FETCHED_POST: 
            return { ...state, 
                    fetchedPosts: action.payload};
    
    default:
    return state;
    }
};