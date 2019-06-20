import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import api from '../../services/api';
import { receiveFetchShots, receiveFetchShotId } from '../actions/shotsAction';
import { FETCH_SHOTS, FETCH_SHOT_ID } from '../actions/types';

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

function* fetchShotIdApi(action) {
    try {
        const id = yield call(getShotIdApi);
        yield put(receiveFetchShotId(id));
    } catch (error) {

    }
};

function* fetchShots(action) {
    try {
        const shots = yield call(getShotsApi);
        yield put(receiveFetchShots(shots));
    } catch (error) {
        yield put({ error });
    }
}

function* shotsSaga() {
    yield takeLatest(FETCH_SHOTS, fetchShots);
    yield takeLatest(FETCH_SHOT_ID, fetchShotIdApi);
};


export default shotsSaga;
