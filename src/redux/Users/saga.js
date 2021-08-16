import { all, call, put, takeLatest } from 'redux-saga/effects'
import actions from 'redux/Users/actions';
import { deleteRequest, getRequest, postRequest } from 'Config/axiosClient';
import { message } from 'antd';


function* getUsers(params) {
  try {
    const response = yield call(() => getRequest(`theatres/${params.payload}/roles`));
    yield put({ type: actions.GET_USERS_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: actions.GET_USERS_FAILURE });
  }
}

function* createUser(params) {
  try {
    const response = yield call(() => postRequest(`theatres/${params.secretKey}/roles`, { role: params.payload}));
    yield put({ type: actions.CREATE_USER_SUCCESS, payload: response.data });
    message.success('User created successfully');
  } catch (e) {
    yield put({ type: actions.CREATE_USER_FAILURE });
    message.error('Unable to create user');
  }
}

function* deleteUser(params) {
  try {
    yield call(() => deleteRequest(`users/${params.payload}`));
    yield put({ type: actions.DELETE_USER_SUCCESS, payload: params.payload });
    message.success('User deleted successfully');
  } catch (e) {
    yield put({ type: actions.DELETE_USER_FAILURE });
    message.error('Unable to delete user');
  }
}


export default function* rootSaga() {
  yield all([takeLatest(actions.GET_USERS, getUsers)]);
  yield all([takeLatest(actions.CREATE_USER, createUser)]);
  yield all([takeLatest(actions.DELETE_USER, deleteUser)]);
}
