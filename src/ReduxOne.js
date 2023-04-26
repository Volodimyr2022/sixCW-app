
import React, { useState } from 'react';
import { Posts } from './components/Posts';
import { FetchPosts } from './components/FetchPosts';
import { Form } from './components/Form';


export const ReduxOne = () => {

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
                    <Posts posts={posts}/>
                </div>
                <div className="col">
                    <h2>Async posts</h2>
                    <FetchPosts posts={posts}/>
                </div>
            </div>
        </div>
    );
};