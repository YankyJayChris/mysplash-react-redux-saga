import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';
import { all } from 'redux-saga/effects';

function* rootSaga() {
    yield all([imagesSaga(), statsSaga()]);
}

export default rootSaga;    
