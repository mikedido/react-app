import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';

import { Page1, Home } from './components/index';

const Router = (props) => {

    return (
        <ReactRouter>
            <Switch>
                <Route exact path="/" render={(props) => <Home/> } />
                <Route exact path="/page1" render={(props) => <Page1 /> } />
            </Switch>
        </ReactRouter>

    );
};

export default Router;