// yourSaga.js
import { put, takeEvery } from 'redux-saga/effects';
import {fetchData, fetchDataSuccess, fetchDataError } from './actions';
import {getData} from './api';

// Worker Saga
function* fetchDataSaga() {
  try {
    // Call API or perform asynchronous task
    const data = yield getData.fetchData();

    // Dispatch success action
    yield put(fetchDataSuccess(data));
  } catch (error) {
    // Dispatch error action
    yield put(fetchDataError(error.message));
  }
}

// Watcher Saga
function* watchFetchData() {
  yield takeEvery(fetchData, fetchDataSaga);
}

// Root Saga
export default function* rootSaga() {
  yield watchFetchData();
}
