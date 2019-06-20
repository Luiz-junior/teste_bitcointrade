import { FETCH_SHOTS, RECEIVE_FETCH_SHOTS } from './types';

export const fetchShots = () => ({ type: FETCH_SHOTS });

export const receiveFetchShots = (shots) => {
    return {
        type: RECEIVE_FETCH_SHOTS,
        shots
    }
};








