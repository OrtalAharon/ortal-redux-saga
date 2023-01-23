import { all } from 'redux-saga/effects';
import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';

export default function* rootSaga() {
    yield all([imagesSaga(), statsSaga()]);
}
//export default imagesSaga;

// import { takeEvery } from 'redux-saga/effects';
// import { IMAGES } from '../constants';

// function* handleImagesLoad() {
//     console.log('fetching images from unsplash');
// }

// //watcher saga
// function* rootSaga() {
//     yield takeEvery(IMAGES.LOAD, handleImagesLoad);
// }
// //watcher saga -> action -> worker saga
// export default rootSaga;
