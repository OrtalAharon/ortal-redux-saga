import { takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../constants';

function* handleImagesLoad() {
    console.log('fetching images from unsplash');
}

function* handleDang() {
    console.log('Dang');
}
//watcher saga
function* rootSaga() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad); //nonblocking event.
    yield takeEvery('DANG', handleDang);
}
//watcher saga -> action -> worker saga
export default rootSaga;
