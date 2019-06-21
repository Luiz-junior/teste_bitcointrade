import { combineReducers } from 'redux';

import { fetchShotsReducer } from './shotsReducer';

const rootReducer = combineReducers({
    listShots: fetchShotsReducer,
});

export default rootReducer;