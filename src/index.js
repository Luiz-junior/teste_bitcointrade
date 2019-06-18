import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Shots from './containers/Shots';

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Route exact path="/" component={App} />
        <Route path="/list-shots" component={Shots} />
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
