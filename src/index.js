'use strict';
import bootstrap from 'redux-bootstrap';
import routes from './routes';
import { createBrowserHistory } from 'react-router';
import * as reducers from './reducers'
import ReactDOM from 'react-dom'

bootstrap({
    // optional
    container: 'root',

    // optional
    createHistory: createBrowserHistory,

    // optional
    historyOptions: {},

    // optional
    initialState: {},

    // optional    
    middlewares: [],

    // optional
    render: ReactDOM.render,

    reducers,
    routes,
});
