import { call, put, takeLatest } from 'redux-saga/effects';

import { LOGIN_REQUEST, STATUS_SUCCESS } from './constants';

import { login, setToken } from './service';
import { loginSuccess, loginFailed } from './actions';
import { FetchLoginType, ResponseGenerator } from './types';

function* fetchLogin({ payload: { email, password, callback } }: FetchLoginType) {
  const res: ResponseGenerator = yield call(login, { email, password });
  const { data, status } = res;

  if (status === STATUS_SUCCESS) {
    const {
      data: {
        tokens: { access, refresh },
        user,
      },
    } = data;
    const token = localStorage.getItem('token') || '';

    yield call(setToken, token);
    yield put(loginSuccess(access, refresh, user));
    callback();
  } else {
    console.log(data);
    yield put(loginFailed(data));
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, fetchLogin);
}

export default loginSaga;
