import { IMAGES } from '../constants';
import { take, fork, put, call } from 'redux-saga/effects';
import { loadImageStats, setImageStats, imagesStatsError } from '../actions';
import { fetchImageStats } from '../api';

function* handleStatsRequest(id) {
    for (let i = 0; i < 4; i++) {
        try {
            yield put(loadImageStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImageStats(id, res.downloads.total));
            return true;
        } catch (error) {}
    }
    yield put(imagesStatsError(id))
}

function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS); 
        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}

export default watchStatsRequest;
