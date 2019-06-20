import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import DetailsShot from './components/DetailsShot';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={App} />
            <Route path="/detail-shot/:id" component={DetailsShot} />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
