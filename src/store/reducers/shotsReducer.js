import { FETCH_SHOTS, FETCH_FAILED } from '../actions/types';

const INITIAL_STATE = {
    shots: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_SHOTS:
            return { ...state, shots: action.shots }
        default:
            return state;
    }
};