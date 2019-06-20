import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import api from '../services/api';
import { fetchShots, receiveFetchShots } from './actions/fetchShots';
import { FETCH_SHOTS } from '../store/actions/types';

const shotsApi = async () => {
    try {
        const response = await api.get(`user/shots?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`);
        return response.data;
    } catch (error) {
        return error;
    }
}


function* fetchShotsApi(action) {
    try {
        const shots = yield call(shotsApi);
        yield put(receiveFetchShots(shots));
    } catch (error) {
        yield put({ error });
    }
}

function* mySaga() {
    yield takeLatest(FETCH_SHOTS, fetchShotsApi);
};


export default mySaga;
