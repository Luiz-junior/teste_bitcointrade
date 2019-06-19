import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import api from '../services/api';
import { fetchShots } from './actions/fetchShots';

const shotsApi = async () => {
    try {
        const response = await api.get(`user/shots?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`);
        return response;
    } catch (error) {
        return error;
    }
}


export function* fetchShots() {
    try {
        //const shots = yield call(api.get(`user/shots?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`))
        const shots = yield call(shotsApi())

        yield put(fetchShots(shots));
    } catch (error) {
        yield put({ error });
    }
}

