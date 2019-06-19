import { FETCH_SHOTS, FETCH_FAILED } from './types';

export const fetchShots = (shots) => {
    return {
        type: FETCH_SHOTS,
        shots
    }
};



