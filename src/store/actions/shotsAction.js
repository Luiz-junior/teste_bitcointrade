import {
    FETCH_SHOTS,
    RECEIVE_FETCH_SHOTS,
    RECEIVE_FETCH_SHOT_ID,
    RECEIVE_FETCH_SHOT,
    ASYNC_FETCH_SHOT_ID,
} from './types';

export const fetchShots = () => ({ type: FETCH_SHOTS });

export const receiveFetchShots = (shots) => ({ type: RECEIVE_FETCH_SHOTS, shots });

export const async_fetch_shot_id = (shot) => ({ type: ASYNC_FETCH_SHOT_ID, shot });

// essa action é disparada pelo component
export const receiveFetchShotId = (id) => ({ type: RECEIVE_FETCH_SHOT_ID, id });

export const receiveFetchShot = (shot) => ({ type: RECEIVE_FETCH_SHOT, shot });













