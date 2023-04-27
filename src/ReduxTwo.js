
import React, { useState } from 'react';
// import { Post } from './components/Post';
import { FetchPostsTwo } from './components/FetchPostsTwo';
import { Form } from './components/Form';
import PostsTwo from './components/PostsTwo';

export const ReduxTwo = () => {

    const [posts, setPosts] = useState([1, 2])

    const addNewPost = (post)  => {
        setPosts([...posts, post]);
    }
 
    return (
        <div className="container">
            <div className="row">
                <Form addNewPost={addNewPost}/>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Sync posts</h2>
                    <PostsTwo />
                </div>
                <div className="col">
                    <h2>Async posts</h2>
                    <FetchPostsTwo />
                </div>
            </div>
        </div>
    );
};