import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from './reducers';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducers, {}, composeWithDevTools(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(rootSaga);

export default store;
