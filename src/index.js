import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './app/reducers/main';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true,
        }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware),
);
const store = createStore(reducers, enhancer);

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), root);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
