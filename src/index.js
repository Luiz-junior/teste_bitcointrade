import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Shots from './containers/Shots';
import DetailsShot from './components/DetailsShots';

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Route exact path="/" component={App} />
        <Route path="/detail-shot/:id" component={DetailsShot} />
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
