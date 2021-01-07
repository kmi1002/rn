import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from '@stores/index';
import rootSaga from '@sagas/index';

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(applyMiddleware(...middleware, logger));
  }

  return applyMiddleware(...middleware);
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(rootReducer, bindMiddleware([...middlewares]));
  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = makeStore()
