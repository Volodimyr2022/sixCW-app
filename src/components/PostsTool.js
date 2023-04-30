import { Post } from "./Post";
import { useSelector } from "react-redux";

export const PostsTool = () => {

    const posts = useSelector(state => state.posts.posts)


    if(!posts.length) {
        <div>Постов пока нет :(</div>
    }
    return(
        <div>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}