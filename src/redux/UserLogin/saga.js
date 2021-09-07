import {all, call, put, takeLatest} from 'redux-saga/effects'
import actions from 'redux/UserLogin/actions';
import { postRequest, getRequest } from 'Config/axiosClient';

function* login(action) {
  try {
    const response = yield call(() => postRequest('', action.payload));
    yield put({
      type: actions.LOGIN_SUCCESS,
      payload: response?.data?.message?.cookies,
    });
    localStorage.setItem('authToken', response?.data?.message?.cookies);
  } catch (e) {
    yield put({type: actions.LOGIN_FAILURE});
  }
}


export default function* rootSaga() {
  yield all([takeLatest(actions.LOGIN, login)]);
}
