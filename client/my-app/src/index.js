import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Films from './components/Films';
import EditorFilms from './components/EditorFilms';
import Error from './components/Error';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Films} />
                <Route exact path='/:id' component={EditorFilms} />
                <Route path='*' component={Error} />
            </Switch>
        </App>
    </BrowserRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
