import { combineReducers } from 'redux';

import shotsReducer from './shotsReducer';

const rootReducer = combineReducers({
    listShots: shotsReducer,
});

export default rootReducer;