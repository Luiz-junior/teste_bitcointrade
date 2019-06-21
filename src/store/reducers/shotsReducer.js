import {
    SUCCESS_SHOTS,
    SUCCESS_SHOT_ID,
    ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    shots: [],
    shot: {},
    error: '',
};

export const fetchShotsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUCCESS_SHOTS:
            return { ...state, shots: action.shots }

        case SUCCESS_SHOT_ID:
            return { ...state, shot: action.shot }
        case ERROR:
            return { ...state, error: action.error }
        default:
            return state;
    }
};

