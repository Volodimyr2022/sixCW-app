import React from 'react';
// import Ordinary from './Ordinary';
// import { Formic } from './Formic';
// import { Yupp } from './Yupp';
// import { Rhf } from './Rhf';
// import { ReduxOne } from './ReduxOne';
import './/index.css'
import { ReduxTwo } from './ReduxTwo'
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    );

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Ordinary /> */}
                {/* <Formic /> */}
                {/* <Yupp /> */}
                {/* <Rhf /> */}
                {/* <ReduxOne /> */}
                <Provider store={store}>
                    <ReduxTwo />
                </Provider>
            </div>
        )
    }
}

export default App
