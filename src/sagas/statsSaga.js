import { call, fork, put, take } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImagesStats } from '../api';
import { loadImageStats, setImageStats, setImageStatsEror } from '../actions';

function* handleStatdRequest(id) {
    //console.log('Fetching stats for', id);
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id));
            const res = yield call(fetchImagesStats, id);
            yield put(setImageStats(id, res.downloads.total));
            return true;
        } catch (e) {}
    }

    yield put(setImageStatsEror(id));
}
export default function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatdRequest, images[i].id); //fork runing on parall, call one by one
        }
    }
}
