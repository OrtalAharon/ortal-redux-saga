import { take, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';

function* handleImagesLoad() {
    console.log('fetching images from unsplash');
}

function* handleDang() {
    console.log('Dang');
}
//watcher saga
function* rootSaga() {
    yield take('DANG');
    yield call(handleDang);
    yield take(IMAGES.LOAD);
    yield call(handleImagesLoad);
}
//watcher saga -> action -> worker saga
export default rootSaga;
