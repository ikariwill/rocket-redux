/* eslint-disable no-console */
import { createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const tronMiddleware = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : () => {};
const middlewares = [sagaMiddleware, tronMiddleware];

const store = createStore(reducers, compose(...middlewares));

sagaMiddleware.run(sagas);

export default store;
