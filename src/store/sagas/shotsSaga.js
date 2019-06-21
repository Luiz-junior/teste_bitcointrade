import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

import api from '../../services/api';
import {
    REQUEST_SHOTS,
    SUCCESS_SHOT_ID,
    SUCCESS_SHOTS,
    REQUEST_SHOT_ID,
    ERROR,
} from '../actions/types';

const getShotsApi = async () => {
    try {
        const response = await api.get(`user/shots?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

const getShotIdApi = async id => {
    try {
        const response = await api.get(`/shots/${id}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

function* requestShotId(action) {
    try {
        const shot = yield call(getShotIdApi, action.id);
        yield put({ type: SUCCESS_SHOT_ID, shot });
    } catch (error) {
        yield put({ type: ERROR, error });

    }
};

function* requestShots() {
    try {
        const shots = yield call(getShotsApi);
        yield put({ type: SUCCESS_SHOTS, shots });
    } catch (error) {
        yield put({ type: ERROR, error });
    }
}

function* rootSaga() {
    yield all([
        takeLatest(REQUEST_SHOTS, requestShots),
        takeLatest(REQUEST_SHOT_ID, requestShotId),
    ]);
};

export default rootSaga;
