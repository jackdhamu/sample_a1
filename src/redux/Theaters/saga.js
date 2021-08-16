import { all, call, put, takeLatest } from 'redux-saga/effects'
import actions from 'redux/Theaters/actions';
import { getRequest, postRequest, patchRequest } from 'Config/axiosClient';
import { message } from 'antd';


function* getTheaters(action) {
  try {
    const response = yield call(() => getRequest('theatres', action.payload));
    yield put({ type: actions.GET_THEATERS_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: actions.GET_THEATERS_FAILURE });
  }
}

function* createTheaters(params) {
  try {
    const response = yield call(() => postRequest('theatres', params.payload));
    yield put({ type: actions.REGISTER_THEATER_SUCCESS, payload: response.data });
    message.success('Theater registered successfully');
    yield put({ type: actions.GET_THEATERS });
  } catch (e) {
    yield put({ type: actions.REGISTER_THEATER_FAILURE });
  }
}

function* deleteTheaters(params) {
  try {
    const response = yield call(() => patchRequest(`theatres/${params.payload}/change-status`, {
      'status': params.status,
    } ));
    yield put({ type: actions.DELETE_THEATER_SUCCESS, payload: response.data });
    message.success(`Theater ${params.status ==='active' ? 'activated': params.status ==='inactive'? 'deactivated':'removed'} successfully`);
    yield put({ type: actions.GET_THEATERS });
  } catch (e) {
    yield put({ type: actions.DELETE_THEATER_FAILURE });
  }
}

function* updateTheaters(params) {
  try {
    yield call(() => patchRequest(`theatres/${params.secretKey}/update`, { theatre: params.payload }));
    yield put({ type: actions.UPDATE_THEATER_SUCCESS });
    message.success('Theater updated successfully');
    yield put({ type: actions.GET_THEATERS });
  } catch (e) {
    yield put({ type: actions.UPDATE_THEATER_FAILURE });
  }
}


export default function* rootSaga() {
  yield all([takeLatest(actions.GET_THEATERS, getTheaters)]);
  yield all([takeLatest(actions.REGISTER_THEATER, createTheaters)]);
  yield all([takeLatest(actions.DELETE_THEATER, deleteTheaters)]);
  yield all([takeLatest(actions.UPDATE_THEATER, updateTheaters)]);
}
