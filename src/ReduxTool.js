import { FormTool } from "./components/FormTool";
import { PostsTool } from "./components/PostsTool";
import { FetchedPostsTool } from "./components/FetchedPostTool";

export const ReduxTool = () => {

    return(
        <div className="container">
            <div className="row">
                <FormTool /> 
            </div>
            <div className="row">
                <div className="col">
                    <h2>Sync posts</h2>
                    <PostsTool />
                </div>
                <div className="col">
                    <h2>Async posts</h2>
                    <FetchedPostsTool />
                </div>
            </div>
            
        </div>
    )
}