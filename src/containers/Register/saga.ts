import { call, put, takeLatest } from 'redux-saga/effects';

import { REGISTER_REQUEST } from './constants';
import { register as registerService } from './service';
import { registerFailed, registerSuccess } from './actions';
import { RegisterGenerator, ResponseGenerator } from './types';

function* register({ payload: { data, callback } }: RegisterGenerator) {
  const res: ResponseGenerator = yield call(registerService, data);

  const {
    data: { status, message },
  } = res;

  if (status) {
    yield put(registerSuccess());
    callback();
  } else {
    yield put(registerFailed(message));
  }
}

export default function* registerSaga() {
  yield takeLatest(REGISTER_REQUEST, register);
}
