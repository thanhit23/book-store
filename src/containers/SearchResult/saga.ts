import { takeLatest, call, put } from 'redux-saga/effects';

import { getProductSuccess, getProductFailed } from './actions';
import { GET_PRODUCT_BY_KEYWORD_REQUEST } from './constants';
import { RegisterGenerator, ResponseGenerator } from './types';
import { getProduct as getProductService } from './service';

function* getProduct({ payload: { keyword } }: RegisterGenerator) {
  const res: ResponseGenerator = yield call(getProductService, keyword);

  const {
    data: { data, message, status },
  } = res;

  if (status) {
    yield put(getProductSuccess(data));
  } else {
    yield put(getProductFailed(message));
  }
}

export default function* searchResult() {
  yield takeLatest(GET_PRODUCT_BY_KEYWORD_REQUEST, getProduct);
}
