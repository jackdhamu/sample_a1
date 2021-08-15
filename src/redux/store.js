import {configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducers from './rootReducers'
import rootSaga from './rootSaga';

export default function configureAppStore(preloadedState) {

  const sagaMiddleware = createSagaMiddleware();

  const appReducer = combineReducers({
    ...reducers,
  });

  const rootReducer = (state, action) => {
    if (action.type === 'LOGIN_FAILURE' ||
        action.type === 'AUTHENTICATE_USER_FAILURE') {
      state = undefined;
    }
    return appReducer(state, action);
  };

  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    preloadedState,
  })
  sagaMiddleware.run(rootSaga)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('redux/rootReducers', () => store.replaceReducer(rootReducer))
  }
  return store
}
