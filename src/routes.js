import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import AppLayout from './containers/layout/layout';
import HomePage from './containers/pages/home';

let routes = (
    <Route path="/" component={AppLayout}>
        <IndexRoute component={HomePage} />
    </Route>
);

export default routes;
