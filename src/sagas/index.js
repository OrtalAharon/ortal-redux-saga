import { take, put, call } from 'redux-saga/effects';

function* byebyeSaga() {
    yield put({ type: 'BYE' });
}

function* workerSaga() {
    console.log('Hi from worker');
    console.log({ type: 'ACTION_FROM_WORKER' });
    yield put({ type: 'ACTION_FROM_WORKER' });
}
//watcher saga
function* rootSaga() {
    yield take('LOGIN');
    yield call(workerSaga);
    yield take('LOGOUT');
    yield call(byebyeSaga);
}
//watcher saga -> action -> worker saga
export default rootSaga;
