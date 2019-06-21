import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

import api from '../../services/api';
import {
    FETCH_SHOTS,
    RECEIVE_FETCH_SHOT,
    RECEIVE_FETCH_SHOTS,
    RECEIVE_FETCH_SHOT_ID,
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
        console.log("RESPONSE API", response.data)
        return response.data;
    } catch (error) {
        return error;
    }
};

function* fetchShotIdApi(action) {
    try {
        const shot = yield call(getShotIdApi, action.id);
        //const shot = yield call(getShotIdApi(action.id));
        yield put({ type: RECEIVE_FETCH_SHOT, shot });
    } catch (error) {
        yield put({ type: 'ERROR' });

    }
};

function* fetchShots(action) {
    try {
        const shots = yield call(getShotsApi);
        // dentro do put posso passar uma action
        yield put({ type: RECEIVE_FETCH_SHOTS, shots });
    } catch (error) {
        yield put({ type: 'ERROR' });

    }
}

function* rootSaga() {
    yield all([
        takeLatest(FETCH_SHOTS, fetchShots),
        takeLatest(RECEIVE_FETCH_SHOT_ID, fetchShotIdApi),
    ]);
};

export default rootSaga;
