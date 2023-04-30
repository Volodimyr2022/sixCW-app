
import React, { useState } from 'react';
import { Posts } from './components/Posts';
import { FetchedPosts } from './components/FetchedPosts';
import { Form } from './components/Form';


export const ReactPost = () => {

    const [posts, setPosts] = useState([])

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
                    <FetchedPosts posts={posts}/>
                </div>
            </div>
        </div>
    );
};