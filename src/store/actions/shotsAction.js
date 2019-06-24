import {
    SUCCESS_SHOTS,
    REQUEST_SHOTS,
    REQUEST_SHOT_ID,
    SUCCESS_SHOT_ID,
    ERROR,
} from './types';

export const requestShots = () => ({ type: REQUEST_SHOTS });
export const successShots = (shots) => ({ type: SUCCESS_SHOTS, shots });

export const requestShotId = (id) => ({ type: REQUEST_SHOT_ID, id });
export const successShotId = (shot) => ({ type: SUCCESS_SHOT_ID, shot });

export const error = (error) => ({ type: ERROR, error });














