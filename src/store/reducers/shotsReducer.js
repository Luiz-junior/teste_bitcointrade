import {
    RECEIVE_FETCH_SHOTS,
    FETCH_SHOT_ID,
    RECEIVE_FETCH_SHOT,
    ASYNC_FETCH_SHOT_ID
} from '../actions/types';

const INITIAL_STATE = {
    shots: [],
    shot: {},
};

export const fetchShotsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RECEIVE_FETCH_SHOTS:
            return { ...state, shots: action.shots }

        case RECEIVE_FETCH_SHOT:
            return { ...state, shot: action.shot }
        default:
            return state;
    }
};

