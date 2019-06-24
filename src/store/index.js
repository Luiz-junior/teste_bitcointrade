import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import shotsSaga from './sagas/shotsSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware];

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(shotsSaga);

export default store;