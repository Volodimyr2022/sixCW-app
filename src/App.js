import React from 'react';
// import Ordinary from './Ordinary';
// import { Formic } from './Formic';
// import { Yupp } from './Yupp';
// import { Rhf } from './Rhf';
// import { ReactPost } from './ReactPost';
import './/index.css'
import { ReduxTool } from './ReduxTool';
import { Provider } from 'react-redux';
import { store } from './redux/store';


class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Ordinary /> */}
                {/* <Formic /> */}
                {/* <Yupp /> */}
                {/* <Rhf /> */}
                {/* <ReactPost /> */}
                <Provider store={store}>
                 <ReduxTool />
                </Provider>
            </div>
        )
    }
}

export default App
