import { all } from 'redux-saga/effects';
import authenticateSaga from 'redux/Authenticate/saga';
import userSaga from 'redux/Users/saga';
import theatersSaga from 'redux/Theaters/saga';

// Here you can include all the saga which you write for components
export default function* rootSaga(){
  yield all([
    authenticateSaga(),
    userSaga(),
    theatersSaga(),
  ]);
}
