import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';

import createReducer from './reducers';
import { InjectedStore } from './common/types';
import middlewareStorage from './middleware/apiMiddleware';

export default function configureStore(initialState = {}) {
  const reduxSagaMonitorOptions = {};
  let composeEnhancers = compose;

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

    // NOTE: Uncomment the code below to restore support for Redux Saga
    // Dev Tools once it supports redux-saga version 1.x.x
    // if (window.__SAGA_MONITOR_EXTENSION__)
    //   reduxSagaMonitorOptions = {
    //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
    //   };
    /* eslint-enable */
  }

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [thunk, sagaMiddleware, middlewareStorage];

  // @ts-ignore
  const enhancer = [applyMiddleware(...middlewares)];

  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancer)) as InjectedStore;

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {};

  return store;
}
