import { FETCH_SHOTS, RECEIVE_FETCH_SHOTS } from '../actions/types';

const INITIAL_STATE = {
    shots: []
};

export default (state = INITIAL_STATE, { type, shots }) => {
    switch (type) {
        case RECEIVE_FETCH_SHOTS:
            return { ...state, shots: shots }
        default:
            return state;
    }
};