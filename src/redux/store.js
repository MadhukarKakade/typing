import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducer from './reducer';
import rootSaga from './saga';


// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with rootReducer and applyMiddleware
const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

// Run the rootSaga
sagaMiddleware.run(rootSaga);

export default store;