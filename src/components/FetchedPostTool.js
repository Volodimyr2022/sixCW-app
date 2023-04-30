import { Post } from "./Post"
import { useSelector, useDispatch } from "react-redux"
import { fetchPosts } from "../redux/reducers/fetchPosts"


export const FetchedPostsTool = () => {

    const {fetchedPosts: posts, isLoading, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()
    if(isLoading) return <p>Loading...</p>

    if(error) return <p>Error: {error}</p>

    if(!posts.length) {
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