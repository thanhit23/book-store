import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_LIST_PRODUCT_REQUEST } from './constants';
import { getListProduct as getListProductService } from './service';
import { getListProductSuccess, getListProductFailed } from './actions';

function* getListProduct() {
  const res: { status: boolean; data: { data: []; message: string } } = yield call(getListProductService);

  const { status, data } = res;
  if (status) {
    const { data: dataRes } = data;
    yield put(getListProductSuccess(dataRes));
  } else {
    const { message } = data;
    yield put(getListProductFailed(message));
  }
}

export default function* listProduct() {
  yield takeLatest(GET_LIST_PRODUCT_REQUEST, getListProduct);
}
