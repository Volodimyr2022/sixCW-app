import { Post } from "./Post"

export const FetchPosts = ({ posts }) => {
    if(!posts.length){
        return <div> Постов пока нет :( </div>
    }
    return(
        <div>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}