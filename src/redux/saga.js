// sagas.js
import { all } from 'redux-saga/effects';
import yourSaga from "./sagaAction"

// Root Saga
export default function* rootSaga() {
  yield all([
    // Add your individual Sagas here
    yourSaga(),
  ]);
}
