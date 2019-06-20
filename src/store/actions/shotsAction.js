import { FETCH_SHOTS, RECEIVE_FETCH_SHOTS, FETCH_SHOT_ID, RECEIVE_FETCH_SHOT_ID } from './types';

export const fetchShots = () => ({ type: FETCH_SHOTS });

export const receiveFetchShots = (shots) => ({ type: RECEIVE_FETCH_SHOTS, shots });

export const fetchShotId = () => ({ type: FETCH_SHOT_ID });

export const receiveFetchShotId = (id) => ({ type: RECEIVE_FETCH_SHOT_ID, id });








