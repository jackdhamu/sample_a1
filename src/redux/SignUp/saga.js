import { all, call, put, takeLatest } from 'redux-saga/effects'
import actions from 'redux/SignUp/actions';
import {  postRequest } from 'Config/axiosClient';
import { message } from 'antd';

function* createUser(params) {
  try {
    const response = yield call(() => postRequest('', params.payload));
    yield put({ type: actions.REGISTER_USER_SUCCESS, payload: response.data });
    message.success('registered successfully');
    
  } catch (e) {
    yield put({ type: actions.REGISTER_USER_FAILURE });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.USER_THEATER, createUser)]);
}
