import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import DetailsShotContainer from './containers/Shots/DetailsContainer';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={App} />
            <Route path="/detail-shot/:id" component={DetailsShotContainer} />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
