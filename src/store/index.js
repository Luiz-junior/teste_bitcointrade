import { createStore, applyMiddleware, compose } from 'redux';
import reduxSaga from 'redux-saga';
import logger from 'redux-logger';

import reducers from  './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [reduxSaga, logger];

const store = createStore( reducers,  composeEnhancers(applyMiddleware(...middlewares)));

export default store;