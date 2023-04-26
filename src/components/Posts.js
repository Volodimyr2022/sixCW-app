import React from 'react'
import { Post } from "./Post";


export const Posts = ({posts}) => {
    if(!posts.length){
        return <div> Пока постов нет :( </div>
    }

    return(
        <div>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}


