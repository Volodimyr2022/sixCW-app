import { useDispatch, useSelector } from "react-redux"
import { Post } from "../components/Post"
import { fetchPosts } from "../redux/actions"

export const FetchPostsTwo = (props) => {

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.fetchedPosts);

    if(!posts.length){
        return <div>
            <h2>Постов пока нет :(</h2>  
            <button onClick={() => dispatch(fetchPosts())}>Загрузить посты</button>   
        </div>
    }
    return(
        <div>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}