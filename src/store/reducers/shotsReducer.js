import { RECEIVE_FETCH_SHOTS, RECEIVE_FETCH_SHOT_ID, FETCH_SHOT_ID, RECEIVE_FETCH_SHOT } from '../actions/types';

const INITIAL_STATE = {
    shots: [],
    shot: {},
};

export const fetchShotsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RECEIVE_FETCH_SHOTS:
            return { ...state, shots: action.shots }

        case RECEIVE_FETCH_SHOT:
            console.log('aqui', action)
            return { ...state, shot: action.shot }
        default:
            return state;
    }
};

