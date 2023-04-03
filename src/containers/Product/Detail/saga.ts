import { call, put, takeLatest } from 'redux-saga/effects';

import { getProduct } from './service';
import { GET_PRODUCT_REQUEST } from './constants';
import { ResponseGenerator, GetProductDetailType } from './types';
import { getListProductFailed, getListProductSuccess } from './actions';

function* getProductDetail({ payload: { id } }: GetProductDetailType) {
  const res: ResponseGenerator = yield call(getProduct, id);

  const { status, data } = res;

  if (status) {
    yield put(getListProductSuccess(data.data));
  } else {
    yield put(getListProductFailed());
  }
}

export default function* productDetailSaga() {
  yield takeLatest(GET_PRODUCT_REQUEST, getProductDetail);
}
