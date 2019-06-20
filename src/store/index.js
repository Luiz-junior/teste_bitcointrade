import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducers from './reducers';
import mysaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware, logger];

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(mysaga);

export default store;